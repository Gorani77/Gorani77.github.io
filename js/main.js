/**
 * main.js - 블로그의 기본 기능을 담당하는 JavaScript 파일
 * 작성자: Gorani77
 * 최종 수정일: 2024-03-15
 */

// 문서가 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('블로그가 로드되었습니다.');
    
    // 현재 페이지 URL을 가져와서 네비게이션 메뉴의 활성화 상태 설정
    setActiveNavItem();
    
    // 카테고리 목록 로드
    loadCategories();
    
    // 태그 클라우드 로드
    loadTags();
});

/**
 * 현재 페이지에 해당하는 네비게이션 메뉴 항목을 활성화하는 함수
 */
function setActiveNavItem() {
    // 현재 페이지의 경로명 가져오기
    const currentPath = window.location.pathname;
    
    // 모든 네비게이션 링크 가져오기
    const navLinks = document.querySelectorAll('nav a');
    
    // 각 링크를 순회하면서 현재 페이지와 일치하는지 확인
    navLinks.forEach(link => {
        // 링크의 href 속성에서 경로 추출
        const linkPath = new URL(link.href).pathname;
        
        // 현재 경로와 링크 경로가 일치하면 active 클래스 추가
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * 카테고리 목록을 로드하는 함수
 */
function loadCategories() {
    // 카테고리 데이터 (실제로는 서버나 JSON 파일에서 가져올 수 있음)
    const categories = [
        { name: '개발일지', count: 1, url: 'categories.html?category=개발일지' },
        { name: 'AI면접시뮬레이션', count: 1, url: 'categories.html?category=AI면접시뮬레이션' }
    ];
    
    // 카테고리 목록을 표시할 요소 가져오기
    const categoriesList = document.getElementById('categories-list');
    
    // 카테고리가 없거나 요소가 없으면 함수 종료
    if (!categories || !categoriesList) return;
    
    // 각 카테고리에 대해 HTML 생성
    categories.forEach(category => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${category.url}">
                ${category.name} <span class="count">(${category.count})</span>
            </a>
        `;
        categoriesList.appendChild(li);
    });
}

/**
 * 태그 클라우드를 로드하는 함수
 */
function loadTags() {
    // 태그 데이터 (실제로는 서버나 JSON 파일에서 가져올 수 있음)
    const tags = [
        { name: 'AI', count: 1, url: 'tags.html?tag=AI' },
        { name: '면접', count: 1, url: 'tags.html?tag=면접' },
        { name: '프로젝트', count: 1, url: 'tags.html?tag=프로젝트' }
    ];
    
    // 태그 클라우드를 표시할 요소 가져오기
    const tagsCloud = document.getElementById('tags-cloud');
    
    // 태그가 없거나 요소가 없으면 함수 종료
    if (!tags || !tagsCloud) return;
    
    // 각 태그에 대해 HTML 생성
    tags.forEach(tag => {
        const tagElement = document.createElement('a');
        tagElement.href = tag.url;
        tagElement.className = 'tag-item';
        tagElement.textContent = `${tag.name} (${tag.count})`;
        tagsCloud.appendChild(tagElement);
    });
} 