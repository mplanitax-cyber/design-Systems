/* MDS data — color tokens, typography, etc. */
window.MDS_DATA = {
  primitives: [
    { name: "Blue", desc: "신뢰 / Primary 후보군", stops: [
      [50,"#F4F8FF"],[100,"#E5EEFE"],[200,"#CFDDFC"],[300,"#A4BFFA"],
      [400,"#7297F4"],[500,"#3D6BE6"],[600,"#2A53D2"],[700,"#1F40B0"],
      [800,"#172F86"],[900,"#102063"],[950,"#0A1542"]
    ]},
    { name: "Indigo", desc: "Logo Blue 계열", stops: [
      [50,"#F2F4FB"],[100,"#E1E5F4"],[200,"#C2CCEA"],[300,"#94A4D8"],
      [400,"#6477BE"],[500,"#3F53A8"],[600,"#3048A2"],[700,"#283C85"],
      [800,"#1F2D63"],[900,"#161F45"],[950,"#0B0F23"]
    ]},
    { name: "Cyan", desc: "AI-LAB 시그니처", stops: [
      [50,"#EBFAFE"],[100,"#D2F3FB"],[200,"#A6E6F6"],[300,"#75D5EE"],
      [400,"#45BBE9"],[500,"#1FA0D8"],[600,"#1684B7"],[700,"#136792"],
      [800,"#114F70"],[900,"#0D3853"],[950,"#062032"]
    ]},
    { name: "Sky", desc: "AIA 후보 톤", stops: [
      [50,"#F1FAFE"],[100,"#DEF2FB"],[200,"#B6E2F4"],[300,"#7CCBE9"],
      [400,"#3DACD9"],[500,"#1B8FBF"],[600,"#0E73A0"],[700,"#0B5B7F"],
      [800,"#0A4661"],[900,"#073245"],[950,"#031A26"]
    ]},
    { name: "Red", desc: "AIA Primary", stops: [
      [50,"#FFF1F2"],[100,"#FFDFE2"],[200,"#FFC1C7"],[300,"#FF94A0"],
      [400,"#F95F75"],[500,"#E33150"],[600,"#C9183B"],[700,"#A11231"],
      [800,"#7B0E27"],[900,"#560920"],[950,"#2D0411"]
    ]},
    { name: "Crimson", desc: "흥국화재 시그니처", stops: [
      [50,"#FFF0F0"],[100,"#FFDEDE"],[200,"#FFBCBC"],[300,"#FF8E8E"],
      [400,"#F25656"],[500,"#D72020"],[600,"#BF0000"],[700,"#9B0000"],
      [800,"#760000"],[900,"#540000"],[950,"#2C0000"]
    ]},
    { name: "Orange", desc: "강조 · 알림", stops: [
      [50,"#FFF5EB"],[100,"#FFE6CC"],[200,"#FFC998"],[300,"#FFA559"],
      [400,"#FF7E1F"],[500,"#EA5F00"],[600,"#C44C00"],[700,"#9C3C00"],
      [800,"#762D00"],[900,"#521F00"],[950,"#2E1000"]
    ]},
    { name: "Yellow", desc: "Warning · 정보", stops: [
      [50,"#FFFDEC"],[100,"#FFF7C2"],[200,"#FFEB85"],[300,"#FFD942"],
      [400,"#F5C100"],[500,"#D9A800"],[600,"#B68900"],[700,"#8E6900"],
      [800,"#6B4F00"],[900,"#4A3700"],[950,"#291E00"]
    ]},
    { name: "Green", desc: "Success", stops: [
      [50,"#F1FBF4"],[100,"#DCF6E4"],[200,"#B7EBC6"],[300,"#7DD89D"],
      [400,"#3FBC72"],[500,"#1F9E55"],[600,"#147F44"],[700,"#0F6536"],
      [800,"#0C4D29"],[900,"#08361C"],[950,"#031D0F"]
    ]},
    { name: "Teal", desc: "Calm / Web", stops: [
      [50,"#EFFAF7"],[100,"#D4F2EA"],[200,"#A4E4D2"],[300,"#65CDB1"],
      [400,"#2EB08F"],[500,"#159278"],[600,"#0E7561"],[700,"#0B5C4D"],
      [800,"#08453A"],[900,"#063026"],[950,"#031A14"]
    ]},
    { name: "Purple", desc: "강조 · 프로모션", stops: [
      [50,"#F8F4FF"],[100,"#EBE0FF"],[200,"#D4BFFF"],[300,"#B493FA"],
      [400,"#8E63EE"],[500,"#6E40D3"],[600,"#562AB0"],[700,"#43208B"],
      [800,"#321967"],[900,"#231148"],[950,"#130725"]
    ]},
    { name: "Pink", desc: "감성 · 이벤트", stops: [
      [50,"#FFF1F8"],[100,"#FFDEEE"],[200,"#FFB7D7"],[300,"#FF82B6"],
      [400,"#F94890"],[500,"#DD2272"],[600,"#B81459"],[700,"#920E45"],
      [800,"#6D0A33"],[900,"#4A0623"],[950,"#260311"]
    ]},
    { name: "Gray", desc: "중립 텍스트 · 라인", stops: [
      [50,"#FAFAFB"],[100,"#F3F4F6"],[200,"#E5E7EB"],[300,"#CDD1D8"],
      [400,"#9CA3AF"],[500,"#6B7280"],[600,"#4B5563"],[700,"#374151"],
      [800,"#1F2937"],[900,"#111827"],[950,"#070A0F"]
    ]},
    { name: "Slate", desc: "Cool 중립", stops: [
      [50,"#F8FAFC"],[100,"#F1F5F9"],[200,"#E2E8F0"],[300,"#CBD5E1"],
      [400,"#94A3B8"],[500,"#64748B"],[600,"#475569"],[700,"#334155"],
      [800,"#1E293B"],[900,"#0F172A"],[950,"#050813"]
    ]}
  ],
  alpha: {
    black: [
      { name: "alpha-black-95", rgba: "rgba(0,0,0,0.95)" },
      { name: "alpha-black-80", rgba: "rgba(0,0,0,0.80)" },
      { name: "alpha-black-60", rgba: "rgba(0,0,0,0.60)" },
      { name: "alpha-black-40", rgba: "rgba(0,0,0,0.40)" },
      { name: "alpha-black-20", rgba: "rgba(0,0,0,0.20)" },
      { name: "alpha-black-10", rgba: "rgba(0,0,0,0.10)" },
      { name: "alpha-black-05", rgba: "rgba(0,0,0,0.05)" }
    ],
    white: [
      { name: "alpha-white-95", rgba: "rgba(255,255,255,0.95)" },
      { name: "alpha-white-80", rgba: "rgba(255,255,255,0.80)" },
      { name: "alpha-white-60", rgba: "rgba(255,255,255,0.60)" },
      { name: "alpha-white-40", rgba: "rgba(255,255,255,0.40)" },
      { name: "alpha-white-20", rgba: "rgba(255,255,255,0.20)" },
      { name: "alpha-white-10", rgba: "rgba(255,255,255,0.10)" },
      { name: "alpha-white-05", rgba: "rgba(255,255,255,0.05)" }
    ]
  },
  clients: {
    HG: {
      desc: "보험의 신뢰감을 주는 따뜻한 레드 계열",
      groups: [
        { label: "Primary", colors: [
          ["hg-red-50","#FFF0F0"],["hg-red-100","#FFDEDE"],["hg-red-200","#FFBCBC"],
          ["hg-red","#BF0000"],["hg-red-deep","#9B0000"],["hg-red-900","#540000"]
        ]},
        { label: "Sub", colors: [
          ["hg-charcoal","#231F20"],["hg-graphite","#3D3A3B"],["hg-stone","#7C7878"],
          ["hg-mist","#D8D5D5"],["hg-cream","#F7F4F0"],["hg-ivory","#FBF9F6"]
        ]}
      ]
    },
    AIA: {
      desc: "글로벌 보험사의 신뢰성과 활기를 담은 레드/네이비",
      groups: [
        { label: "Primary", colors: [
          ["aia-red-50","#FFF1F2"],["aia-red-100","#FFDFE2"],["aia-red","#D31145"],
          ["aia-red-deep","#A11231"],["aia-red-900","#560920"]
        ]},
        { label: "Sub", colors: [
          ["aia-navy","#1B2C5B"],["aia-slate","#475569"],["aia-mist","#CBD5E1"],
          ["aia-paper","#F1F5F9"],["aia-gold","#C0A062"]
        ]}
      ]
    }
  },
  inhouse: {
    Mplanit: {
      desc: "강한 인디고 + 모던 그레이",
      groups: [
        { label: "Primary", colors: [
          ["mp-logo-blue","#3048A2"],["mp-deep","#1F2D63"],["mp-ink","#0B0F23"],
          ["mp-mist","#E1E5F4"],["mp-paper","#F2F4FB"]
        ]},
        { label: "Sub", colors: [
          ["mp-fg-1","#050F26"],["mp-fg-2","#26334A"],["mp-fg-3","#76798E"],
          ["mp-line","#EAECF0"],["mp-line-strong","#CDD1D8"]
        ]}
      ]
    },
    AILAB: {
      desc: "사이언스의 청량함을 담은 그래디언트 듀오",
      groups: []
    }
  },
  typography: {
    common: {
      name: "공통 (Pretendard)",
      fonts: [
        { family: "Pretendard 700 — Bold", weight: 700, role: "Display · 강조" },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "Heading" },
        { family: "Pretendard 500 — Medium", weight: 500, role: "Subhead · Button" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    AIA: {
      name: "AIA — Marker (Display)",
      fonts: [
        { family: "AIA Marker — Display Bold", weight: 700, role: "H1 · T1 (브랜드 디스플레이)", alt: true },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "H2~H4" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    HG: {
      name: "흥국화재 — HungkukSans",
      fonts: [
        { family: "HungkukSans Bold — Display", weight: 700, role: "H1 · T1 (브랜드 디스플레이)", alt: true },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "H2~H4" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    WC: {
      name: "웰컴 — WelcomeBM",
      fonts: [
        { family: "WelcomeBM Bold — Display", weight: 700, role: "H1 · T1 (브랜드 디스플레이)", alt: true },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "H2~H4" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    }
  },
  scale: [
    { token: "display-1", role: "Hero · 메인비주얼", size: 56, weight: 700, weightLabel: "Bold", lh: 1.10, ls: "-1.5px" },
    { token: "display-2", role: "Section Hero", size: 44, weight: 700, weightLabel: "Bold", lh: 1.13, ls: "-1px" },
    { token: "h1", role: "Page Title", size: 32, weight: 700, weightLabel: "Bold", lh: 1.25, ls: "-0.5px" },
    { token: "h2", role: "Section Title", size: 24, weight: 700, weightLabel: "Bold", lh: 1.33, ls: "-0.3px" },
    { token: "h3", role: "Group Title", size: 20, weight: 600, weightLabel: "SemiBold", lh: 1.40, ls: "-0.2px" },
    { token: "h4", role: "Card Title", size: 18, weight: 600, weightLabel: "SemiBold", lh: 1.44, ls: "-0.1px" },
    { token: "subtitle", role: "Lede · Subhead", size: 18, weight: 400, weightLabel: "Regular", lh: 1.50, ls: "0" },
    { token: "body-lg", role: "Body Large", size: 16, weight: 400, weightLabel: "Regular", lh: 1.50, ls: "0" },
    { token: "body", role: "Body Default", size: 14, weight: 400, weightLabel: "Regular", lh: 1.57, ls: "0" },
    { token: "button", role: "Button · Tab Label", size: 14, weight: 500, weightLabel: "Medium", lh: 1.42, ls: "0" },
    { token: "caption", role: "Helper · Hint", size: 12, weight: 400, weightLabel: "Regular", lh: 1.50, ls: "0" },
    { token: "overline", role: "Eyebrow · Label", size: 11, weight: 700, weightLabel: "Bold", lh: 1.45, ls: "0.14em" }
  ]
};
