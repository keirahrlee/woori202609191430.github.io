# 모바일 웹 청첩장 — 커스터마이징 가이드

> 이 문서는 기술 스택을 처음 접하는 개발자를 위한 안내서입니다.  
> Fork한 프로젝트를 내 청첩장으로 바꾸는 모든 과정을 설명합니다.

---

## Claude 작업 지침 (이 프로젝트에서만 적용)

- 변경 항목을 완료했다면, 아래 **작업 진행 체크리스트**에서 해당 항목을 `- [ ]` → `- [x]`로 표시한다.
- 변경 내용이 하위 `docs/*.md` 파일에도 영향을 준다면 해당 파일도 함께 업데이트한다.
- 체크리스트에 없는 새로운 변경 사항이 생기면 해당 섹션에 항목을 추가한다.

---

## 작업 진행 체크리스트

### 내용 (텍스트)
- [x] `config.js` — 카카오 API 키 교체
- [x] `config.js` — 예식장 이름, 주소, 좌표, 카카오플레이스 ID
- [x] `config.js` — 신랑·신부 이름
- [x] `config.js` — 결혼식 날짜·시간
- [ ] `config.js` — 갤러리 이미지 목록 (파일명)
- [x] `index.html` — head 태그 OG 타이틀·설명
- [x] `index.html` — Hero 섹션 이름·날짜·예식장
- [x] `index.html` — 초대장 섹션 부모님 정보
- [x] `index.html` — 초대 문구·맺음말
- [x] `index.html` — 연락처 모달 (신랑·신부측 전화번호)
- [x] `index.html` — 계좌 모달 (신랑·신부측 은행·계좌·예금주) ※ 신부측 계좌는 임시값, 추후 수정 필요
- [x] `index.html` — 지도 섹션 예식장 이름·주소·전화
- [x] `index.html` — 달력 섹션 강조 날짜
- [x] `share.js` — 카카오톡 공유 제목·설명

### 사진
- [x] `public/images/hero/` — 히어로 배경 이미지
- [ ] `public/images/wedding/optimized/full/` — 갤러리 고화질 (WebP)
- [ ] `public/images/wedding/optimized/thumb/` — 갤러리 썸네일 (WebP)
- [x] `public/images/share_v1_squoosh.jpg` — 카카오톡 공유 이미지
- [x] `index.html` og:image — OG 이미지 경로

### 웹 디자인
- [ ] `src/styles/variables.css` — 색상 테마 변경
- [ ] `public/fonts/` — 폰트 교체 (선택)
- [ ] `public/music/bgm.mp3` — 배경음악 교체 (선택)
- [ ] `src/scripts/main.js` — 꽃잎 애니메이션 설정 (선택)

---

## 프로젝트 개요

- **무엇인가**: 결혼식 청첩장 웹사이트. PC/모바일 브라우저에서 링크만 열면 볼 수 있는 웹페이지.
- **어떻게 배포되나**: GitHub 저장소에 코드를 올리면 GitHub Actions(자동화 도구)가 자동으로 웹에 게시함.
- **현재 내용**: 천창범 ♥ 박하영 (2026.05.23, 엘타워 7층 그랜드홀) — 이 내용을 내 것으로 교체하는 게 목표.

---

## 기술 스택 (처음 접한다면 여기부터)

| 도구 | 목적 | 상세 가이드 |
|------|------|-------------|
| **Node.js** | JavaScript 실행 환경. 개발 서버를 띄우고 빌드하는 데 필요함. | [→ _01_TECH_STACK.md](docs/_01_TECH_STACK.md) |
| **npm** | 패키지(플러그인) 설치 도구. `npm install`로 필요한 도구들을 내려받음. | [→ _01_TECH_STACK.md](docs/_01_TECH_STACK.md) |
| **Vite** | 개발 서버 + 빌드 도구. 코드를 수정하면 브라우저가 자동으로 새로고침됨. | [→ _01_TECH_STACK.md](docs/_01_TECH_STACK.md) |
| **Vanilla JS** | 순수 JavaScript. 별도의 프레임워크 없이 작성된 코드. | — |
| **CSS** | 웹페이지 디자인(색상, 폰트, 레이아웃)을 담당. | [→ _04_DESIGN.md](docs/_04_DESIGN.md) |
| **카카오 API** | 지도 표시, 카카오톡 공유 기능에 사용. API 키 발급 필요. | [→ _05_KAKAO_API.md](docs/_05_KAKAO_API.md) |
| **GitHub Actions** | 코드 push 시 자동으로 웹사이트를 배포하는 자동화 도구. | [→ _06_DEPLOY.md](docs/_06_DEPLOY.md) |

---

## 권장 작업 순서

1. **가상환경 설치** — Node.js 18 이상 설치 (`node -v`로 버전 확인). [→ _01_TECH_STACK.md](docs/_01_TECH_STACK.md)
2. **로컬 개발 환경 시작** — `npm install` 후 `npm run dev` (http://localhost:3000)
3. **내용 변경** — 이름·날짜·장소·연락처·계좌 교체. [→ _02_CONTENT.md](docs/_02_CONTENT.md)
4. **사진 교체** — 히어로·갤러리·공유 이미지 교체. [→ _03_PHOTOS.md](docs/_03_PHOTOS.md)
5. **카카오 API 키 교체** — 내 앱 키로 교체. [→ _05_KAKAO_API.md](docs/_05_KAKAO_API.md)
6. **디자인 변경** (선택) — 색상·폰트·배경음악 변경. [→ _04_DESIGN.md](docs/_04_DESIGN.md)
7. **배포** — GitHub에 push → 자동 배포 확인. [→ _06_DEPLOY.md](docs/_06_DEPLOY.md)

> **중요**: 카카오 지도는 localhost:3000 포트에서만 작동합니다.  
> 다른 포트나 도메인이면 지도가 표시되지 않습니다. (카카오 개발자 콘솔에 도메인 등록 필요)

---

## 파일 디렉토리 구조

변경이 필요한 항목은 `[변경 필요]`, 변경 가능한 항목은 `[변경 가능]`으로 표시.

```
woori202609191430.github.io/
│
├── index.html                    [변경 필요] 웹페이지의 본문 전체. 이름·날짜·문구·연락처·계좌 등 모든 텍스트
├── vite.config.js                빌드 설정 (수정 불필요)
├── package.json                  프로젝트 의존성 목록 (수정 불필요)
├── .github/
│   └── workflows/
│       └── deploy.yml            [변경 가능] 자동 배포 설정. 기본적으로 수정 불필요
│
├── src/                          소스 코드 폴더
│   ├── scripts/
│   │   ├── main.js               [변경 가능] 꽃잎 개수(22개) 등 시각 효과 설정
│   │   └── modules/
│   │       ├── config.js         [변경 필요] 핵심 설정값 — API 키, 예식장, 날짜, 갤러리 목록
│   │       ├── share.js          [변경 필요] 카카오톡 공유 시 표시되는 제목·설명
│   │       ├── gallery.js        갤러리 기능 (수정 불필요)
│   │       ├── map.js            지도 기능 (수정 불필요)
│   │       ├── modal.js          모달 팝업 기능 (수정 불필요)
│   │       ├── music.js          배경음악 플레이어 (수정 불필요)
│   │       ├── clipboard.js      주소 복사 기능 (수정 불필요)
│   │       ├── scroll-reveal.js  스크롤 애니메이션 (수정 불필요)
│   │       ├── toast.js          알림 메시지 기능 (수정 불필요)
│   │       └── utils.js          히어로 높이 계산, D-day 카운터 (수정 불필요)
│   │
│   └── styles/
│       ├── main.css              CSS 파일들을 불러오는 진입점 (수정 불필요)
│       ├── variables.css         [변경 가능] 색상·폰트 등 디자인 변수 (여기서 한 번에 바꿀 수 있음)
│       ├── base.css              기본 스타일 리셋 (수정 불필요)
│       └── components/
│           ├── hero.css          [변경 가능] 첫 화면(히어로) 섹션 디자인
│           ├── invitation.css    [변경 가능] 초대장 섹션 디자인
│           ├── gallery.css       [변경 가능] 갤러리 레이아웃 디자인
│           ├── calendar.css      [변경 가능] 달력·D-day 섹션 디자인
│           ├── map.css           [변경 가능] 지도 섹션 디자인
│           ├── modal.css         [변경 가능] 모달 팝업 디자인
│           ├── gift.css          [변경 가능] 계좌 섹션 디자인
│           ├── footer.css        [변경 가능] 하단 푸터 디자인
│           └── responsive.css    [변경 가능] 모바일 최적화 — 화면 크기별 레이아웃 조정
│
├── public/                       정적 파일 (코드로 처리하지 않고 그대로 서빙되는 파일들)
│   ├── images/
│   │   ├── hero/                 [변경 필요] 첫 화면 배경 이미지
│   │   │   └── hero-EM902712-2400.jpg  → 내 사진으로 교체
│   │   ├── wedding/
│   │   │   ├── (원본 JPG들)      원본 보관용. 직접 웹에 쓰이지 않음
│   │   │   └── optimized/
│   │   │       ├── full/         [변경 필요] 갤러리 고화질 이미지 (WebP)
│   │   │       └── thumb/        [변경 필요] 갤러리 썸네일 이미지 (WebP)
│   │   ├── maps/                 지도 앱 아이콘 (수정 불필요)
│   │   ├── utils/                UI 아이콘 — 볼륨, 복사, 공유 등 (수정 불필요)
│   │   ├── share_v3.jpg          [변경 필요] 카카오톡 공유 시 표시되는 썸네일 이미지
│   │   └── KakaoTalk_logo.svg    카카오 로고 (수정 불필요)
│   ├── fonts/                    [변경 가능] 웹폰트 파일. 폰트 교체 시 여기서 변경
│   └── music/
│       └── bgm.mp3               [변경 가능] 배경음악. 내 음악으로 교체 가능
│
└── tools/
    └── optimize-wedding-images.mjs   [갤러리 이미지 최적화 스크립트] → docs/_03_PHOTOS.md 참고
```

### 모바일 최적화 개발 위치

이 프로젝트는 처음부터 모바일(480px 기준)에 최적화되어 있습니다. 모바일 관련 작업은 아래 파일에서 진행합니다.

| 파일 | 설명 |
|------|------|
| `src/styles/components/responsive.css` | 화면 크기별 레이아웃 조정. 모바일 디자인 변경의 핵심 파일 |
| `src/styles/variables.css` | `--container-width: 480px` — 전체 컨텐츠 최대 너비 |
| `src/styles/base.css` | 기본 스타일, 스크롤 동작 정의 |
| `index.html` (head 태그) | `<meta name="viewport">` — 핀치 줌 비활성화, 모바일 스케일 고정 |
| `src/scripts/modules/utils.js` | 모바일 브라우저 주소창을 고려한 히어로 높이 동적 계산 |

---

## 변경이 필요한 모든 항목

### 1. 내용 변경 (텍스트)

자세한 방법: [→ _02_CONTENT.md](docs/_02_CONTENT.md)

#### `src/scripts/modules/config.js` — 핵심 설정값

```js
export const KAKAO_API_KEY = 'a37c725b11400c9f5bfea1a5aa64bf79'; // [변경 필요] 내 카카오 API 키로 교체

export const VENUE = {
  name: '엘타워 7층 그랜드홀',    // [변경 필요] 예식장 이름
  address: '서울 서초구 강남대로 213 엘타워', // [변경 필요] 예식장 주소
  keyword: '엘타워',              // [변경 필요] 카카오맵 검색 키워드
  latitude: 37.4827711,           // [변경 필요] 예식장 위도 (구글맵에서 확인)
  longitude: 127.034966,          // [변경 필요] 예식장 경도
  kakaoPlaceId: '10660163',       // [변경 필요] 카카오맵 장소 ID
};

export const WEDDING = {
  bride: '박하영',                 // [변경 필요] 신부 이름
  groom: '천창범',                 // [변경 필요] 신랑 이름
  date: '2026.05.23 (토) 11:30',  // [변경 필요] 날짜·요일·시간
  dateObj: new Date('2026-05-23T11:30:00'), // [변경 필요] D-day 계산용 날짜 (ISO 형식)
  venue: '엘타워 7층 그랜드홀',   // [변경 필요] 예식장 이름
  address: '서울 서초구 강남대로 213 엘타워', // [변경 필요]
};
```

#### `index.html` — 본문 텍스트 전체

| 항목 | 찾을 텍스트 | 위치 |
|------|------------|------|
| 신랑 이름 | `천창범` | 여러 곳 (검색 후 전체 교체) |
| 신부 이름 | `박하영` | 여러 곳 |
| 결혼식 날짜 | `2026.05.23` | 여러 곳 |
| 결혼식 시간 | `11:30` | 여러 곳 |
| 예식장 이름 | `엘타워 7층 그랜드홀` | 여러 곳 |
| 예식장 주소 | `서울 서초구 강남대로 213` | 지도 섹션 |
| 예식장 전화 | `02-526-8600` | 지도 섹션 |
| 신랑 부모 | `천성욱 · 주은애` | 초대장 섹션 |
| 신부 부모 | `박용해 · 남규리` | 초대장 섹션 |
| 신랑 연락처 | `010-6300-4508` 외 2명 | 연락처 모달 |
| 신부 연락처 | `010-8595-9302` 외 2명 | 연락처 모달 |
| 신랑측 계좌 | `국민 825302-04-166651` 외 2개 | 마음 전하실 곳 모달 |
| 신부측 계좌 | `우리 1002-547-287991` 외 2개 | 마음 전하실 곳 모달 |
| 초대 문구 | 본문 문장들 | invitation 섹션 |
| 맺음말 | `앞으로도 지금처럼...` | footer 섹션 |
| OG 타이틀 | `천창범♥박하영 결혼합니다` | head 태그 |

#### `src/scripts/modules/share.js` — 카카오톡 공유 메시지

```js
title: '천창범♥박하영 결혼합니다'  // [변경 필요] 공유 시 표시 제목
description: '2026년 5월 23일...'  // [변경 필요] 공유 시 표시 설명
```

---

### 2. 사진 변경 (Images)

자세한 방법: [→ _03_PHOTOS.md](docs/_03_PHOTOS.md)

| 항목 | 교체할 파일 경로 | 권장 규격 |
|------|---------------|---------|
| 히어로 배경 | `public/images/hero/` 폴더 내 이미지 | 모바일: 750×1334px, WEBP/JPG |
| 갤러리 (17장) | `public/images/wedding/optimized/full/*.webp` | WebP, 최대 1600px |
| 갤러리 썸네일 | `public/images/wedding/optimized/thumb/*.webp` | WebP, 최대 480px |
| 카카오톡 공유 | `public/images/share_v3.jpg` | 800×1200px, JPEG, 50KB 이하 |
| OG 이미지 | `index.html`의 og:image 태그 | 1200×630px |

> 갤러리 이미지는 직접 WebP로 변환하거나, `tools/optimize-wedding-images.mjs` 스크립트를 사용합니다.  
> (`node tools/optimize-wedding-images.mjs` 실행)

---

### 3. 웹 디자인 변경 (CSS)

자세한 방법: [→ _04_DESIGN.md](docs/_04_DESIGN.md)

| 항목 | 파일 | 변수/속성 |
|------|------|---------|
| 메인 포인트 색상 | `src/styles/variables.css` | `--text-accent: #8B7355` (갈색 → 원하는 색으로) |
| 배경 색상 | `src/styles/variables.css` | `--background: #faf8f5` (베이지) |
| 글자 색상 | `src/styles/variables.css` | `--text-primary`, `--text-secondary` |
| 한국어 폰트 | `public/fonts/` + `index.html` | Cafe24Oneprettynight → 교체 가능 |
| 영문 폰트 | `public/fonts/` + CSS | LuxuriousScript → 교체 가능 |
| 배경음악 | `public/music/bgm.mp3` | 내 음악 파일로 교체 |
| 꽃잎 애니메이션 | `src/scripts/main.js` | `initHeroPetals()` 함수 — 개수, 색상 변경 가능 |

---

## 로컬 개발 명령어

```bash
# 의존성 설치 (처음 한 번만)
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 빌드 (배포용 파일 생성 → dist/ 폴더)
npm run build

# 갤러리 이미지 최적화 (사진 교체 후 실행)
node tools/optimize-wedding-images.mjs
```

> **주의**: 카카오 지도는 반드시 `localhost:3000`에서 실행해야 합니다.  
> 다른 포트에서는 지도가 표시되지 않습니다. (카카오 개발자 콘솔에 포트 등록 필요)

---

## docs/ 상세 가이드 목록

| 파일 | 내용 |
|------|------|
| [_01_TECH_STACK.md](docs/_01_TECH_STACK.md) | Node.js, nvm, npm, Vite 설치 및 개념 설명 |
| [_02_CONTENT.md](docs/_02_CONTENT.md) | 이름·날짜·장소·연락처·계좌번호 변경 단계별 가이드 |
| [_03_PHOTOS.md](docs/_03_PHOTOS.md) | 히어로·갤러리·공유 이미지 교체 및 최적화 방법 |
| [_04_DESIGN.md](docs/_04_DESIGN.md) | 색상·폰트·배경음악·애니메이션 변경 방법 |
| [_05_KAKAO_API.md](docs/_05_KAKAO_API.md) | 카카오 API 키 발급 및 교체, 도메인 등록 방법 |
| [_06_DEPLOY.md](docs/_06_DEPLOY.md) | GitHub Pages 배포 설정, GitHub Actions 확인 방법 |
