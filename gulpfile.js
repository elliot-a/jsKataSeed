'use strict';

var gulp    = require('gulp');
var karma   = require('gulp-karma');

var testFiles = [
  'app/!(*spec).js',
  'app/*.spec.js'
];

gulp.task('test', function() {

  // Be sure to return the stream

  return gulp.src(testFiles)

    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }));

});

gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['test']);
});

gulp.task('default', ['watch'], function () {

});
