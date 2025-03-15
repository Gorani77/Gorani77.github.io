/**
 * posts.js - 블로그 포스트를 로드하고 표시하는 JavaScript 파일
 * 작성자: Gorani77
 * 최종 수정일: 2024-03-15
 */

// 문서가 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 포스트 컨테이너 요소 가져오기
    const postsContainer = document.getElementById('posts-container');
    
    // 포스트 컨테이너가 존재하면 포스트 로드
    if (postsContainer) {
        loadPosts(postsContainer);
    }
});

/**
 * 블로그 포스트를 로드하는 함수
 * @param {HTMLElement} container - 포스트를 표시할 컨테이너 요소
 */
function loadPosts(container) {
    // 로딩 메시지 표시
    container.innerHTML = '<div class="loading">게시물을 불러오는 중...</div>';
    
    // 포스트 데이터 (실제로는 서버나 JSON 파일에서 가져올 수 있음)
    // 여기서는 예시 데이터를 직접 정의
    const posts = [
        {
            id: 1,
            title: 'AI 면접 시뮬레이션 소개',
            date: '2024-03-15',
            author: 'Gorani77',
            categories: ['개발일지', 'AI면접시뮬레이션'],
            tags: ['AI', '면접', '프로젝트'],
            excerpt: 'AI 기술을 활용하여 실제 면접 상황을 시뮬레이션하는 프로젝트에 대한 소개입니다.',
            content: '전체 내용은 포스트 페이지에서 확인할 수 있습니다.',
            url: 'posts/개발일지/AI면접시뮬레이션/ai-면접-시뮬레이션-소개.html'
        }
        // 추가 포스트는 여기에 추가할 수 있음
    ];
    
    // 로딩 지연을 시뮬레이션 (실제 애플리케이션에서는 필요 없음)
    setTimeout(() => {
        // 포스트가 없으면 메시지 표시
        if (!posts || posts.length === 0) {
            container.innerHTML = '<div class="no-posts">게시물이 없습니다.</div>';
            return;
        }
        
        // 컨테이너 내용 초기화
        container.innerHTML = '';
        
        // 각 포스트에 대해 HTML 생성
        posts.forEach(post => {
            // 포스트 카드 요소 생성
            const postCard = document.createElement('article');
            postCard.className = 'post-card';
            
            // 카테고리 HTML 생성
            const categoriesHTML = post.categories.map(category => 
                `<a href="categories.html?category=${encodeURIComponent(category)}">${category}</a>`
            ).join(' > ');
            
            // 태그 HTML 생성
            const tagsHTML = post.tags.map(tag => 
                `<span>${tag}</span>`
            ).join('');
            
            // 포스트 카드 내용 설정
            postCard.innerHTML = `
                <div class="post-card-content">
                    <h3>${post.title}</h3>
                    <div class="post-card-meta">
                        <span>${post.date} | ${post.author}</span>
                        <span>${categoriesHTML}</span>
                    </div>
                    <div class="post-card-excerpt">
                        ${post.excerpt}
                    </div>
                    <div class="post-card-tags">
                        ${tagsHTML}
                    </div>
                    <a href="${post.url}" class="post-card-link">자세히 보기</a>
                </div>
            `;
            
            // 포스트 카드를 컨테이너에 추가
            container.appendChild(postCard);
        });
    }, 500); // 500ms 지연 (로딩 효과를 위한 것)
}

/**
 * URL에서 쿼리 파라미터를 가져오는 함수
 * @param {string} name - 가져올 파라미터 이름
 * @returns {string|null} - 파라미터 값 또는 null
 */
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
} 