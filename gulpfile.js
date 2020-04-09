const gulp = require("gulp");
const sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");
const browsersync = require("browser-sync").create();

gulp.task("sass", () => {
  return gulp
    .src("gulp/scss/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest("html/css/"))
    .pipe(browsersync.stream());
});

gulp.task("pug", () => {
  return gulp
    .src("gulp/pug/**/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("html/"));
});

gulp.task("default", () => {
  gulp.watch("gulp/pug/**/*.pug", gulp.series("pug")),
    gulp.watch("gulp/scss/**/*.scss", gulp.series("sass")),
    gulp.watch("html/**/*.html").on("change", browsersync.reload);
  browsersync.init({
    server: {
      baseDir: "./html"
    }
  });
});
