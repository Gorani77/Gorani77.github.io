/**
 * counter.js - 방문자 수와 페이지 조회수를 관리하는 JavaScript 파일
 * 작성자: Gorani77
 * 최종 수정일: 2024-03-15
 */

// 문서가 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 방문자 수와 페이지 조회수 업데이트
    updateVisitorCounter();
});

/**
 * 방문자 수와 페이지 조회수를 업데이트하는 함수
 * 실제 구현에서는 서버 API나 분석 서비스를 사용할 수 있음
 */
function updateVisitorCounter() {
    // 방문자 수와 페이지 조회수를 표시할 요소 가져오기
    const visitorCountElement = document.getElementById('visitor-count');
    const pageViewsElement = document.getElementById('page-views');
    
    // 요소가 없으면 함수 종료
    if (!visitorCountElement || !pageViewsElement) return;
    
    // 로컬 스토리지에서 방문자 수와 페이지 조회수 가져오기
    // 실제 구현에서는 서버에서 데이터를 가져와야 함
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    let pageViews = localStorage.getItem('pageViews') || 0;
    
    // 문자열을 숫자로 변환
    visitorCount = parseInt(visitorCount, 10);
    pageViews = parseInt(pageViews, 10);
    
    // 새로운 방문자인지 확인 (세션 스토리지 사용)
    const isNewVisitor = !sessionStorage.getItem('visited');
    
    // 새로운 방문자이면 방문자 수 증가
    if (isNewVisitor) {
        visitorCount++;
        localStorage.setItem('visitorCount', visitorCount);
        sessionStorage.setItem('visited', 'true');
    }
    
    // 페이지 조회수 증가
    pageViews++;
    localStorage.setItem('pageViews', pageViews);
    
    // 방문자 수와 페이지 조회수 표시
    visitorCountElement.textContent = visitorCount;
    pageViewsElement.textContent = pageViews;
}

/**
 * 숫자를 천 단위로 구분하여 표시하는 함수
 * @param {number} num - 포맷팅할 숫자
 * @returns {string} - 포맷팅된 문자열
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 