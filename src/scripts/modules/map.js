/**
 * Map functionality
 */

import { VENUE } from './config.js';

/**
 * Kakao Maps API 가용성 확인
 * 스크립트는 </body> 직전에 동기 로드 — main.js 실행 시점에 window.kakao.maps 보장
 */
export function loadKakaoMapScript() {
  return new Promise((resolve, reject) => {
    if (window.kakao?.maps) {
      console.log('✅ Kakao Maps API ready');
      resolve();
      return;
    }
    reject(new Error(
      'window.kakao.maps 없음 — 카카오 개발자 콘솔에서 도메인 등록 확인: http://localhost:3000'
    ));
  });
}

/**
 * Initialize Kakao Map
 */
export function initKakaoMap() {
  const { kakao } = window;
  if (!kakao?.maps) {
    console.error('⚠️ Kakao Maps not available');
    return;
  }

  const container = document.getElementById('kakao-map');
  if (!container) return;

  const map = new kakao.maps.Map(container, {
    center: new kakao.maps.LatLng(37.5665, 126.9780),
    level: 4, //(1=최대 확대, 14=최대 축소)
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
  });

  map.setZoomable(true);

  // Search by keyword
  const ps = new kakao.maps.services.Places();
  ps.keywordSearch(VENUE.keyword, (data, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const place = data[0];
      const coords = new kakao.maps.LatLng(place.y, place.x);

      map.setCenter(coords);
      new kakao.maps.Marker({ map, position: coords });

      console.log('✅ Map initialized:', place.place_name);
    } else {
      fallbackAddressSearch(map);
    }
  });

}

/**
 * Fallback: Address search
 */
function fallbackAddressSearch(map) {
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();

  geocoder.addressSearch(VENUE.address, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      map.setCenter(coords);
      new kakao.maps.Marker({ map, position: coords });
      console.log('✅ Fallback address search successful');
    } else {
      console.error('❌ Both searches failed');
    }
  });
}

/**
 * Try to open mobile app with web fallback
 */
function tryOpenApp(scheme, webUrl) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = scheme;
    setTimeout(() => {
      if (!document.hidden && !document.webkitHidden) {
        window.location.href = webUrl;
      }
    }, 1500);
  } else {
    window.open(webUrl, '_blank');
  }
}

/**
 * Navigation app openers
 */
export function openKakaoMap() {
  const url = `https://map.kakao.com/?itemId=${VENUE.kakaoPlaceId}`;
  window.open(url, '_blank');
}

export function openNaverMap() {
  const scheme = `nmap://place?lat=${VENUE.latitude}&lng=${VENUE.longitude}&name=${encodeURIComponent(VENUE.name)}&appname=com.wedding.invitation`;
  const webUrl = `https://map.naver.com/v5/search/${encodeURIComponent(VENUE.address)}`;
  tryOpenApp(scheme, webUrl);
}

export function openTmap() {
  const scheme = `tmap://route?goalname=${encodeURIComponent(VENUE.name)}&goalx=${VENUE.longitude}&goaly=${VENUE.latitude}`;
  const webUrl = `https://map.naver.com/v5/search/${encodeURIComponent(VENUE.address)}`;
  tryOpenApp(scheme, webUrl);
}
