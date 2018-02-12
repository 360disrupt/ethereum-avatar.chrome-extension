
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: 'tmp'
};

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function(){
  gulp.start('watch');
});

gulp.task('clean', $.del.bind(null, 'dist'));

gulp.task('watch', ['scripts', 'misc', 'json', 'images', 'locales'] ,function () {
  gulp.watch([
    'src/{,*/}*.coffee',
    'src/{,*/}*.js',
    'src/{,*/}*.html',
    'src/{,*/}*.json'
    ], ['scripts', 'misc', 'json', 'locales']);
});

gulp.task('build', ['scripts', 'misc', 'json', 'images', 'locales'] ,function () {
  return
});
