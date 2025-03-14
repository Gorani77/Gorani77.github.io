source "https://rubygems.org"

# Jekyll 설치
gem "jekyll", "~> 4.3.2"

# 테마 설정 - chirpy 테마 사용
gem "jekyll-theme-chirpy", "~> 6.3.1"

# 필수 플러그인
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
  gem "jekyll-seo-tag"
  gem "jekyll-archives"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Windows와 JRuby는 일반적으로 tzinfo-data 젬이 필요합니다
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Windows에서 성능 개선을 위한 젬
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# 최신 Ruby 2.4+ 환경에서의 이벤트 처리
gem "webrick", "~> 1.7" 