var gulp = require('gulp'),
    jshintStylish = require('jshint-stylish'),
    gutil = require('gutil'),
    map = require('map-stream');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


gulp.task('scripts', function () {
  gulp.src('src/{,*/}*.js')
    //.pipe($.jshint())
    //.pipe($.jshint.reporter(jshintStylish))
    //.pipe($.uglify())
    .pipe(gulp.dest('dist'));

  return gulp.src('src/{,*/}*.coffee')
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter())
    .pipe($.coffee()).on('error', gutil.log)
    .on('error', function handleError(err) {
      console.error(err.toString());
      this.emit('end');
    })
    // .pipe($.jshint())
    // .pipe($.jshint.reporter(jshintStylish))
    // .pipe($.uglify())
    .pipe(gulp.dest('dist'));
});