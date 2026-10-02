/* =============================================================================
   MDS Harness - tools/tokens-sync.mjs
   방향: design-v2.md -> tokens.css (원본) -> tokens.json -> figma-variables.json
   tokens.css는 절대 수정하지 않는다. tokens.json / figma-variables.json은 파생물이다.

   사용:
     node mds-harness/tools/tokens-sync.mjs            # tokens.json + figma-variables.json 재생성
     node mds-harness/tools/tokens-sync.mjs --check    # 기존 tokens.json과 tokens.css 정합 검사 (diff 0이면 exit 0)
   ============================================================================= */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const HARNESS = path.resolve(HERE, "..");
const CSS_PATH = path.join(HARNESS, "tokens.css");
const JSON_PATH = path.join(HARNESS, "tokens.json");
const FIGMA_PATH = path.join(HARNESS, "figma-variables.json");
const CHECK = process.argv.includes("--check");

const BRANDS = ["mp", "hg", "aia", "ss", "dd", "hc", "gs"];

/* ---------- 1) tokens.css 파싱 ---------- */
let css = fs.readFileSync(CSS_PATH, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
// @media 블록은 반응형 오버라이드 - 변수 원본이 아니므로 media 항목으로만 기록
const media = [];
css = css.replace(/@media[^{]+\{([\s\S]*?\}\s*)\}/g, (m, body) => {
  media.push(m.trim().split("\n")[0].trim());
  return "";
});

const root = {};
const brands = {};
const states = {};
const order = [];
const blockRe = /([^{}]+)\{([^{}]*)\}/g;
let mm;
while ((mm = blockRe.exec(css))) {
  const selector = mm[1].trim();
  const decls = mm[2].split(";").map((d) => d.trim()).filter(Boolean);
  for (const d of decls) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const name = d.slice(0, i).trim();
    const value = d.slice(i + 1).trim();
    if (!name.startsWith("--")) continue;
    const key = name.slice(2);
    if (selector === ":root") {
      if (!(key in root)) order.push(key);
      root[key] = value;
    } else {
      const b = selector.match(/\[data-brand="(\w+)"\]/);
      const s = selector.match(/\[data-state="(\w+)"\]/);
      if (b && s) {
        const k = `${b[1]}:${s[1]}`;
        (states[k] ||= {})[key] = value;
      } else if (b) {
        (brands[b[1]] ||= {})[key] = value;
      }
    }
  }
}

/* ---------- 2) 값 해석 ---------- */
const VAR_RE = /^var\(--([\w-]+)\)$/;
function resolve(value, brand, depth = 0) {
  const v = value.match(VAR_RE);
  if (!v || depth > 8) return value;
  const ref = v[1];
  const next = (brand && brands[brand]?.[ref]) ?? root[ref];
  return next === undefined ? value : resolve(next, brand, depth + 1);
}
const isColor = (v) => /^#[0-9a-f]{3,8}$/i.test(v) || /^rgba?\(/.test(v);
const isNumber = (v) => /^-?\d+(\.\d+)?(px|ms)?$/.test(v);
const typeOf = (v) => (isColor(v) ? "COLOR" : isNumber(v) ? "FLOAT" : "STRING");
const num = (v) => parseFloat(v);

function collectionOf(key) {
  const head = key.split("-")[0];
  if (BRANDS.includes(head)) return `brand/${head}`;
  const map = {
    color: "color", gradient: "color",
    font: "typography", line: "typography",
    spacing: "spacing", radius: "radius",
    elevation: "elevation", z: "z-index",
    duration: "motion", ease: "motion",
    container: "layout", page: "layout", header: "layout", grid: "layout", logo: "layout", banner: "layout",
    slide: "slide",
  };
  return map[head] ?? "misc";
}

/* ---------- 3) tokens.json ---------- */
const schemaVersion = (fs.readFileSync(path.join(HARNESS, "mds.schema.yaml"), "utf8").match(/version:\s*"([^"]+)"/) || [])[1] ?? "";
const tokens = {
  $description: "mds-harness/tokens.css에서 자동 생성 - 수정 금지. 값 원본은 docs/design-v2.md -> tokens.css. 재생성: node mds-harness/tools/tokens-sync.mjs",
  meta: { source: "design-v2.md -> mds-harness/tokens.css", schemaVersion, generated: new Date().toISOString().slice(0, 10), brands: BRANDS },
  root,
  brands,
  states,
  media,
};
const tokensText = JSON.stringify(tokens, null, 2) + "\n";

if (CHECK) {
  if (!fs.existsSync(JSON_PATH)) {
    console.error("실패: tokens.json 없음 - 먼저 --check 없이 실행해 생성");
    process.exit(1);
  }
  const prev = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const diffs = [];
  const cmp = (a, b, label) => {
    const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})]);
    for (const k of keys) if ((a || {})[k] !== (b || {})[k]) diffs.push(`${label} ${k}: json=${(a || {})[k]} css=${(b || {})[k]}`);
  };
  cmp(prev.root, root, "root");
  for (const b of new Set([...Object.keys(prev.brands || {}), ...Object.keys(brands)])) cmp(prev.brands?.[b], brands[b], `brand:${b}`);
  for (const s of new Set([...Object.keys(prev.states || {}), ...Object.keys(states)])) cmp(prev.states?.[s], states[s], `state:${s}`);
  if (diffs.length) {
    diffs.forEach((d) => console.error(d));
    console.error(`\n실패: tokens.json <-> tokens.css 불일치 ${diffs.length}건. node mds-harness/tools/tokens-sync.mjs 로 재생성`);
    process.exit(1);
  }
  console.log(`통과: tokens.json <-> tokens.css diff 0건 (root ${Object.keys(root).length} / brand override ${Object.values(brands).reduce((n, o) => n + Object.keys(o).length, 0)})`);
  process.exit(0);
}

fs.writeFileSync(JSON_PATH, tokensText, "utf8");

/* ---------- 4) figma-variables.json ---------- */
const variables = [];
for (const key of order) {
  const raw = root[key];
  const base = resolve(raw, null);
  const type = typeOf(base);
  const entry = {
    collection: collectionOf(key),
    name: key.replace(/-/g, "/").replace(/^(color|slide|font|spacing|radius|elevation|z|duration|ease)\//, "$1/"),
    css: `--${key}`,
    type,
    value: type === "FLOAT" ? num(base) : base,
  };
  if (raw !== base) entry.ref = raw;
  // 브랜드별 오버라이드 -> modes
  const modes = {};
  for (const b of BRANDS) {
    const bv = brands[b]?.[key];
    if (bv !== undefined || raw.match(VAR_RE)) {
      const rv = resolve(bv ?? raw, b);
      if (rv !== base) modes[b] = typeOf(rv) === "FLOAT" ? num(rv) : rv;
    }
  }
  if (Object.keys(modes).length) entry.modes = { mp: entry.value, ...modes };
  variables.push(entry);
}
const figma = {
  meta: { ...tokens.meta, modeAxis: "data-brand", modes: BRANDS },
  collections: [...new Set(variables.map((v) => v.collection))],
  variables,
};
fs.writeFileSync(FIGMA_PATH, JSON.stringify(figma, null, 2) + "\n", "utf8");

console.log(`OK: tokens.json (root ${order.length}, brands ${Object.keys(brands).length}) / figma-variables.json (변수 ${variables.length}, 컬렉션 ${figma.collections.length})`);
