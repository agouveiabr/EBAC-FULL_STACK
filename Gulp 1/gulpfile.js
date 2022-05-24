const gulp = require("gulp");
const concat = require("gulp-concat");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const stripJs = require("gulp-strip-comments");
const stripCss = require("gulp-strip-css-comments");

function tarefasIMG() {
  return gulp
    .src("./assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

function tarefasCSS(cb) {
  return gulp
    .src("./dist/css/styles.css")
    .pipe(stripCss()) // remove comentários
    .pipe(concat("styles.css")) // mescla arquivos
    .pipe(cssmin()) // minifica css
    .pipe(rename({ suffix: ".min" })) // styles.min.css
    .pipe(gulp.dest("./dist/css")); // cria arquivo em novo diretório
}

function tarefasJS() {
  return gulp
    .src([
      "./node_modules/jquery/dist/jquery.js",
      "./node_modules/bootstrap/dist/js/bootstrap.js",
      "./vendor/owl/js/owl.js",
      "./vendor/jquery-ui/jquery-ui.js",
      "./js/custom.js",
    ])
    .pipe(stripJs()) // remove comentários
    .pipe(concat("scripts.js")) // mescla arquivos
    .pipe(uglify()) // minifica js
    .pipe(rename({ suffix: ".min" })) // scripts.min.js
    .pipe(gulp.dest("./dist/js")); // cria arquivo em novo diretório
}

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.imagens = tarefasIMG;
