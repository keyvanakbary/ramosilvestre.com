'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var strip = require('gulp-strip-comments');
var uglify = require('gulp-uglify');

gulp.task('bundleScripts', function() {
  return gulp.src([
    './src/_javascript/vendor/smoothScroll.js',
    './src/_javascript/vendor/wow.js',
    './src/_javascript/vendor/instafetch.js',
    './src/_javascript/vendor/owlcarousel.js',
    './src/_javascript/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(strip())
  .pipe(gulp.dest('./src/assets/js'));
});

gulp.task('minifyBundle', ['bundleScripts'], function() {
  return gulp.src('./src/assets/js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('./src/assets/js'));
});

gulp.task('build', ['minifyBundle']);

gulp.task('watch', function() {
  gulp.watch('./src/_javascript/**/*.js', ['minifyBundle']);
});

gulp.task('default', ['build', 'watch']);
