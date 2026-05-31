# 웹 디자인 변경 가이드 (색상·폰트·레이아웃)

## 1. 색상 변경

**파일**: `src/styles/variables.css`

이 파일 하나에서 사이트 전체의 색상을 한 번에 바꿀 수 있습니다.

```css
:root {
  /* 포인트 색상 — 버튼, 강조 텍스트, 구분선 등에 쓰임 */
  --text-accent: #8B7355;        /* 현재: 웨딩 갈색. 원하는 색으로 변경 */

  /* 배경 색상 */
  --background: #faf8f5;         /* 현재: 베이지. 흰색이면 #ffffff */
  --background-secondary: #f5f1eb;
  --background-outer: #ebe7e0;

  /* 글자 색상 */
  --text-primary: #1a1a1a;       /* 제목, 강조 텍스트 */
  --text-secondary: #4a4a4a;     /* 본문 */
  --text-muted: #8a8a8a;         /* 보조 정보 */

  /* 달력 색상 */
  --sunday-color: #e74c3c;       /* 일요일 빨강 */
  --saturday-color: #3498db;     /* 토요일 파랑 */

  /* 공유 버튼 */
  --btn-share-bg: #3b82f6;       /* 파란색 */
}
```

### 색상 선택 팁
- 색상 코드(HEX)를 모를 때: [ColorHunt](https://colorhunt.co) 또는 [Coolors](https://coolors.co)에서 팔레트 선택
- 웨딩 테마 추천: 로즈골드 `#B76E79`, 민트 `#A8D8C3`, 라벤더 `#967BB6`, 샴페인 `#F7E7CE`

---

## 2. 모바일 레이아웃 변경

### 컨테이너 너비 (`src/styles/variables.css`)

```css
--container-width: 480px;  /* 현재: 480px. 더 넓게 하려면 값을 늘림 */
```

모바일 화면 너비가 보통 360~430px이므로, 480px이면 대부분의 모바일에서 가득 차게 보입니다.

### 반응형 레이아웃 (`src/styles/components/responsive.css`)

화면 크기별로 레이아웃이 달라지는 규칙을 정의합니다. PC에서 볼 때의 레이아웃을 조정하려면 이 파일을 수정합니다.

```css
@media (min-width: 768px) {
  /* 태블릿/PC에서의 스타일 */
}
```

### 섹션별 CSS 파일

각 섹션의 디자인을 바꾸고 싶다면 해당 파일을 수정합니다:

| 섹션 | 파일 |
|------|------|
| 첫 화면 (히어로) | `src/styles/components/hero.css` |
| 초대장 | `src/styles/components/invitation.css` |
| 갤러리 | `src/styles/components/gallery.css` |
| 달력·D-day | `src/styles/components/calendar.css` |
| 지도 | `src/styles/components/map.css` |
| 모달 팝업 | `src/styles/components/modal.css` |
| 계좌 안내 | `src/styles/components/gift.css` |
| 하단 (푸터) | `src/styles/components/footer.css` |

---

## 3. 폰트 변경

현재 사용 중인 폰트:
- **한국어**: Cafe24Oneprettynight (손글씨 스타일)
- **영문**: LuxuriousScript (필기체)

폰트 파일 위치: `public/fonts/`

### 구글 폰트로 교체하는 방법

1. [Google Fonts](https://fonts.google.com)에서 원하는 한국어 폰트 선택 (예: `Gowun Dodum`, `Nanum Myeongjo`)
2. "Get embed code" 클릭 → `<link>` 태그 복사
3. `index.html`의 `<head>` 태그 안에 붙여넣기:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet">
   ```
4. CSS에서 폰트 이름을 변경:
   ```css
   /* src/styles/base.css 또는 variables.css에서 */
   font-family: 'Gowun Dodum', serif;
   ```

### 로컬 폰트 파일로 교체하는 방법

1. 폰트 파일(`.woff2` 권장)을 `public/fonts/`에 저장
2. `src/styles/base.css`에서 `@font-face` 선언 수정:
   ```css
   @font-face {
     font-family: '내폰트이름';
     src: url('/fonts/내폰트파일.woff2') format('woff2');
   }
   ```

---

## 4. 꽃잎 애니메이션 변경

**파일**: `src/scripts/main.js` — `initHeroPetals()` 함수

히어로 섹션에서 꽃잎이 22개 낙하하는 효과입니다.

```js
function initHeroPetals() {
  const PETAL_COUNT = 22;  // ← 꽃잎 개수 변경 (0이면 비활성화)
  // 꽃잎 색상, 크기, 낙하 속도는 함수 내부에서 랜덤 생성됨
}
```

꽃잎 효과를 완전히 끄려면: `const PETAL_COUNT = 0;`으로 변경

---

## 5. 배경음악 변경

**파일**: `public/music/bgm.mp3`

새 음악 파일을 같은 이름(`bgm.mp3`)으로 교체하거나, 파일명을 바꾸고 `src/scripts/modules/music.js`에서 경로를 수정합니다.

> **팁**: 음악 파일은 저작권에 주의하세요. 저작권 없는 음악은 [Free Music Archive](https://freemusicarchive.org) 또는 [YouTube Audio Library](https://studio.youtube.com/channel/music)에서 찾을 수 있습니다.

---

## 변경 후 확인

```bash
npm run dev
```

- 색상이 사이트 전체에 적용되었는지 확인
- 각 섹션(히어로, 갤러리, 지도, 모달)이 의도한 대로 보이는지 확인
- 모바일 화면 크기(F12 → 디바이스 모드)에서도 확인
