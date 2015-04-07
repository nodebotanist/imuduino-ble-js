var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('hint', function() {
  return gulp.src('*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscs', function() {
  return gulp.src('*.js')
    .pipe(jscs({
      configPath: './.jscsrc'
    }));
});

gulp.task('watch', function() {
  gulp.watch('*.js', ['hint', 'jscs']);
});

gulp.task('default', ['hint', 'jscs', 'watch']);

