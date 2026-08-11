/* MDS — main app shell */
const { useState, useEffect, useMemo, useRef } = React;

function App() {
  const [page, setPage] = useState(() => {
    const h = location.hash.replace(/^#\/?/, "").split("/")[0];
    return h || "overview";
  });
  const [search, setSearch] = useState(false);
  const { copy, msg } = useCopy();

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearch(s => !s);
      } else if (e.key === "Escape") {
        setSearch(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function go(p) {
    setPage(p);
    location.hash = "#/" + p;
    window.scrollTo({ top: 0 });
  }

  useEffect(() => {
    const SECTION_IDS = new Set(["header","footer","tabs","menu","button","input",
      "checkbox","toggle","table","card","popup","icon","primitive","semantic",
      "alpha","spacing","radius","shadow","display","heading","body","mono"]);
    function onHash() {
      const h = location.hash.replace(/^#\/?/, "").split("/")[0];
      if (!h || SECTION_IDS.has(h)) return;
      if (h !== page) {
        setPage(h);
        window.scrollTo({ top: 0 });
      }
    }
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [page]);

  const nav = [
    { group: "GET STARTED", items: [
      { id: "overview", label: "Overview" }
    ]},
    { group: "FOUNDATION", items: [
      { id: "color", label: "Color", v: "v0.0.4" },
      { id: "typography", label: "Typography", v: "v0.0.1" },
      { id: "foundation", label: "Spacing · Radius · Shadow", v: "v0.0.0" }
    ]},
    { group: "LIBRARY", items: [
      { id: "components", label: "Components", v: "v0.0.0" }
    ]},
    { group: "BRAND", items: [
      { id: "logo", label: "Logo", v: "v0.0.0" }
    ]}
  ];

  return (
    <>
      {/* Top bar */}
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand" onClick={() => go("overview")}>
            <MplanitLogo size={28} />
            <span className="ds-tag">DS</span>
          </div>
          <div className="top-nav">
            <a className={page === "overview" ? "active" : ""} onClick={() => go("overview")}>Overview</a>
            <a className={["color","typography","foundation"].includes(page) ? "active" : ""} onClick={() => go("color")}>Foundation</a>
            <a className={page === "components" ? "active" : ""} onClick={() => go("components")}>Components</a>
            <a className={page === "logo" ? "active" : ""} onClick={() => go("logo")}>Brand</a>
          </div>
          <div className="top-actions">
            <button className="search-btn" onClick={() => setSearch(true)}>
              <MplanitIcon name="search" size={14} />
              <span>토큰 · 컴포넌트 검색</span>
              <kbd>⌘K</kbd>
            </button>
            <span className="version-badge">v0.0.4</span>
          </div>
        </div>
      </header>

      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          {nav.map(g => (
            <div key={g.group} className="nav-group">
              <div className="nav-group-title">{g.group}</div>
              {g.items.map(it => (
                <a key={it.id}
                   className={"nav-item" + (page === it.id ? " active" : "")}
                   onClick={() => go(it.id)}>
                  <span>{it.label}</span>
                  {it.v && <span className="v">{it.v}</span>}
                </a>
              ))}
            </div>
          ))}
          <div style={{marginTop: "auto", padding: "16px 12px", fontSize: 11, color: "var(--fg-4)", lineHeight: 1.6, fontFamily: "var(--font-mono)"}}>
            MDS · v0.0.4<br/>
            © 2026 mplanit
          </div>
        </aside>

        {/* Main content */}
        <main className="content">
          {page === "overview" && <PageOverview go={go} />}
          {page === "color" && <PageColor copy={copy} />}
          {page === "typography" && <PageTypography copy={copy} />}
          {page === "foundation" && <PageFoundation copy={copy} />}
          {page === "components" && <PageComponents copy={copy} />}
          {page === "logo" && <PageLogo />}
        </main>
      </div>

      {/* Search palette */}
      {search && <SearchPalette onClose={() => setSearch(false)} go={(p) => { go(p); setSearch(false); }} />}

      <Toast msg={msg} />
    </>
  );
}

function SearchPalette({ onClose, go }) {
  const [q, setQ] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const items = useMemo(() => ([
    { type: "Page", label: "Overview", page: "overview" },
    { type: "Foundation", label: "Color · Primitives", page: "color" },
    { type: "Foundation", label: "Color · 클라이언트", page: "color" },
    { type: "Foundation", label: "Color · 자사", page: "color" },
    { type: "Foundation", label: "Typography · 공통", page: "typography" },
    { type: "Foundation", label: "Typography · AIA", page: "typography" },
    { type: "Foundation", label: "Typography · 흥국화재", page: "typography" },
    { type: "Foundation", label: "Spacing", page: "foundation" },
    { type: "Foundation", label: "Radius", page: "foundation" },
    { type: "Foundation", label: "Shadow", page: "foundation" },
    { type: "Component", label: "Header", page: "components" },
    { type: "Component", label: "Button", page: "components" },
    { type: "Component", label: "Tabs", page: "components" },
    { type: "Component", label: "Text field", page: "components" },
    { type: "Component", label: "Checkbox", page: "components" },
    { type: "Component", label: "Toggle", page: "components" },
    { type: "Component", label: "Table", page: "components" },
    { type: "Component", label: "Cards", page: "components" },
    { type: "Component", label: "Popup", page: "components" },
    { type: "Component", label: "Icon", page: "components" },
    { type: "Brand", label: "Logo", page: "logo" }
  ]), []);
  const filtered = q.trim()
    ? items.filter(i => i.label.toLowerCase().includes(q.toLowerCase()))
    : items.slice(0, 10);

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette-modal" onClick={e => e.stopPropagation()}>
        <div className="palette-input">
          <MplanitIcon name="search" size={16} color="var(--fg-3)" />
          <input ref={inputRef} value={q} onChange={e => setQ(e.target.value)}
                 placeholder="토큰, 컴포넌트, 페이지 검색..." />
          <kbd>ESC</kbd>
        </div>
        <div className="palette-results">
          {filtered.length === 0 && (
            <div style={{padding: 24, textAlign: "center", color: "var(--fg-3)", fontSize: 13}}>
              결과가 없습니다.
            </div>
          )}
          {filtered.map((it, i) => (
            <div key={i} className="palette-row" onClick={() => go(it.page)}>
              <span className="t">{it.type}</span>
              <span className="l">{it.label}</span>
              <MplanitIcon name="arrow_right" size={14} color="var(--fg-4)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.App = App;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
