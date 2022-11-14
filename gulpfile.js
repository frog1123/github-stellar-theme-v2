const gulp = require('gulp');
const minifyJs = require('gulp-minify');
const minifyCss = require('gulp-clean-css');
const minifyHtml = require('gulp-htmlmin');
const babel = require('gulp-babel');

const outputFolderName = 'final';

gulp.task('buildhtml', async () => {
  gulp
    .src(['dist/*.html'])
    .pipe(minifyHtml({ collapseWhitespace: true }))
    .pipe(gulp.dest(outputFolderName));
});

gulp.task('buildjs', async () => {
  gulp
    .src(['dist/*.js'])
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(minifyJs({ noSource: true, ext: { min: '.js' } }))
    .pipe(gulp.dest(outputFolderName));
});

gulp.task('buildcss', async () => {
  gulp
    .src(['dist/*.css'])
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(gulp.dest(outputFolderName));
});
