/* MDS zip - design-v2.md + mds-harness 일괄 다운로드.
   외부 CDN 금지 규칙에 따라 라이브러리 없이 STORE(무압축) 방식 zip을 직접 조립한다. */
(function () {
  var CRC_TABLE = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      t[n] = c >>> 0;
    }
    return t;
  })();

  function crc32(bytes) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  /* entries: [{ name: "경로/파일명", data: Uint8Array }] */
  function buildZip(entries) {
    var enc = new TextEncoder();
    var now = new Date();
    var dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    var dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    var chunks = [];
    var central = [];
    var offset = 0;

    entries.forEach(function (e) {
      var nameB = enc.encode(e.name);
      var crc = crc32(e.data);

      var local = new DataView(new ArrayBuffer(30));
      local.setUint32(0, 0x04034B50, true);
      local.setUint16(4, 20, true);
      local.setUint16(6, 0x0800, true); /* UTF-8 파일명 플래그 */
      local.setUint16(8, 0, true);      /* STORE */
      local.setUint16(10, dosTime, true);
      local.setUint16(12, dosDate, true);
      local.setUint32(14, crc, true);
      local.setUint32(18, e.data.length, true);
      local.setUint32(22, e.data.length, true);
      local.setUint16(26, nameB.length, true);
      local.setUint16(28, 0, true);
      chunks.push(new Uint8Array(local.buffer), nameB, e.data);

      var cen = new DataView(new ArrayBuffer(46));
      cen.setUint32(0, 0x02014B50, true);
      cen.setUint16(4, 20, true);
      cen.setUint16(6, 20, true);
      cen.setUint16(8, 0x0800, true);
      cen.setUint16(10, 0, true);
      cen.setUint16(12, dosTime, true);
      cen.setUint16(14, dosDate, true);
      cen.setUint32(16, crc, true);
      cen.setUint32(20, e.data.length, true);
      cen.setUint32(24, e.data.length, true);
      cen.setUint16(28, nameB.length, true);
      cen.setUint32(42, offset, true);
      central.push(new Uint8Array(cen.buffer), nameB);

      offset += 30 + nameB.length + e.data.length;
    });

    var centralSize = 0;
    central.forEach(function (c) { centralSize += c.length; });

    var eocd = new DataView(new ArrayBuffer(22));
    eocd.setUint32(0, 0x06054B50, true);
    eocd.setUint16(8, entries.length, true);
    eocd.setUint16(10, entries.length, true);
    eocd.setUint32(12, centralSize, true);
    eocd.setUint32(16, offset, true);

    return new Blob(chunks.concat(central, [new Uint8Array(eocd.buffer)]), { type: "application/zip" });
  }

  var HARNESS_FILES = [
    "tokens.css",
    "base.css",
    "slides.css",
    "mds.schema.yaml",
    "stylelint.config.mjs",
    "check-no-emoji.mjs",
    "test.html",
    "README.md"
  ];

  /* design md + mds-harness/* 를 zip으로 내려받기.
     key: "all"(전체, design-v2.md) 또는 브랜드 키(design-{라벨}.md) */
  window.downloadHarnessZip = function (key) {
    key = key || "all";
    var item = window.MDS_MD_ITEMS().filter(function (i) { return i.key === key; })[0];
    var label = item ? item.label : key;
    var mdName = key === "all" ? "design-v2.md" : "design-" + label + ".md";
    var zipName = key === "all" ? "mds-design-system.zip" : "mds-" + label + ".zip";
    return Promise.all(HARNESS_FILES.map(function (f) {
      return fetch("mds-harness/" + f).then(function (r) {
        if (!r.ok) throw new Error("mds-harness/" + f + " 로드 실패 (HTTP " + r.status + ")");
        return r.arrayBuffer();
      }).then(function (buf) {
        return { name: "mds-harness/" + f, data: new Uint8Array(buf) };
      });
    })).then(function (entries) {
      entries.unshift({ name: mdName, data: new TextEncoder().encode(window.buildDesignMd(key)) });
      var url = URL.createObjectURL(buildZip(entries));
      var a = document.createElement("a");
      a.href = url; a.download = zipName;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    }).catch(function (err) {
      alert("하네스 다운로드 실패: " + err.message);
    });
  };
})();
