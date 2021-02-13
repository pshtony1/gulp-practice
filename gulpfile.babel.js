import gulp from "gulp";
import gulp_pug from "gulp-pug";
import del from "del";
import connect from "gulp-connect";
import image from "gulp-image";

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
};

// Tasks
const pug = () => {
  return gulp
    .src(routes.pug.src)
    .pipe(gulp_pug())
    .pipe(gulp.dest(routes.pug.dest))
    .pipe(connect.reload());
};

const cleanBuild = () => del(["build"]);

const webserver = () => {
  connect.server({
    root: "build",
    livereload: true,
    port: 8001,
  });

  return new Promise(function (resolve, reject) {
    resolve();
  });
};

const watch = () => {
  gulp.watch(routes.pug.watch, pug);
};

const img = () =>
  gulp.src(routes.img.src).pipe(image()).pipe(gulp.dest(routes.img.dest));

// Series
const prepare = gulp.series([cleanBuild, img]);
const assets = gulp.series([pug]);
const onserver = gulp.parallel([webserver, watch]);

export const dev = gulp.series([prepare, assets, onserver]);
