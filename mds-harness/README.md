# MDS Harness

엠플랜잇 디자인시스템의 강제 레이어. **유일한 값 출처는 design-v2.md**이며,
이 패키지는 그 값을 코드로 강제한다.

> **원칙: md는 설명, 하네스는 강제. 값은 여기에만 존재한다.**
> 새 값이 필요하면 design-v2.md에 먼저 추가하고 tokens.css에 반영한다.
> 하네스에 없는 값을 프로젝트 CSS에 임의로 만들지 않는다.

## 새 프로젝트 시작법 (세 줄)

```html
<link rel="stylesheet" href="mds-harness/tokens.css">
<link rel="stylesheet" href="mds-harness/base.css">
<body data-brand="hg">  <!-- mp | hg | aia | ss | dd | hc | gs -->
```

- `data-brand`를 생략하면 엠플랜잇(공통 그리드 1140/40/104)이 기본값이다. 명시적으로 `mp`를 써도 같다.
- 헤더 상태 전환은 `data-state="scrolled"` 하나로 통일한다 (MP·HC·GS, design-v2.md §5-0).
- 행간은 전 텍스트 140% 단일값 - base.css가 `html`과 폼 컨트롤에 `--line-height-14`를 전역 적용한다. 컴포넌트에서 다른 행간 선언 금지 (§3).

```js
// 스크롤 상태 전환 (design-v2.md §5-1 메커니즘)
window.addEventListener("scroll", () => {
  document.body.dataset.state = window.scrollY > 10 ? "scrolled" : "";
});
```

## 드롭다운 (Select box)

design-v2.md §10-2 - 피그마 `40001645:27713` / `40001645:27982` 실측. base.css의 `.ds-select` 블록을 그대로 쓴다.

```html
<div class="ds-select" data-open="false">
  <button type="button" class="ds-select__trigger" aria-haspopup="listbox" aria-expanded="false">
    <span class="ds-select__value">텍스트</span>
    <!-- icon:chevron_down_small_line (18px) -->
  </button>
  <ul class="ds-select__menu" role="listbox">
    <li><button type="button" class="ds-select__item" role="option" aria-selected="true">텍스트 <!-- icon:check_small_line --></button></li>
    <li><button type="button" class="ds-select__item" role="option" aria-selected="false">텍스트</button></li>
  </ul>
</div>
```

- 열림/닫힘은 `data-open` 하나로, 선택은 `aria-selected`로 표현한다. 값은 `--select-*` · `--color-border-select` · `--color-bg-selected` · `--elevation-dropdown-*` 토큰만 사용
- 패널은 보더만 (그림자 없음, 피그마 실측). 선택 항목에만 `--elevation-dropdown-item`, 입력 중 트리거에만 `--elevation-dropdown-focus`

## 슬라이드 (발표자료)

랜딩이 아닌 16:9 발표자료는 base.css 대신 slides.css를 쓴다 (상세: design-v2.md §20).

```html
<link rel="stylesheet" href="mds-harness/tokens.css">
<link rel="stylesheet" href="mds-harness/slides.css">
<body data-brand="hg">  <!-- 랜딩과 동일하게 브랜드 전환 -->
  <section class="slide slide--cover"> ... </section>
```

- 고정 캔버스 1920x1080 - 뷰포트 반응형 미디어쿼리 금지, 축소는 `.slide-viewer`의 scale로만
- 값은 tokens.css의 `--slide-*` 토큰만 사용 (타입 스케일·여백·차트 팔레트 포함)
- 폰트는 Paperlogy 단일(`--slide-font-family`, 400~800). 랜딩 UI는 Pretendard + Montserrat 그대로

## 파일 구성

| 파일 | 역할 |
|---|---|
| `tokens.css` | design-v2.md의 모든 CSS 변수 (공통 + 브랜드 + 상태 + 슬라이드). 값의 원천 |
| `base.css` | 전역 행간(§3), 컨테이너·그리드(§15-2), 헤더 셸(§5-0), 푸터 셸(§6-0), 드롭다운(§10-2), 반응형 타이포(§16-2), reduced-motion(§18) |
| `fonts.css` + `fonts/` | 폰트 @font-face와 woff2 파일 동봉 (Pretendard Variable·Montserrat·Paperlogy·Gmarket Sans·WelcomeBM). base.css·slides.css가 자동 import하므로 설치 여부와 무관하게 동일 렌더링 |
| `logos/` | 엠플랜잇(SVG, 밝은/어두운 배경)·흥국화재(SVG)·AIA(SVG, 흰색 - 레드/어두운 배경 전용)와 지셀라·쏙쏙·디디다·헬스케어 로고. 헤더 `.hd__logo` 슬롯에 `<img>`로 사용 (웰컴저축은행은 미동봉) |
| `CLAUDE.md` | AI용 작업 규칙 (하네스 로드·폰트·로고·금지 규칙). 프로젝트 루트 CLAUDE.md에서 `@mds-harness/CLAUDE.md`로 불러오면 매번 지시하지 않아도 적용됨 |
| `slides.css` | 발표자료 셸(§20): 1920x1080 캔버스·표지/간지/본문 레이아웃·뷰어 스케일·인쇄 |
| `tokens.json` · `figma-variables.json` | tokens.css에서 자동 생성한 파생물 (피그마 변수 동기화용). 손으로 수정 금지 - 재생성만 |
| `tools/tokens-sync.mjs` | tokens.css -> tokens.json · figma-variables.json 재생성. `--check`로 정합 검사 (diff 0건이면 통과) |
| `mds.schema.yaml` | 머신 판독 스펙: 브랜드 7종 그리드·헤더·폰트·특이사항 + 금지 규칙 |
| `stylelint.config.mjs` | 금지 규칙 강제 (HEX·soksok·z-index·box-shadow·max-width·line-height) |
| `check-no-emoji.mjs` | 이모지 검출 CI 체크 (grep 기반) |
| `test.html` | 브랜드 7종 `.container` 폭 + 전역 행간 140% + 드롭다운 규격 검증 페이지 |

## 브랜드 요약 (상세는 mds.schema.yaml)

| data-brand | 컨테이너 | inset | 헤더(PC) | 특이사항 |
|---|---|---|---|---|
| (없음)/`mp` | 1140 | 40 | 104 | Default 그라디언트 / Scrolled 흰배경 |
| `hg` | 1140 | 40 | 94 | - |
| `aia` | 1140 | 40 | 72 | - |
| `ss` | 1280 | 80 | 100 | `--soksok-*` 접두 금지 |
| `dd` | 640 고정 | 16 | 79 | 모바일 전용 - 미디어쿼리 작성 금지 |
| `hc` | 1380 | 30 | 121 | rem 체계 (root 14 -> 13 -> 12px) - px 재작성 금지 |
| `gs` | 1178 | 24 | 109 (Scrolled 92) | 로고 left 72 예외 |

## 아이콘 규칙

이모지 절대 금지 (코드·주석·문서 전부). 아이콘이 필요한 자리는
[공통 아이콘 라이브러리](https://design-systems-chi.vercel.app/#/components)의
네이밍(`{name}_line` / `{name}_filled`)으로 참조하고, 사이트에서 이름 검색 후 SVG를 복사해 쓴다.

- 기본 크기 24px / 컬러 `currentColor` (라이브러리 기본값과 동일)
- 햄버거: `menu_line` · 검색: `search_line` · 전화: `phone_line`/`phone_filled` · 닫기: `close_line`/`close_circle_line`
- 아이콘 버튼은 `.hd__icon-btn`(48x48)으로 감싸 터치 타겟 44px 이상 확보 (§16-3)

## 폰트

외부 CDN 금지 - 하네스에 동봉된 `fonts/` woff2만 로드한다 (`fonts.css`가 @font-face 선언, base.css·slides.css가 자동 import).
`mds-harness/` 폴더째 옮기면 폰트도 같이 가며, `fonts/` 경로를 바꾸면 폰트가 기본 sans-serif로 떨어진다.
Pretendard Variable(공통) / Montserrat(공통 영문) / 브랜드별 Display 폰트는 §13과 각 브랜드 Typography 표를 따른다.

## 검증

```bash
# 컨테이너 폭 7종 · 행간 140% · 드롭다운 규격 검증 - 브라우저에서 열기
mds-harness/test.html

# 스타일 규칙 검사
npx stylelint "**/*.css" --config mds-harness/stylelint.config.mjs

# 이모지 검출
node mds-harness/check-no-emoji.mjs <검사할 파일이나 폴더>
```
