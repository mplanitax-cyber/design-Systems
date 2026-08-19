/* =============================================================================
   MDS Harness - check-no-emoji.mjs
   이모지 검출 CI 체크. 발견 시 exit 1.
   사용: node mds-harness/check-no-emoji.mjs <파일이나 폴더 ...>
   인자가 없으면 mds-harness/ 자신을 검사한다.
   ============================================================================= */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 이모지 + 픽토그램 유니코드 범위 (텍스트 기호 포함 - MDS는 전부 금지)
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{2049}\u{203C}\u{2122}\u{2139}]/gu;
const EXTS = new Set([".css", ".html", ".js", ".mjs", ".md", ".yaml", ".yml", ".json"]);

const targets = process.argv.slice(2);
if (!targets.length) targets.push(path.dirname(fileURLToPath(import.meta.url)));

let hits = 0;
function scanFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    const found = line.match(EMOJI_RE);
    if (found) {
      hits += found.length;
      console.error(`${file}:${i + 1} 이모지 발견: ${[...new Set(found)].join(" ")}`);
    }
  });
}
function walk(p) {
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    for (const f of fs.readdirSync(p)) {
      if (f === "node_modules" || f.startsWith(".")) continue;
      walk(path.join(p, f));
    }
  } else if (EXTS.has(path.extname(p).toLowerCase())) {
    scanFile(p);
  }
}
targets.forEach(walk);

if (hits) {
  console.error(`\n실패: 이모지 ${hits}건. 아이콘은 공통 아이콘 라이브러리 네이밍({name}_line / {name}_filled)으로 참조 표기한다.`);
  process.exit(1);
}
console.log("통과: 이모지 0건");
