/* MDS — atoms & shared components */
const { useState, useEffect, useMemo, useRef } = React;

/* ── Toast ───────────────────────────────────────────── */
function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div className={"toast " + (msg ? "show" : "")}>
      <span className="dot"></span>
      <span>{msg}</span>
    </div>
  );
}

/* ── Copy helper ─────────────────────────────────────── */
function useCopy() {
  const [msg, setMsg] = useState("");
  const tRef = useRef();
  function copy(text, label) {
    navigator.clipboard?.writeText(text).catch(()=>{});
    setMsg(label || `${text} 복사됨`);
    clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setMsg(""), 1800);
  }
  return { copy, msg };
}

/* ── Color util ──────────────────────────────────────── */
function isLight(hex) {
  if (!hex || hex[0] !== "#") return true;
  const h = hex.replace("#", "");
  const v = h.length === 3
    ? h.split("").map(c => parseInt(c + c, 16))
    : [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
  // perceived luminance
  return (v[0]*0.299 + v[1]*0.587 + v[2]*0.114) > 165;
}

/* ── Swatch ──────────────────────────────────────────── */
function Swatch({ name, hex, onCopy, alpha, gradient }) {
  const light = !alpha && !gradient && isLight(hex);
  const bgStyle = gradient
    ? { background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }
    : alpha
    ? { background: hex }
    : { background: hex };
  const pct = alpha ? alphaPercent(hex) : null;
  return (
    <div className={"swatch" + (light ? " dark" : "") + (alpha ? " alpha-bg" : "")}
         onClick={() => onCopy(hex, `${name} · ${hex} 복사됨`)}>
      <div className="chip" style={bgStyle}>
        {pct !== null && (
          <span className="alpha-pct" style={{ color: alphaPctColor(hex) }}>{pct}%</span>
        )}
        <span className="copy-hint">CLICK TO COPY</span>
      </div>
      <div className="meta">
        <span className="name">{name}</span>
        <span className="hex">{hex}</span>
      </div>
    </div>
  );
}

/* rgba 문자열에서 불투명도 % 추출 */
function alphaPercent(rgba) {
  const m = /rgba?\([^)]*?,\s*([0-9.]+)\s*\)/.exec(rgba);
  return m ? Math.round(parseFloat(m[1]) * 100) : null;
}
/* 알파 칩 위 % 라벨 색 - 진한 검정 칩 위는 흰색, 그 외는 어두운 회색 */
function alphaPctColor(rgba) {
  const m = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9.]+)\s*\)/.exec(rgba);
  if (!m) return "rgba(0,0,0,0.55)";
  const [, r, g, b, a] = m.map(Number);
  const dark = (r * 0.299 + g * 0.587 + b * 0.114) < 128 && a >= 0.5;
  return dark ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.55)";
}

/* ── Palette block ───────────────────────────────────── */
function PaletteBlock({ id, name, desc, tag, children }) {
  return (
    <div id={id} className="palette">
      <div className="palette-head">
        <h3>{name} <span style={{fontWeight:400, color:"var(--fg-3)", fontSize:"13px", marginLeft:8}}>{desc}</span></h3>
        <span className="tag">{tag}</span>
      </div>
      {children}
    </div>
  );
}

/* ── Filter tabs ─────────────────────────────────────── */
function FilterTabs({ items, active, onChange }) {
  const ref = useRef(null);
  const drag = useRef(null);

  /* 탭이 컨테이너를 넘칠 때만 마우스 드래그로 가로 스크롤 */
  function onPointerDown(e) {
    const el = ref.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    drag.current = { x: e.clientX, left: el.scrollLeft, moved: false };
  }
  function onPointerMove(e) {
    const d = drag.current, el = ref.current;
    if (!d || !el) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 4) {
      d.moved = true;
      if (el.setPointerCapture) el.setPointerCapture(e.pointerId);
    }
    if (d.moved) el.scrollLeft = d.left - dx;
  }
  function endDrag() {
    const d = drag.current;
    // 드래그였다면 click 이벤트가 지나갈 때까지 moved 플래그 유지 (탭 오클릭 방지)
    if (d && d.moved) setTimeout(() => { drag.current = null; }, 0);
    else drag.current = null;
  }

  return (
    <div className="filter-tabs" ref={ref}
      onPointerDown={onPointerDown} onPointerMove={onPointerMove}
      onPointerUp={endDrag} onPointerLeave={endDrag}
      onClickCapture={e => {
        if (drag.current && drag.current.moved) { e.preventDefault(); e.stopPropagation(); }
      }}>
      {items.map(it => (
        <button key={it.value}
          className={"filter-tab" + (active === it.value ? " active" : "")}
          onClick={() => onChange(it.value)}>
          {it.label}
        </button>
      ))}
    </div>
  );
}

/* ── Section ────────────────────────────────────────── */
function Section({ id, num, title, desc, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <h2>{title}</h2>
        <span className="num">{num}</span>
      </div>
      {desc && <p className="section-desc">{desc}</p>}
      {children}
    </section>
  );
}

/* ── Component preview card ─────────────────────────── */
function CmpCard({ title, tag, children }) {
  return (
    <div className="cmp-card">
      <div className="cmp-head">
        <span className="title">{title}</span>
        {tag && <span className="tag">{tag}</span>}
      </div>
      <div className="cmp-stage">{children}</div>
    </div>
  );
}

/* ── Page header ─────────────────────────────────────── */
function PageHeader({ eyebrow, title, lede, version, updated }) {
  return (
    <header>
      {eyebrow && <div className="page-eyebrow">{eyebrow}</div>}
      <h1 className="page-title">{title}</h1>
      {lede && <p className="page-lede">{lede}</p>}
      <div className="page-meta">
        {version && <><span>{version}</span><span className="dot"></span></>}
        {updated && <span>업데이트 · {updated}</span>}
      </div>
    </header>
  );
}

/* ── ToC ─────────────────────────────────────────────── */
function ToC({ items, active }) {
  function handleClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <nav className="toc">
      <div className="toc-title">On this page</div>
      {items.map(it => (
        <a key={it.id} href={"#" + it.id}
           onClick={(e) => handleClick(e, it.id)}
           className={active === it.id ? "active" : ""}>{it.label}</a>
      ))}
    </nav>
  );
}

/* ── Hooks: scroll spy ───────────────────────────────── */
function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    function onScroll() {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120) cur = id;
      }
      setActive(cur);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join(",")]);
  return active;
}

Object.assign(window, { Toast, Swatch, PaletteBlock, FilterTabs, Section, CmpCard, PageHeader, ToC, useCopy, useScrollSpy, isLight, alphaPercent });
