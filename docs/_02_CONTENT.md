# 내용 변경 가이드 (이름·날짜·장소·연락처·계좌)

## 변경 순서 (권장)

1. `src/scripts/modules/config.js` — 핵심 설정값 (API 키 제외, 이름/날짜/장소)
2. `index.html` — 본문 전체 텍스트
3. `src/scripts/modules/share.js` — 카카오톡 공유 메시지

---

## Step 1. config.js 수정

**파일 경로**: `src/scripts/modules/config.js`

이 파일은 D-day 카운터, 카카오 지도, 갤러리 경로 등 JavaScript 기능에서 사용하는 핵심 데이터를 담고 있습니다.

```js
// 카카오 API 키 — 반드시 내 것으로 교체 (→ docs/_05_KAKAO_API.md 참고)
export const KAKAO_API_KEY = 'a37...';

// 예식장 정보 — 카카오 지도에 사용됨
export const VENUE = {
  name: '엘타워 7층 그랜드홀',         // ← 예식장 이름으로 교체
  address: '서울 서초구 강남대로 213', // ← 예식장 도로명 주소로 교체
  keyword: '엘타워',                  // ← 카카오맵 검색 키워드 (예식장 이름)
  latitude: 37.4827711,               // ← 위도 (카카오맵에서 장소 검색 후 확인)
  longitude: 127.034966,              // ← 경도
  kakaoPlaceId: '10660163',           // ← 카카오맵 장소 ID (아래 방법으로 확인)
};

// 결혼식 기본 정보 — D-day 카운터, 페이지 전반에 사용됨
export const WEDDING = {
  bride: '박하영',                     // ← 신부 이름
  groom: '천창범',                     // ← 신랑 이름
  date: '2026.05.23 (토) 11:30',      // ← 날짜·요일·시간 (표시용 문자열)
  dateObj: new Date('2026-05-23T11:30:00'), // ← D-day 계산용 날짜 (형식 유지)
  venue: '엘타워 7층 그랜드홀',        // ← 예식장 이름
  address: '서울 서초구 강남대로 213', // ← 주소
};
```

### 카카오맵 장소 ID 확인 방법
1. [카카오맵](https://map.kakao.com)에서 예식장 검색
2. 검색 결과 클릭 → URL에서 숫자 ID 확인  
   예: `https://place.map.kakao.com/10660163` → ID는 `10660163`

### 예식장 좌표 확인 방법 (구글맵 이용)
1. [구글맵](https://maps.google.com)에서 예식장 검색
2. 장소 클릭 → 지도 위 핀 위치 마우스 우클릭
3. 위도·경도 숫자가 바로 표시됨 (클릭하면 클립보드에 복사됨)  
   예: `37.284240, 127.039871` → latitude: `37.284240`, longitude: `127.039871`

---

## Step 2. index.html 수정

**파일 경로**: `index.html` (프로젝트 루트)

VSCode에서 `Cmd+H` (Mac) 또는 `Ctrl+H` (Windows)로 찾아 바꾸기를 사용하세요.

### 2-1. Head 태그 (SNS 미리보기 정보)

```html
<!-- 약 10번째 줄 근처 -->
<title>천창범♥박하영 결혼합니다</title>
<meta property="og:title" content="천창범♥박하영 결혼합니다" />
<meta property="og:description" content="우리의 특별한 날에 여러분을 초대합니다" />
```
→ 이름과 문구를 내 것으로 변경

### 2-2. Hero 섹션 (첫 화면)

```html
<!-- 신랑 이름 -->
<span class="groom-name">천창범</span>
<!-- 신부 이름 -->
<span class="bride-name">박하영</span>
<!-- 날짜 -->
<p class="wedding-date">2026. 05. 23</p>
<!-- 예식장 -->
<p class="wedding-venue">엘타워 7층 그랜드홀</p>
```

### 2-3. 초대장 섹션 (부모님 정보)

```html
<!-- 신랑 부모 -->
<span>천성욱</span> · <span>주은애</span>의 아들
<!-- 신부 부모 -->
<span>박용해</span> · <span>남규리</span>의 딸
```

### 2-4. 연락처 모달

`<!-- Contact Modal -->` 주석 아래 부분:
- 신랑측: 신랑, 신랑 부(아버지), 신랑 모(어머니) 이름과 전화번호
- 신부측: 신부, 신부 부(아버지), 신부 모(어머니) 이름과 전화번호

```html
<a href="tel:01063004508">010-6300-4508</a>  ← 전화번호 교체 (href와 텍스트 모두)
```

### 2-5. 마음 전하실 곳 모달 (계좌번호)

`<!-- Gift Modal -->` 주석 아래 부분:
- 은행명, 계좌번호, 예금주 이름 교체

```html
<span class="bank-name">국민</span>
<span class="account-number">825302-04-166651</span>
<span class="account-holder">천창범</span>
```

### 2-6. 지도 섹션

```html
<p class="venue-name">엘타워 7층 그랜드홀</p>
<p class="venue-address">서울 서초구 강남대로 213 엘타워</p>
<a href="tel:0255268600">02-526-8600</a>
```

### 2-7. 달력 섹션

결혼식 날짜가 `data-wedding-day` 속성이나 클래스로 강조 표시됩니다. `23`이 강조된 날짜이므로 날짜가 변경되면 달력 HTML도 함께 수정해야 합니다.

### 2-8. Footer

```html
<p>앞으로도 지금처럼,<br>서로를 아끼며 예쁘게 살겠습니다.</p>
<p>Made by bermmie and hayoung with love</p>
```
→ 문구와 이름 교체

---

## Step 3. share.js 수정

**파일 경로**: `src/scripts/modules/share.js`

카카오톡 공유 버튼을 눌렀을 때 전송되는 메시지를 수정합니다.

```js
title: '천창범♥박하영 결혼합니다',      // ← 공유 메시지 제목
description: '2026년 5월 23일 토요일...', // ← 공유 메시지 본문
```

---

## 변경 후 확인

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속 → 모든 섹션에서 이름·날짜·장소가 바뀌었는지 확인합니다.
