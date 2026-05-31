# 배포 가이드 (GitHub Pages + GitHub Actions)

## 개념 설명

### GitHub Pages
GitHub에서 제공하는 **무료 정적 웹 호스팅** 서비스입니다. 저장소의 코드를 웹사이트로 자동 게시해 줍니다. `https://내아이디.github.io` 형태의 주소가 생성됩니다.

### GitHub Actions
코드를 GitHub에 push(업로드)하면 **자동으로 지정된 작업을 실행**하는 자동화 도구입니다. 이 프로젝트는 `main` 브랜치에 push하면 자동으로 빌드(`npm run build`)하고, 결과물을 GitHub Pages에 배포합니다. 설정 파일: `.github/workflows/deploy.yml`

---

## 최초 배포 설정

### Step 1. GitHub 저장소 만들기

1. [GitHub](https://github.com) 접속 → 로그인
2. 오른쪽 상단 "+" → "New repository" 클릭
3. 저장소 이름: **`내아이디.github.io`** (예: `hyeri.github.io`)
   - 이 형식으로 만들면 자동으로 `https://hyeri.github.io` 주소가 활성화됨
4. Public 선택 → "Create repository"

### Step 2. GitHub Pages 활성화

1. 저장소 → "Settings" 탭
2. 왼쪽 메뉴 → "Pages"
3. **Source**: "GitHub Actions" 선택 (Deploy from a branch가 아닌 GitHub Actions)
4. 저장

### Step 3. GitHub Actions 활성화 (Fork한 경우 필수)

> Fork(복사)한 저장소는 GitHub Actions가 기본으로 **비활성화**되어 있습니다. 활성화하지 않으면 push해도 배포가 실행되지 않습니다.

**방법 A — 웹 UI:**
1. 저장소 → **Actions** 탭 클릭
2. "I understand my workflows, go ahead and enable them" 버튼 클릭

**방법 B — 터미널 (GitHub CLI):**
```bash
gh workflow enable deploy.yml --repo 내아이디/내레포이름
```

### Step 4. 코드 업로드 (최초)

터미널에서 프로젝트 폴더로 이동 후:

```bash
git remote add origin https://github.com/내아이디/내아이디.github.io.git
git branch -M main
git push -u origin main
```

push 후 자동으로 Actions 워크플로우가 실행되어 배포됩니다.

---

## 이후 업데이트 배포 방법

내용을 수정한 뒤 GitHub에 push하면 자동 배포됩니다.

```bash
# 변경된 파일 스테이징
git add .

# 커밋 (변경 내용을 기록)
git commit -m "이름과 날짜 변경"

# GitHub에 업로드 → 자동 배포 시작
git push
```

---

## 배포 상태 확인

1. GitHub 저장소 → "Actions" 탭 클릭
2. 가장 최근 워크플로우가 초록색 체크(✓)면 배포 성공
3. 노란색 원(○)은 진행 중, 빨간색 X는 실패

배포 완료 후 `https://내아이디.github.io` 접속하여 확인합니다.

---

## 404 에러가 뜰 때

push 후 배포 URL에 접속했는데 "There isn't a GitHub Pages site here." 404 에러가 뜨는 경우.

### 원인 1 — Actions가 한 번도 실행되지 않은 경우 (Fork 후 가장 흔한 원인)

워크플로우가 비활성화 상태여서 push해도 배포가 실행되지 않은 것입니다.

**확인:** 저장소 → Actions 탭에 워크플로우 실행 기록이 없으면 이 경우입니다.

**해결 방법 A — 웹 UI:**
1. 저장소 → **Actions** 탭 클릭
2. "I understand my workflows, go ahead and enable them" 버튼 클릭
3. Actions → "Deploy to GitHub Pages" → **Run workflow** 버튼으로 수동 실행

**해결 방법 B — 터미널 (GitHub CLI):**
```bash
# 워크플로우 활성화
gh workflow enable deploy.yml --repo 내아이디/내레포이름

# 수동으로 배포 실행
gh workflow run deploy.yml --repo 내아이디/내레포이름 --ref main
```

### 원인 2 — Pages Source 설정이 잘못된 경우

**확인 및 해결 — 웹 UI:**
1. 저장소 → Settings → Pages
2. **Source**가 "GitHub Actions"로 설정되어 있는지 확인
3. "Deploy from a branch"로 되어 있으면 "GitHub Actions"로 변경

---

## 배포가 실패할 때 확인 사항

1. Actions 탭 → 실패한 워크플로우 클릭 → 어느 단계에서 실패했는지 로그 확인
2. 주요 원인:
   - `npm run build` 에러: 코드에 문법 오류가 있는 경우
   - 이미지 파일 경로가 잘못된 경우: `config.js`의 갤러리 경로와 실제 파일명 불일치

---

## 로컬에서 빌드 미리보기

GitHub에 올리기 전에 로컬에서 빌드 결과를 확인할 수 있습니다.

```bash
npm run build    # dist/ 폴더에 빌드 파일 생성
npm run preview  # 빌드된 파일을 로컬 서버로 미리보기
```

---

## 배포 URL 형식

| 저장소 이름 | 접속 URL |
|------------|---------|
| `keirahrlee.github.io` (계정명 = 레포명) | `https://keirahrlee.github.io` |
| `woori202609191430.github.io` (계정명 ≠ 레포명) | `https://keirahrlee.github.io/woori202609191430.github.io/` |

> **현재 이 프로젝트의 배포 주소**: `https://keirahrlee.github.io/woori202609191430.github.io/`
>
> 레포 이름(`woori202609191430.github.io`)이 계정명(`keirahrlee`)과 달라 **프로젝트 사이트**로 동작합니다. 루트 URL(`https://keirahrlee.github.io/`)을 원하면 레포 이름을 `keirahrlee.github.io`로 변경해야 합니다 (계정당 1개 한도).

## 커스텀 도메인 설정

`*.github.io` 서브도메인은 GitHub 소유이므로 커스텀 도메인으로 등록할 수 없습니다.
별도 도메인(예: `woori-wedding.com`)을 구매한 경우:

1. 저장소 → Settings → Pages → Custom domain에 도메인 입력
2. 도메인 등록업체에서 DNS CNAME 레코드를 `keirahrlee.github.io`로 설정
3. GitHub Pages에서 자동으로 HTTPS 인증서 발급 (수 분 소요)
