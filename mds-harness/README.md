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

```js
// 스크롤 상태 전환 (design-v2.md §5-1 메커니즘)
window.addEventListener("scroll", () => {
  document.body.dataset.state = window.scrollY > 10 ? "scrolled" : "";
});
```

## 파일 구성

| 파일 | 역할 |
|---|---|
| `tokens.css` | design-v2.md의 모든 CSS 변수 (공통 + 브랜드 + 상태). 값의 원천 |
| `base.css` | 컨테이너·그리드(§15-2), 헤더 셸(§5-0), 푸터 셸(§6-0), 반응형 타이포(§16-2), reduced-motion(§18) |
| `mds.schema.yaml` | 머신 판독 스펙: 브랜드 7종 그리드·헤더·폰트·특이사항 + 금지 규칙 |
| `stylelint.config.mjs` | 금지 규칙 강제 (HEX·soksok·z-index·box-shadow·max-width) |
| `check-no-emoji.mjs` | 이모지 검출 CI 체크 (grep 기반) |
| `test.html` | 브랜드 7종 `.container` 폭 검증 페이지 |

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

외부 CDN 금지 - 로컬 woff2 파일만 로드한다 (design-v2.md §13 로드 코드 참조).
Pretendard Variable(공통) / Montserrat(공통 영문) / 브랜드별 Display 폰트는 §13과 각 브랜드 Typography 표를 따른다.

## 검증

```bash
# 컨테이너 폭 7종 검증 - 브라우저에서 열기
mds-harness/test.html

# 스타일 규칙 검사
npx stylelint "**/*.css" --config mds-harness/stylelint.config.mjs

# 이모지 검출
node mds-harness/check-no-emoji.mjs <검사할 파일이나 폴더>
```
