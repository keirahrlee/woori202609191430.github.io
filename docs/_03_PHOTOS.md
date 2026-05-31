# 사진 교체 가이드

## 이미지 파일 사양 요약

| 용도 | 크기 | 포맷 | 용량 목표 |
|------|------|------|---------|
| 히어로 배경 (모바일) | 750×1334px | WebP 또는 JPEG | 100KB 이하 |
| 히어로 배경 (데스크톱) | 1920×1080px | WebP 또는 JPEG | 100KB 이하 |
| 갤러리 고화질 | 최대 1600px (긴 변) | WebP | 80% 품질 |
| 갤러리 썸네일 | 최대 480px (긴 변) | WebP | 80% 품질 |
| 카카오톡 공유 이미지 | 800×1200px | JPEG | 50KB 이하 |
| OG 이미지 (SNS 미리보기) | 1200×630px | JPEG | 90% 품질 |

> **WebP**: 일반 JPG/PNG보다 파일 크기가 훨씬 작은 현대 이미지 포맷. 모바일 로딩 속도에 유리합니다.

---

## 1. 히어로 배경 이미지 교체

**위치**: `public/images/hero/`

현재 파일: `hero-web-1-squoosh-1.webp`

### 교체 방법
1. 새 사진을 `public/images/hero/` 폴더에 저장
2. `src/scripts/modules/config.js`의 `HERO_IMAGE` 값을 새 파일명으로 수정:
   ```js
   export const HERO_IMAGE = '/images/hero/새파일명.webp';
   ```

> `HERO_IMAGE`는 앱 초기화 시 CSS 변수(`--hero-bg-url`)로 주입되며, `hero.css`에서 이를 참조합니다.  
> CSS나 HTML은 직접 수정하지 않아도 됩니다.

### 이미지 최적화 팁
- macOS: [Squoosh](https://squoosh.app) (브라우저에서 무료 변환)
- 또는 Preview 앱 → 내보내기 → WebP 선택

---

## 2. 갤러리 이미지 교체

갤러리는 고화질(full)과 썸네일(thumb) 두 버전이 필요합니다.

### 폴더 구조
```
public/images/wedding/
├── (원본 JPG — 보관용, 웹에서 직접 사용 안 함)
└── optimized/
    ├── full/     ← 갤러리 클릭 시 보이는 고화질 이미지 (WebP)
    └── thumb/    ← 갤러리 그리드에 표시되는 썸네일 (WebP)
```

### 방법 A: 자동 변환 스크립트 사용 (권장)

1. 원본 JPG/PNG 사진을 `public/images/wedding/` 폴더에 복사
2. 스크립트 실행:
   ```bash
   node tools/optimize-wedding-images.mjs
   ```
3. `optimized/full/`과 `optimized/thumb/`에 WebP 파일이 자동 생성됨

### 방법 B: 수동으로 WebP 변환

[Squoosh](https://squoosh.app)에서 각 사진을 WebP로 변환 후 두 버전(고화질/썸네일) 저장.

### 갤러리 목록 업데이트

사진 파일명이 바뀌면 **반드시** `src/scripts/modules/config.js`의 `GALLERY_ITEMS` 배열도 수정해야 합니다.

```js
export const GALLERY_ITEMS = [
  // 각 항목이 갤러리 사진 한 장을 나타냄
  { 
    full: '/images/wedding/optimized/full/내사진1.webp',   // ← 파일명 변경
    thumb: '/images/wedding/optimized/thumb/내사진1.webp'  // ← 파일명 변경
  },
  { 
    full: '/images/wedding/optimized/full/내사진2.webp',
    thumb: '/images/wedding/optimized/thumb/내사진2.webp'
  },
  // ... 원하는 만큼 추가
];
```

> 갤러리는 처음에 9장만 표시하고, "더보기" 버튼을 누르면 나머지가 나옵니다. 장 수는 자유롭게 변경 가능합니다.

---

## 3. 카카오톡 공유 이미지 교체

카카오톡으로 청첩장을 공유할 때 미리보기로 표시되는 이미지입니다.

**현재 파일**: `public/images/share_v1_squoosh.jpg`

### 규격
- 크기: **800×1200px** (세로형)
- 포맷: **JPEG**
- 용량: **50KB 이하** (카카오 권장 사항)
- 내용: 두 사람 사진 + 날짜 + 이름 텍스트 조합 권장

### 교체 방법
1. 새 이미지를 `public/images/` 폴더에 저장 (파일명 예: `share.jpg`)
2. **두 곳** 모두 수정:

   **① `src/scripts/modules/config.js`** — 카카오톡 공유 버튼용:
   ```js
   export const SHARE_IMAGE = '/images/share.jpg';
   ```

   **② `index.html`** head 태그 — URL 직접 붙여넣기 시 크롤러용:
   ```html
   <meta property="og:image" content="./images/share.jpg">
   ```

> **왜 두 곳인가?**  
> - `SHARE_IMAGE` (config.js) → 청첩장 내 **카카오 공유 버튼** 클릭 시 SDK가 이미지를 직접 전달  
> - `og:image` (index.html) → 카카오톡 채팅창에 URL을 **직접 붙여넣을 때** 카카오 크롤러가 HTML을 읽어 이미지 표시  
> 크롤러는 JS를 실행하지 않으므로 og:image는 HTML에 하드코딩되어야 합니다.

### 확인 방법
localhost로는 불가합니다.

카카오 공유 이미지는 카카오 서버가 직접 해당 URL에 접근해서 이미지를 가져오기 때문에, 공개된 URL이어야 합니다.

**확인 순서:**

1. GitHub에 push → GitHub Pages 배포 완료 대기 (보통 1~2분)
2. 배포된 URL을 카카오톡 채팅창에 붙여넣기 → 링크 미리보기에서 공유 이미지 확인
3. 또는 카카오톡 공유 버튼을 눌러 나에게 보내기로 테스트

---

## 4. 신랑·신부 개인 사진 교체

초대장 섹션과 D-day 섹션에 사용되는 커플 사진입니다.

| 용도 | 현재 파일명 | 수정 위치 |
|------|-----------|---------|
| 신랑 사진 (초대장 섹션) | `IMG_4264.webp` | `index.html` |
| 신부 사진 (초대장 섹션) | `IMG_4260.webp` | `index.html` |
| D-day 섹션 사진 | `dday.webp` | `index.html` |
| 푸터 배경 사진 ("두 사람이 걸어온 길처럼...") | `last.webp` | `src/scripts/modules/config.js` |

새 파일로 교체 후 위 수정 위치에서 해당 파일명을 새 파일명으로 수정합니다.

> 푸터 배경은 `config.js`의 `FOOTER_IMAGE`를 수정하면 됩니다. (CSS 변수 `--footer-bg-url`로 자동 주입)

---

## 변경 후 확인

```bash
npm run dev
```

- 첫 화면(히어로) 이미지 확인
- 갤러리 그리드에서 썸네일 확인
- 갤러리 사진 클릭 시 고화질 이미지 확인
- 카카오톡 공유 버튼 클릭 시 공유 이미지 미리보기 확인
