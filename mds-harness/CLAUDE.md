# MDS 하네스 - AI 작업 규칙

이 폴더(mds-harness/)를 쓰는 모든 산출물(랜딩·발표자료·HTML)에 적용한다. 사용자가 따로 지시하지 않아도 기본값이다.

## 필수 로드
- `tokens.css` -> `base.css` 순서로 link. 발표자료는 `slides.css`도 추가. `data-brand`로 브랜드 지정 (mp | hg | aia | ss | dd | hc | gs).
- 폰트는 `fonts.css`가 자동 로드(base.css·slides.css가 import). 폰트 파일 경로(`fonts/`)를 바꾸거나 외부 CDN·시스템 폰트를 쓰지 않는다.
- 폰트: 랜딩 UI는 Pretendard(`--font-family-base`) + Montserrat(`--font-family-en`), 발표자료(slides)는 Paperlogy 단일(`--slide-font-family`, 400~700 - 800 이상 금지).
- 폰트 이름을 CSS에 직접 쓰지 말고 위 변수만 쓴다.

## 값
- 색·크기·간격·행간 등 모든 스타일 값은 `tokens.css` 변수 참조만 허용. 임의 HEX·px 값을 새로 만들지 않는다.
- 행간은 전 텍스트 140%(`--line-height-14`) 단일값. 컴포넌트에서 line-height를 따로 선언하지 않는다.
- 하네스에 없는 값이 필요하면 임의로 만들지 말고 사용자에게 알린다 (새 값은 design-v2.md에 먼저 추가).

## 로고
- 로고는 `logos/`의 파일을 `<img>`로 가져다 쓴다. 다시 그리거나 비슷하게 만들거나 텍스트로 대체하지 않는다.
- 엠플랜잇: 밝은 배경 `logos/mplanit.svg` · 어두운 배경 `logos/mplanit-white.svg`
- 흥국화재: `logos/hg.svg` (밝은 배경)
- AIA: `logos/aia-white.svg` (흰색 로고 - AIA 레드 `--color-aia-red` 또는 어두운 배경 위 전용, 밝은 배경 금지)
- 지셀라 `gselah.png` · 쏙쏙 `soksok.png` · 디디다 `ddda.png` (밝은 배경) · 헬스케어 `prohealth-white.png` (어두운 배경 전용)
- 웰컴저축은행 로고는 동봉되지 않았다. 목록에 없는 로고는 임의로 그리지 말고 사용자에게 파일을 요청한다.
- 헤더에는 `.hd__logo` 슬롯에 넣는다: `<a class="hd__logo"><img src="mds-harness/logos/mplanit.svg" alt="mplanit" height="..."></a>` (높이는 브랜드 헤더 토큰 기준).

## 금지
- 이모지 금지. 아이콘은 공통 아이콘 라이브러리 이름(`{name}_line` / `{name}_filled`)으로 표기.
- 긴 대시(—, –) 대신 하이픈(-).
- 새 프로젝트 CSS에 하네스 값을 복사해 재정의하지 않는다.

## 검증
- `mds-harness/test.html` · `node mds-harness/check-no-emoji.mjs` · `stylelint.config.mjs`
