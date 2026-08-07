/* MDS — official mplanit logo + icons
   Logo SVG paths from the official client-provided assets.
   ViewBox 196×50. Flame marks + 'planit' wordmark.
   The flame/dot colors are FIXED brand colors — only the wordmark fill
   changes per usage. */
function MplanitLogo({ size = 36, wordmark = "#1B468B" }) {
  const ratio = 196 / 50;
  const w = Math.round(size * ratio);
  // Fixed brand colors for the flame marks + dot
  const flameOuter = "#399BC1"; // outer cyan flames
  const flameBlue  = "#1B468B"; // center deep-blue flame
  const flameDeep  = "#0162A9"; // inner highlight
  const dotFill    = "#399BC1"; // 'i' dot + circle on top of center flame
  const wordFill   = wordmark;

  return (
    <svg width={w} height={size} viewBox="0 0 196 50" fill="none" aria-label="mplanit">
      {/* PLANIT wordmark — fillable */}
      <path d="M75.6677 23.17C77.0587 24.2544 77.7541 25.9231 77.7541 28.1714C77.7541 30.4197 77.04 32.065 75.6116 33.1074C74.1833 34.1498 72.0034 34.6686 69.0674 34.6686H66.4301V39.7495H62.0004V21.5433H69.0114C72.0595 21.5433 74.2767 22.0856 75.6677 23.17ZM72.4189 30.3309C72.9463 29.784 73.2124 28.9847 73.2124 27.933C73.2124 26.8813 72.867 26.1381 72.1761 25.6941C71.4853 25.25 70.4117 25.0303 68.9554 25.0303H66.4301V31.1489H69.4081C70.8832 31.1489 71.8867 30.8731 72.4189 30.3262V30.3309Z" fill={wordFill}/>
      <path d="M80.9516 39.7495V21.5433H85.3813V36.127H93.8394V39.7495H80.9562H80.9516Z" fill={wordFill}/>
      <path d="M112.142 39.7495L110.298 35.8185H101.98L100.136 39.7495H95.4264L103.996 21.5433H108.282L116.852 39.7495H112.142ZM106.153 26.9608L103.656 32.2473H108.622L106.153 26.9608Z" fill={wordFill}/>
      <path d="M132.097 21.5433H136.526V39.7495H132.097L122.644 28.3397V39.7495H118.215V21.5433H122.36L132.097 33.2617V21.5433Z" fill={wordFill}/>
      <path d="M145.236 39.7495H140.979V21.5433H145.236V39.7495Z" fill={wordFill}/>
      <path d="M157.951 25.0584V39.7495H153.522V25.0584H147.902V21.5433H163.567V25.0584H157.947H157.951Z" fill={wordFill}/>
      <path d="M62.7052 31.153H59.5777C58.709 31.153 58.0047 31.8582 58.0047 32.7282V33.0601C58.0047 33.93 58.709 34.6353 59.5777 34.6353H62.7052C63.5739 34.6353 64.2782 33.93 64.2782 33.0601V32.7282C64.2782 31.8582 63.5739 31.153 62.7052 31.153Z" fill={wordFill}/>
      {/* 'i' dot accent — always brand cyan */}
      <path d="M143.103 17.8779C144.531 17.8779 145.689 16.7185 145.689 15.2884C145.689 13.8582 144.531 12.6989 143.103 12.6989C141.675 12.6989 140.517 13.8582 140.517 15.2884C140.517 16.7185 141.675 17.8779 143.103 17.8779Z" fill={dotFill}/>
      {/* Three flame marks — always brand colors */}
      <path d="M33.1343 15.9311L24.9578 34.6238C24.1175 36.5448 24.9757 38.7912 26.8746 39.6412L27.0966 39.7406C28.9954 40.5907 31.2159 39.7225 32.0562 37.8015L40.2327 19.1088C41.073 17.1879 40.2148 14.9415 38.3159 14.0914L38.0939 13.9921C36.1951 13.142 33.9746 14.0102 33.1343 15.9311Z" fill={flameOuter}/>
      <path d="M32.9975 19.0702L40.2302 37.7888C40.9705 39.7048 43.106 40.6509 45 39.902L45.4928 39.7071C47.3867 38.9581 48.3219 36.7978 47.5816 34.8818L40.3489 16.1631C39.6086 14.2471 37.4731 13.301 35.5792 14.05L35.0864 14.2448C33.1924 14.9938 32.2572 17.1542 32.9975 19.0702Z" fill={flameBlue}/>
      <path d="M17.7091 15.8745L9.53258 34.5672C8.69231 36.4881 9.55047 38.7345 11.4493 39.5846L11.6713 39.684C13.5702 40.534 15.7907 39.6659 16.631 37.7449L24.8075 19.0522C25.6477 17.1312 24.7896 14.8849 22.8907 14.0348L22.6687 13.9354C20.7699 13.0854 18.5493 13.9535 17.7091 15.8745Z" fill={flameOuter}/>
      <path d="M17.5357 19.0013L24.7684 37.72C25.5087 39.636 27.6442 40.5821 29.5381 39.8331L30.0309 39.6382C31.9249 38.8893 32.8601 36.7289 32.1198 34.8129L24.8871 16.0943C24.1468 14.1783 22.0113 13.2322 20.1173 13.9811L19.6245 14.176C17.7306 14.925 16.7954 17.0853 17.5357 19.0013Z" fill={flameOuter}/>
      <path d="M36.9101 8.4665C38.5001 8.4665 39.789 7.16252 39.789 5.55399C39.789 3.94545 38.5001 2.64148 36.9101 2.64148C35.3201 2.64148 34.0311 3.94545 34.0311 5.55399C34.0311 7.16252 35.3201 8.4665 36.9101 8.4665Z" fill={flameBlue}/>
      <path d="M38.6468 14.2059L38.46 14.1114C38.071 13.9162 37.6664 13.7934 37.2586 13.7367C37.0252 13.6895 36.7855 13.6643 36.5366 13.6643C34.8714 13.6643 33.4646 14.7789 33.0133 16.306C32.6492 17.2317 32.618 18.2928 33.0133 19.291L36.4027 27.8836L40.4457 19.5869C41.4137 17.597 40.6107 15.1883 38.6499 14.209L38.6468 14.2059Z" fill={flameDeep}/>
    </svg>
  );
}

function MplanitIcon({ name, size = 22, color = "currentColor" }) {
  const s = { width: size, height: size, fill: "none", stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  const v = "0 0 22 22";
  switch (name) {
    case "check": return <svg viewBox={v} {...s}><path d="M5 11.5l4 4L17 7"/></svg>;
    case "close": return <svg viewBox={v} {...s}><path d="M5 5l12 12M17 5L5 17"/></svg>;
    case "arrow_right": return <svg viewBox={v} {...s}><path d="M4 11h14M13 6l5 5-5 5"/></svg>;
    case "arrow_left": return <svg viewBox={v} {...s}><path d="M18 11H4M9 6L4 11l5 5"/></svg>;
    case "arrow_up": return <svg viewBox={v} {...s}><path d="M11 18V4M6 9l5-5 5 5"/></svg>;
    case "arrow_down": return <svg viewBox={v} {...s}><path d="M11 4v14M6 13l5 5 5-5"/></svg>;
    case "chevron_left": return <svg viewBox={v} {...s}><path d="M13 5l-5 6 5 6"/></svg>;
    case "chevron_right": return <svg viewBox={v} {...s}><path d="M9 5l5 6-5 6"/></svg>;
    case "plus": return <svg viewBox={v} {...s}><path d="M11 5v12M5 11h12"/></svg>;
    case "search": return <svg viewBox={v} {...s}><circle cx="10" cy="10" r="5"/><path d="M14 14l4 4"/></svg>;
    case "heart": return <svg viewBox={v} {...s}><path d="M11 17s-6-3.5-6-8a3.5 3.5 0 0 1 6-2.5A3.5 3.5 0 0 1 17 9c0 4.5-6 8-6 8z"/></svg>;
    case "star": return <svg viewBox={v} {...s}><path d="M11 3l2.5 5.2L19 9l-4 3.8L16 18l-5-2.7L6 18l1-5.2L3 9l5.5-.8L11 3z"/></svg>;
    case "bookmark": return <svg viewBox={v} {...s}><path d="M6 4h10v15l-5-3-5 3V4z"/></svg>;
    case "refresh": return <svg viewBox={v} {...s}><path d="M5 11a6 6 0 0 1 10.5-4M17 11a6 6 0 0 1-10.5 4"/><path d="M15 4v3.5h-3.5M7 18v-3.5h3.5"/></svg>;
    case "share": return <svg viewBox={v} {...s}><circle cx="6" cy="11" r="2"/><circle cx="16" cy="5" r="2"/><circle cx="16" cy="17" r="2"/><path d="M8 10l6-3.5M8 12l6 3.5"/></svg>;
    case "setup": return <svg viewBox={v} {...s}><circle cx="11" cy="11" r="2.5"/><path d="M11 3v2M11 17v2M3 11h2M17 11h2M5.3 5.3l1.4 1.4M15.3 15.3l1.4 1.4M5.3 16.7l1.4-1.4M15.3 6.7l1.4-1.4"/></svg>;
    case "info": return <svg viewBox={v} {...s}><circle cx="11" cy="11" r="7"/><path d="M11 10v5M11 7.5v.01"/></svg>;
    case "bell": return <svg viewBox={v} {...s}><path d="M5 15h12l-1.5-2V9.5a4.5 4.5 0 0 0-9 0V13L5 15z"/><path d="M9.5 18a1.5 1.5 0 0 0 3 0"/></svg>;
    case "location": return <svg viewBox={v} {...s}><path d="M11 19s-6-5-6-10a6 6 0 1 1 12 0c0 5-6 10-6 10z"/><circle cx="11" cy="9" r="2"/></svg>;
    case "qr": return <svg viewBox={v} {...s}><rect x="4" y="4" width="5" height="5"/><rect x="13" y="4" width="5" height="5"/><rect x="4" y="13" width="5" height="5"/><path d="M13 13h2v2M17 17v.01M13 17v.01M17 13v.01"/></svg>;
    case "home": return <svg viewBox={v} {...s}><path d="M4 11l7-6 7 6v7H4z"/><path d="M9 18v-4h4v4"/></svg>;
    case "user": return <svg viewBox={v} {...s}><circle cx="11" cy="8" r="3.5"/><path d="M4.5 18a6.5 6.5 0 0 1 13 0"/></svg>;
    case "menu": return <svg viewBox={v} {...s}><path d="M4 7h14M4 11h14M4 15h14"/></svg>;
    case "calendar": return <svg viewBox={v} {...s}><rect x="4" y="5" width="14" height="13" rx="1.5"/><path d="M4 9h14M8 3v4M14 3v4"/></svg>;
    case "card": return <svg viewBox={v} {...s}><rect x="3" y="6" width="16" height="11" rx="1.5"/><path d="M3 10h16"/></svg>;
    case "chat": return <svg viewBox={v} {...s}><path d="M4 5h14v9H10l-4 3v-3H4z"/></svg>;
    case "folder": return <svg viewBox={v} {...s}><path d="M3 6h5l1.5 2H19v9H3z"/></svg>;
    default: return <svg viewBox={v} {...s}><rect x="4" y="4" width="14" height="14" rx="2"/></svg>;
  }
}

window.MplanitLogo = MplanitLogo;
window.MplanitIcon = MplanitIcon;
