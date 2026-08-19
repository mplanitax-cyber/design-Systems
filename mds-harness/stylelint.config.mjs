/* =============================================================================
   MDS Harness - stylelint.config.mjs
   유일한 값 출처: design-v2.md. 규칙 근거는 mds.schema.yaml의 forbidden 목록과 동일.
   사용: npx stylelint <대상 css 글롭> --config mds-harness/stylelint.config.mjs
   (전체 검사 글롭 예시는 README.md 참조 - 주석 안에 별표 글롭을 쓰면 블록 주석이 깨져 생략)
   ============================================================================= */

export default {
  rules: {
    /* 1) 임의 HEX 금지 - var() 참조만 허용 (design-v2.md §19) */
    "color-no-hex": [true, {
      message: "임의 HEX 금지 - mds-harness/tokens.css의 var() 참조만 사용 (design-v2.md §19)"
    }],

    /* 2) --soksok-* 접두 사용 금지 (§5-4 - --ss-* 매핑으로만 치환) */
    "declaration-property-value-disallowed-list": [
      { "/.+/": ["/--soksok-/"] },
      { message: "--soksok-* 금지 - -700은 --ss-indigo-deep, -50은 --ss-indigo-soft로 치환 (design-v2.md §5-4)" }
    ],

    "declaration-property-value-allowed-list": [
      {
        /* 3) z-index는 --z-* 토큰만 허용, 9999 금지 (§17) */
        "z-index": ["/^var\\(--z-(base|sticky|header|dropdown|overlay|modal|toast)\\)$/", "auto"],

        /* 4) box-shadow는 elevation 토큰과 GS 헤더 그림자만 (§17, §5-7) */
        "box-shadow": ["/^var\\(--elevation-[0-4]\\)$/", "/^var\\(--gs-header-shadow\\)$/", "none"],

        /* 5) max-width 컨테이너 값 화이트리스트 (§15-1: 1140/1280/1380/1178/640/760/1440) */
        "max-width": [
          "/^var\\(--container-(max|narrow|wide)\\)$/",
          "1140px", "1280px", "1380px", "1178px", "640px", "760px", "1440px",
          "none", "100%"
        ]
      },
      { message: "토큰 밖 임의값 금지 - z-index는 --z-*, box-shadow는 --elevation-*, max-width는 컨테이너 화이트리스트만 (design-v2.md §15-1, §17)" }
    ]
  },

  overrides: [
    {
      /* tokens.css 자신은 값의 원천이므로 HEX 정의 허용 */
      files: ["**/tokens.css"],
      rules: { "color-no-hex": null }
    }
  ]
};
