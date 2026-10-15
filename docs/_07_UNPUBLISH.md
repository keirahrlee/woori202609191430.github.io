# 청첩장 내리기 (사이트 비공개 처리)

결혼식이 끝난 뒤 등, 더 이상 사람들이 청첩장 주소로 접속할 수 없게 하는 방법입니다.

---

## 어디서 설정하나?

| 위치 | 해야 하나? | 이유 |
|------|-----------|------|
| **GitHub 저장소 Settings** | ✅ 필수 | 사이트는 GitHub Pages가 게시하므로, 여기서 게시를 중단해야 주소가 닫힘 |
| GitHub Actions | ✅ 권장 | 그대로 두면 `main`에 push할 때마다 사이트가 다시 배포됨 |
| 카카오 개발자 콘솔 | ❌ 불필요 | 지도·공유용 API 키만 관리. 여기서 바꿔도 페이지 접속은 막히지 않음 |
| 이 레포의 코드 | ❌ 불필요 | 코드를 고쳐도 사이트가 내려가지 않음 (안내 페이지를 띄우고 싶을 때만 수정) |

---

## 방법 1 (추천): GitHub Pages 게시 중단

1. GitHub 저장소 → **Settings** → 왼쪽 메뉴 **Pages**
2. 상단 "Your site is live at …" 옆 **⋯ 메뉴 → Unpublish site**
3. 몇 분 안에 주소 접속 시 404가 표시됨

코드·사진은 저장소에 그대로 남습니다.

### 재배포 막기

Unpublish 후에도 `main`에 push하면 `.github/workflows/deploy.yml`이 다시 배포할 수 있습니다.

- **Actions** 탭 → 왼쪽 "Deploy…" 워크플로 선택 → 오른쪽 **⋯ → Disable workflow**

### 터미널에서 하기 (선택)

[GitHub CLI](https://cli.github.com/)(`gh`)가 설치·로그인되어 있다면:

```bash
# Pages 게시 중단
gh api -X DELETE repos/<계정명>/<레포명>/pages

# 배포 워크플로 비활성화
gh workflow disable deploy.yml
```

---

## 방법 2: 저장소를 비공개(Private)로 전환

1. GitHub 저장소 → **Settings** → **General** → 맨 아래 **Danger Zone**
2. **Change visibility → Make private**

무료(Free) 플랜에서는 비공개 저장소에 GitHub Pages를 쓸 수 없어서 사이트도 함께 내려갑니다.

> 저장소가 공개 상태면 `index.html`에 적힌 **계좌번호·연락처**를 누구나 GitHub에서 볼 수 있습니다.  
> 이것까지 막으려면 방법 1과 함께 이 방법을 쓰는 것이 확실합니다.

---

## 이미 보낸 카카오톡 링크 미리보기

사이트를 내려도 카카오톡 채팅방의 링크 미리보기(제목·썸네일)는 카카오 서버에 캐시되어 한동안 보일 수 있습니다. 링크를 눌러도 페이지는 열리지 않습니다.

미리보기까지 지우려면:

1. [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing) 접속
2. 청첩장 주소 입력 → **캐시 초기화**

---

## (선택) 404 대신 안내 페이지 띄우기

"청첩장 게시가 종료되었습니다" 같은 안내를 보여주고 싶다면, 사이트를 내리는 대신 `index.html`을 안내 문구만 있는 페이지로 바꿔서 push합니다.  
이 경우 Pages·워크플로는 그대로 켜 두어야 합니다.

---

## 다시 공개하기

- 방법 1: Actions 탭에서 워크플로 **Enable** → Settings → Pages → Source를 **GitHub Actions**로 설정 → `main`에 push (또는 Actions에서 워크플로 수동 실행)
- 방법 2: 저장소를 다시 **Public**으로 전환 후 위와 같이 Pages 재설정

자세한 배포 설정: [_06_DEPLOY.md](_06_DEPLOY.md)
