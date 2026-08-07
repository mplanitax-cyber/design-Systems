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
      label: "흥국화재",
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
      label: "AIA",
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
    },
    GS: {
      label: "지셀라",
      desc: "지셀라(gselah.com) — 클래식한 딥 네이비와 정제된 뉴트럴",
      logo: { src: "logos/gselah.png", darkBg: false, note: "G·selah 워드마크 — 밝은 배경 위 사용" },
      groups: [
        { label: "Primary", colors: [
          ["gs-navy","#264073"],["gs-navy-10","#F0F5FF"],["gs-navy-50","#C7DBFF"],
          ["gs-navy-100","#A6C0F0"],["gs-navy-200","#8BA6D9"],["gs-navy-300","#708DC2"],
          ["gs-navy-400","#5774AB"],["gs-navy-500","#425C8E"],["gs-navy-600","#2F4672"],
          ["gs-navy-700","#1C3056"],["gs-navy-800","#0B1C3C"],["gs-navy-900","#010824"]
        ]},
        { label: "Neutral", colors: [
          ["gs-white","#FFFFFF"],["gs-gray-50","#FBFAFA"],["gs-gray-100","#F5F5F5"],
          ["gs-gray-200","#EEEEEE"],["gs-gray-300","#C9C9C9"],["gs-gray-400","#AAAAAA"],
          ["gs-gray-500","#999999"],["gs-gray-600","#777777"],["gs-gray-700","#555555"],
          ["gs-gray-800","#333333"],["gs-gray-900","#111111"],["gs-black","#000000"]
        ]}
      ]
    },
    SS: {
      label: "쏙쏙",
      desc: "쏙쏙(soksokcompany.com) — 경쾌한 인디고와 프레시 틸의 듀오",
      logo: { src: "logos/soksok.png", darkBg: false, note: "쏙쏙 컬러 로고 — 밝은 배경 위 사용" },
      groups: [
        { label: "Primary", colors: [
          ["ss-indigo","#383BA8"],["ss-indigo-10","#F2F5FF"],["ss-indigo-50","#CFD8FF"],
          ["ss-indigo-100","#ADBBFF"],["ss-indigo-200","#8C9DFF"],["ss-indigo-300","#7281EC"],
          ["ss-indigo-400","#5A66D6"],["ss-indigo-500","#464FB4"],["ss-indigo-600","#333893"],
          ["ss-indigo-700","#222374"],["ss-indigo-800","#130C55"],["ss-indigo-900","#060031"]
        ]},
        { label: "Secondary", colors: [
          ["ss-teal","#00AB9B"],["ss-teal-10","#D7FFF8"],["ss-teal-50","#98EDE0"],
          ["ss-teal-100","#74D4C5"],["ss-teal-200","#4EBBAC"],["ss-teal-300","#18A293"],
          ["ss-teal-400","#00877A"],["ss-teal-500","#006C62"],["ss-teal-600","#00534A"],
          ["ss-teal-700","#003A34"],["ss-teal-800","#00241F"],["ss-teal-900","#000F0C"]
        ]},
        { label: "Sub", colors: [
          ["ss-indigo-soft","#EEEFFA"],["ss-indigo-deep","#2B2E86"]
        ]},
        { label: "Neutral", colors: [
          ["ss-white","#FFFFFF"],["ss-gray-50","#F5F5F5"],["ss-gray-100","#E5E7EB"],
          ["ss-gray-200","#E5E5E5"],["ss-gray-300","#D1D1D1"],["ss-gray-400","#999999"],
          ["ss-gray-500","#767676"],["ss-gray-600","#666666"],["ss-gray-700","#525252"],
          ["ss-black","#333333"]
        ]}
      ]
    },
    HC: {
      label: "헬스케어",
      desc: "프로헬스코리아(prohealthkorea.com) — 생명력 있는 비타 그린",
      logo: { src: "logos/prohealth-white.png", darkBg: true, note: "PRO HEALTH 화이트 로고 — 다크/네이비 배경 위 사용" },
      groups: [
        { label: "Primary", colors: [
          ["hc-green","#2EC405"],["hc-green-10","#E2FFDD"],["hc-green-50","#98F589"],
          ["hc-green-100","#74DC65"],["hc-green-200","#4FC33C"],["hc-green-300","#25AA00"],
          ["hc-green-400","#1D8D00"],["hc-green-500","#157100"],["hc-green-600","#0E5600"],
          ["hc-green-700","#073D00"],["hc-green-800","#032500"],["hc-green-900","#011000"]
        ]},
        { label: "Neutral", colors: [
          ["hc-white","#FFFFFF"],["hc-gray-50","#F9F9F9"],["hc-gray-100","#F5F5F5"],
          ["hc-gray-200","#C1C1C1"],["hc-gray-300","#999999"],["hc-gray-400","#777777"],
          ["hc-gray-500","#606060"],["hc-gray-600","#444B59"],["hc-gray-700","#333333"],
          ["hc-gray-800","#222222"],["hc-gray-900","#111111"],["hc-black","#000000"]
        ]}
      ]
    },
    DD: {
      label: "디디다",
      desc: "디디다(dd-da.co.kr) — 딥 블루와 스카이 블루의 스테이 브랜드",
      logo: { src: "logos/ddda.png", darkBg: false, note: "DDDA · YOUR STAY MATE — 밝은 배경 위 사용" },
      groups: [
        { label: "Primary", colors: [
          ["dd-blue","#0032A0"],["dd-blue-10","#F0F5FF"],["dd-blue-50","#C7DBFF"],
          ["dd-blue-100","#9EC0FF"],["dd-blue-200","#75A4FF"],["dd-blue-300","#5288F3"],
          ["dd-blue-400","#366CDE"],["dd-blue-500","#2455BB"],["dd-blue-600","#123D99"],
          ["dd-blue-700","#032779"],["dd-blue-800","#001551"],["dd-blue-900","#000729"]
        ]},
        { label: "Secondary", colors: [
          ["dd-sky","#0075CD"],["dd-sky-10","#EEF6FF"],["dd-sky-50","#BFDEFF"],
          ["dd-sky-100","#8EC4FF"],["dd-sky-200","#5EAAF9"],["dd-sky-300","#3A90E4"],
          ["dd-sky-400","#0376CE"],["dd-sky-500","#005EA7"],["dd-sky-600","#004881"],
          ["dd-sky-700","#00325D"],["dd-sky-800","#001E3B"],["dd-sky-900","#000B1D"]
        ]},
        { label: "Neutral", colors: [
          ["dd-white","#FFFFFF"],["dd-gray-50","#F2F8FC"],["dd-gray-100","#F3F5F6"],
          ["dd-gray-200","#EEEEEE"],["dd-gray-300","#DEE4E9"],["dd-gray-400","#D9D9D9"],
          ["dd-gray-500","#BBC5CC"],["dd-gray-600","#A4ADB2"],["dd-gray-700","#757B80"],
          ["dd-gray-800","#464A4D"],["dd-black","#17191A"]
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
      label: "공통",
      fonts: [
        { family: "Pretendard 700 — Bold", weight: 700, role: "Display · 강조" },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "Heading" },
        { family: "Pretendard 500 — Medium", weight: 500, role: "Subhead · Button" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    AIA: {
      name: "AIA — Marker (Display)",
      label: "AIA",
      fonts: [
        { family: "AIA Marker — Display Bold", weight: 700, role: "H1 · T1 (브랜드 디스플레이)", alt: true },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "H2~H4" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    HG: {
      name: "흥국화재 — HungkukSans",
      label: "흥국화재",
      fonts: [
        { family: "HungkukSans Bold — Display", weight: 700, role: "H1 · T1 (브랜드 디스플레이)", alt: true },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "H2~H4" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    WC: {
      name: "웰컴 — WelcomeBM",
      label: "웰컴저축은행",
      fonts: [
        { family: "WelcomeBM Bold — Display", weight: 700, role: "H1 · T1 (브랜드 디스플레이)", alt: true, fontFamily: "'WelcomeBM', Pretendard, sans-serif" },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "H2~H4" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    GS: {
      name: "지셀라 — Montserrat",
      label: "지셀라",
      fonts: [
        { family: "Montserrat Bold — Display", weight: 700, role: "H1 · T1 (브랜드 디스플레이, 라틴 전용 · 한글은 Pretendard)", alt: true, fontFamily: "'Montserrat', Pretendard, sans-serif" },
        { family: "Montserrat 500 — Medium", weight: 500, role: "Subhead · Button (라틴)", fontFamily: "'Montserrat', Pretendard, sans-serif" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body (한글)" }
      ]
    },
    SS: {
      name: "쏙쏙 — Paperlogy",
      label: "쏙쏙",
      fonts: [
        { family: "Paperlogy 6 SemiBold — Display", weight: 600, role: "H1 · T1 (브랜드 디스플레이)", alt: true, fontFamily: "'Paperlogy', Pretendard, sans-serif" },
        { family: "Paperlogy 5 Medium", weight: 500, role: "Subhead · Button", fontFamily: "'Paperlogy', Pretendard, sans-serif" },
        { family: "Paperlogy 4 Regular", weight: 400, role: "Body", fontFamily: "'Paperlogy', Pretendard, sans-serif" }
      ]
    },
    HC: {
      name: "헬스케어 — Pretendard",
      label: "헬스케어",
      fonts: [
        { family: "Pretendard 700 — Bold", weight: 700, role: "Display · 강조" },
        { family: "Pretendard 600 — SemiBold", weight: 600, role: "Heading" },
        { family: "Pretendard 400 — Regular", weight: 400, role: "Body" }
      ]
    },
    DD: {
      name: "디디다 — Pretendard Variable",
      label: "디디다",
      fonts: [
        { family: "Pretendard Variable 700 — Display", weight: 700, role: "H1 · T1 (브랜드 디스플레이)", alt: true, fontFamily: "'Pretendard Variable', Pretendard, sans-serif" },
        { family: "Pretendard Variable 500 — Medium", weight: 500, role: "Subhead · Button", fontFamily: "'Pretendard Variable', Pretendard, sans-serif" },
        { family: "Pretendard Variable 400 — Regular", weight: 400, role: "Body", fontFamily: "'Pretendard Variable', Pretendard, sans-serif" }
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
