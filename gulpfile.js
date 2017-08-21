'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
  
      browserSync.init({
          server: "./"
      });
  
      gulp.watch("./sass/**/*.scss", ['sass']);
      gulp.watch("*.html").on('change', browserSync.reload);
  });
  
  gulp.task('sass', function() {
      return gulp.src("./sass/style.scss")
          .pipe(sass())
          .pipe(gulp.dest("./css"))
          .pipe(browserSync.stream());
  });
  
  gulp.task('default', ['serve']);