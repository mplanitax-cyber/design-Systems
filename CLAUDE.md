# MDS 디자인시스템 - 프로젝트 규칙

- 모든 스타일 값은 mds-harness/tokens.css 참조만 허용. 임의 HEX·이모지 금지, 아이콘은 공통 아이콘 라이브러리 네이밍(`{name}_line` / `{name}_filled`) 사용.
- 값의 유일한 출처는 design-v2.md (Overview 페이지에서 다운로드). md는 설명, 하네스(mds-harness/)는 강제. 새 값은 md에 먼저 추가한 뒤 tokens.css에 반영한다.
- 금지 규칙 상세는 mds-harness/mds.schema.yaml의 forbidden 목록과 mds-harness/stylelint.config.mjs를 따른다.
- 검증: mds-harness/test.html (컨테이너 폭 7종) · `node mds-harness/check-no-emoji.mjs` (이모지 검출).
