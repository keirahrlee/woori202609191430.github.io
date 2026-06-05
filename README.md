# 💒 모바일 청첩장

이우석 ♥ 이혜리의 모바일 웹 청첩장입니다.

## 🚀 배포 URL

**프로덕션**: https://keirahrlee.github.io/woori202609191430.github.io/

## ✨ 주요 기능

- **📱 모바일 최적화**: 반응형 디자인, 핀치 줌 비활성화
- **👰🤵 초대장**: 신랑신부 정보, 결혼식 일정
- **🖼️ 갤러리**: WebP 최적화 이미지, 뷰어 모달 (30장)
- **🗺️ 오시는 길**:
  - 카카오맵 임베드
  - 주소 복사 기능 (아이콘 클릭)
  - 앱 연동 버튼 (카카오맵, 네이버지도, 티맵, 카카오내비)
- **💰 마음 전하실 곳**: 계좌번호 안내 (신랑측/신부측 모달)
- **📞 연락하기**: 신랑측/신부측 모달 팝업
- **📤 카카오톡 공유**: 청첩장 공유 기능
- **🌸 꽃잎 애니메이션**: 히어로 섹션 배경 효과

## 🛠️ 기술 스택

- **프레임워크**: Vanilla JavaScript (ES2024)
- **빌드 도구**: Vite 5.4
- **스타일**: CSS Custom Properties
- **폰트**: Cafe24Oneprettynight (한국어), LuxuriousScript (영문)
- **지도**: Kakao Maps API
- **공유**: Kakao SDK
- **이미지**: WebP (sharp로 자동 최적화)
- **호스팅**: GitHub Pages
- **CI/CD**: GitHub Actions

## 💻 로컬 개발

### 요구사항

- Node.js 18.0.0 이상

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 갤러리 이미지 최적화 (사진 교체 후 실행)
node tools/optimize-wedding-images.mjs
```

> **주의**: 카카오 지도는 반드시 `localhost:3000`에서 실행해야 합니다.

## 📁 프로젝트 구조

```
woori202609191430.github.io/
├── index.html                    # 메인 페이지 (텍스트·연락처·계좌 등)
├── vite.config.js                # Vite 빌드 설정
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions 자동 배포
├── src/
│   ├── scripts/
│   │   ├── main.js               # 진입점 (꽃잎 애니메이션 등)
│   │   └── modules/
│   │       ├── config.js         # 핵심 설정값 (API 키, 날짜, 갤러리 목록)
│   │       ├── share.js          # 카카오톡 공유 메시지
│   │       ├── gallery.js        # 갤러리 기능
│   │       ├── map.js            # 카카오맵 연동
│   │       ├── modal.js          # 모달 팝업
│   │       ├── music.js          # 배경음악 플레이어
│   │       └── utils.js          # 히어로 높이 계산, D-day 카운터
│   └── styles/
│       ├── variables.css         # 색상·폰트 디자인 변수
│       └── components/           # 섹션별 CSS
├── public/
│   ├── images/
│   │   ├── hero/                 # 히어로 배경 이미지
│   │   ├── wedding/
│   │   │   └── optimized/
│   │   │       ├── full/         # 갤러리 고화질 WebP
│   │   │       └── thumb/        # 갤러리 썸네일 WebP
│   │   └── _share.jpg            # 카카오톡 공유 썸네일
│   ├── fonts/                    # 웹폰트
│   └── music/
│       └── bgm.mp3               # 배경음악 (현재 비활성화)
└── tools/
    └── optimize-wedding-images.mjs  # 갤러리 이미지 WebP 변환 스크립트
```

## 🔧 주요 설정

### 핵심 설정값 (`src/scripts/modules/config.js`)

- **예식장**: 수원 WI컨벤션센터 I홀
- **날짜**: 2026.09.19 (토) 14:30
- **좌표**: 37.284240, 127.039871
- **갤러리**: 30장 (9장씩 표시, 더보기 버튼)

### Vite 설정 (`vite.config.js`)

- `base: './'` — 상대 경로 (GitHub Pages 서브디렉토리 지원)
- Terser minification + console.log 제거 (프로덕션)

## 🚀 배포

### GitHub Pages 자동 배포

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 배포합니다.

1. GitHub 저장소 Settings > Pages
2. Source: GitHub Actions 선택
3. `main` 브랜치에 push → 자동 배포 (약 1~2분 소요)

### 수동 배포

```bash
npm run build
# dist/ 폴더를 웹 서버에 업로드
```

## 📄 라이선스

MIT License

---

Made with ❤️ for our special day
