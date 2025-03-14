# GitHub 블로그

이 저장소는 [GitHub Pages](https://pages.github.com/)를 사용하여, Jekyll 기반의 개인 블로그를 호스팅하는 저장소입니다.

## 주요 특징

- GitHub Pages 호스팅
- Jekyll 정적 사이트 생성기 사용
- 사용자 정의 테마 적용 가능
- 마크다운으로 작성된 콘텐츠

## 로컬에서 실행하기

이 블로그를 로컬에서 실행하려면 Ruby와 Jekyll이 설치되어 있어야 합니다:

1. 저장소 클론:
   ```
   git clone https://github.com/Gorani77/Gorani77.github.io.git
   cd Gorani77.github.io
   ```

2. 의존성 설치:
   ```
   bundle install
   ```

3. 로컬 서버 실행:
   ```
   bundle exec jekyll serve
   ```

4. 브라우저에서 `http://localhost:4000`으로 접속

## 테마 변경하기

1. `_config.yml` 파일에서 `theme` 속성을 변경합니다.
2. 또는 커스텀 테마를 적용하려면 관련 파일을 다운로드하여 저장소에 추가합니다.

## 라이센스

이 프로젝트는 MIT 라이센스 하에 제공됩니다. 