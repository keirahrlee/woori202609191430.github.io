# 기술 스택 설명 및 개발 환경 설치

## 개념 설명

### Node.js
JavaScript는 원래 브라우저(크롬, 사파리 등)에서만 실행됩니다. **Node.js**는 브라우저 없이 내 컴퓨터(터미널)에서 JavaScript를 실행할 수 있게 해주는 런타임 환경입니다. 이 프로젝트의 개발 서버, 빌드, 이미지 최적화 스크립트 모두 Node.js 위에서 동작합니다.

### npm
Node.js와 함께 설치되는 **패키지 관리자**입니다. 다른 사람이 만든 도구(Vite 등)를 `npm install` 명령어 한 줄로 내려받아 사용할 수 있습니다. `package.json` 파일에 어떤 패키지가 필요한지 명시되어 있고, `npm install`은 이를 읽어 `node_modules/` 폴더에 설치합니다.

### Vite
**개발 서버 + 빌드 도구**입니다. `npm run dev`를 실행하면 Vite가 로컬 서버를 띄워 코드를 수정할 때마다 브라우저를 자동으로 새로고침합니다. `npm run build`를 실행하면 배포용으로 최적화된 파일을 `dist/` 폴더에 생성합니다.

---

## 설치 방법

### 1단계: nvm 설치 (Node.js 버전 관리 도구)

nvm은 Node.js 여러 버전을 쉽게 전환할 수 있게 해주는 도구입니다. Node.js를 직접 설치해도 되지만, nvm을 사용하면 프로젝트마다 다른 버전을 쓸 때 편리합니다.

**macOS / Linux (터미널에서 실행):**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

설치 후 터미널을 재시작하거나 아래 명령어 실행:
```bash
source ~/.zshrc   # zsh 사용 시 (macOS 기본)
# 또는
source ~/.bashrc  # bash 사용 시
```

**Windows:** [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) 에서 설치 파일 다운로드

### 2단계: Node.js 18 설치

```bash
nvm install 18
nvm use 18
node -v   # v18.x.x 로 출력되면 성공
```

### 3단계: 프로젝트 패키지 설치

프로젝트 폴더에서 실행:
```bash
npm install
```

`node_modules/` 폴더가 생성되면 완료입니다. (이 폴더는 git에 올라가지 않으므로 clone 후 반드시 실행해야 합니다.)

---

## 개발 서버 실행

두 번째부터는 아래 두 줄만 실행하면 됩니다.

```bash
cd ~/Documents/woori202609191430.github.io
npm run dev
```

브라우저에서 http://localhost:3000 접속. 서버를 끄려면 터미널에서 `Ctrl + C`.

> **포트가 3000이어야 하는 이유**: 카카오 개발자 콘솔에 `http://localhost:3000`이 허용 도메인으로 등록되어 있어야 카카오 지도가 표시됩니다. 다른 포트를 사용하려면 카카오 콘솔에서 해당 포트도 추가해야 합니다.

---

## 전체 명령어 요약

| 명령어 | 설명 |
|--------|------|
| `npm install` | 패키지 설치 (처음 한 번, 또는 package.json 변경 후) |
| `npm run dev` | 개발 서버 시작 (http://localhost:3000) |
| `npm run build` | 배포용 빌드 (`dist/` 폴더 생성) |
| `npm run preview` | 빌드된 파일 미리보기 |
| `npm run lint` | 코드 스타일 검사 |
| `node tools/optimize-wedding-images.mjs` | 갤러리 이미지 WebP 변환 |
