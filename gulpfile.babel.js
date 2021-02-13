import gulp from "gulp";
import gulp_pug from "gulp-pug";
import del from "del";
import connect from "gulp-connect";
import image from "gulp-image";
import sass from "gulp-sass";
import prefixer from "gulp-autoprefixer";
import miniCSS from "gulp-csso";
import bro from "gulp-bro";
import babelify from "babelify";
import ghPages from "gulp-gh-pages";

sass.compiler = require("node-sass");

// Object Stuff
const routes = {
  pug: {
    watch: "src/**/*.pug",
    src: "src/*.pug",
    dest: "build",
  },
  img: {
    src: "src/img/*",
    dest: "build/img",
  },
  scss: {
    watch: "src/scss/**/*.scss",
    src: "src/scss/style.scss",
    dest: "build/css",
  },
  js: {
    watch: "src/js/**/*.js",
    src: "src/js/main.js",
    dest: "build/js",
  },
};

// Tasks
const pug = () => {
  return gulp
    .src(routes.pug.src)
    .pipe(gulp_pug())
    .pipe(gulp.dest(routes.pug.dest))
    .pipe(connect.reload());
};

const clean = () => del(["build", ".publish"]);

const webserver = () => {
  connect.server({
    root: "build",
    livereload: true,
    port: 8000,
  });

  return new Promise(function (resolve, reject) {
    resolve();
  });
};

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
  gulp.watch(routes.scss.watch, styles);
  gulp.watch(routes.js.watch, js);
};

const img = () =>
  gulp.src(routes.img.src).pipe(image()).pipe(gulp.dest(routes.img.dest));

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(prefixer())
    .pipe(miniCSS())
    .pipe(gulp.dest(routes.scss.dest))
    .pipe(connect.reload());

const js = () =>
  gulp
    .src(routes.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({ presets: ["@babel/preset-env"] }),
          ["uglifyify", { global: true }],
        ],
      })
    )
    .pipe(gulp.dest(routes.js.dest))
    .pipe(connect.reload());

const ghDeploy = () => gulp.src("build/**/*").pipe(ghPages());

// Series
const prepare = gulp.series([clean, img]);
const assets = gulp.series([pug, styles, js]);
const onserver = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, onserver]);
export const deploy = gulp.series([build, ghDeploy, clean]);
