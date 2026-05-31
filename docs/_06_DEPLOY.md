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

### Step 3. 코드 업로드 (최초)

터미널에서 프로젝트 폴더로 이동 후:

```bash
git remote add origin https://github.com/내아이디/내아이디.github.io.git
git branch -M main
git push -u origin main
```

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
| `hyeri.github.io` | `https://hyeri.github.io` |
| `wedding` (별도 저장소) | `https://hyeri.github.io/wedding` |

> 이 프로젝트는 사용자명과 같은 이름의 저장소(`내아이디.github.io`)를 사용하도록 설정되어 있어, 루트 URL(`https://내아이디.github.io`)로 접속됩니다.
