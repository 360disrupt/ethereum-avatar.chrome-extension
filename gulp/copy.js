'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('images', function () {
  return gulp.src(paths.src + '/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('misc', function () {
  return gulp.src(paths.src + '/**/*.html')
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('locales', function () {
  return gulp.src(paths.src + '/_locales/**/*')
    .pipe(gulp.dest(paths.dist + '/_locales/'));
});