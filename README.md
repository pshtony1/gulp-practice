# Gulp Practice!

`Task Runner` 가, `Gulp` 가 도대체 뭐길래 궁금해서 찍먹해보는 공부

---

### 1. 내가 느낀 Gulp

- 일련의 `Task` 들을 묶어(Series, Parallel) 더 큰 `Task` 를 커스터마이징 할 수 있는 도구.
- `Pug` / `Sass(Scss)` 컴파일, `Browserify`, `Babel`, 로컬 서버 생성 등을 하나의 `Task` 로 지정할 수 있다.
- 이렇게 `Task` 를 만들 때 필요한 도구들을 플러그인으로 가져올 수 있다(종류가 엄청나게 많다).
- `Webpack` 에 비해 너무 편하다.


### 2. Gulp로 뭐해봤어?

- [간단하게 이걸 만들어 배포해봤다.](https://pshtony1.github.io/gulp-practice/)

- 스택
  - `Gulp.js`
  - `Node.js` + `yarn`
  - `git`
  - `Pug`
  - `Sass(Scss)`
  - `ES6+`
  - `Babel`
  
- 사용한 `Task` 들
  - `Pug` > `HTML` 컴파일 ( [gulp-pug](https://www.npmjs.com/package/gulp-pug) )
  - `Sass(Scss)` > `CSS` 컴파일 ( [gulp-sass](https://www.npmjs.com/package/gulp-sass) )
  - `CSS Autoprefix` ( [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) )
  - `CSS` 최소화/최적화 ( [gulp-csso](https://www.npmjs.com/package/gulp-csso) )
  - `Browserify`/JS 난독화 ( [gulp-bro](https://www.npmjs.com/package/gulp-bro) )
  - `Babel` 적용 ( [Babelify](https://www.npmjs.com/package/babelify) )
  - 이미지 최적화 ( [gulp-image](https://www.npmjs.com/package/gulp-image) )
  - 디렉토리 내 파일/폴더 제거 ( [del](https://www.npmjs.com/package/del) )
  - Webserver 관련 ( [gulp-connect](https://www.npmjs.com/package/gulp-connect) )
  - 깃허브 배포 ( [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) )
