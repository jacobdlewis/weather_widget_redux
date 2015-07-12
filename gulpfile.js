var gulp = require('gulp'),
    del  = require('del'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function () {
  del(['.tmp', 'public/*.html', 'public/styles/*.css']);
});

gulp.task('sass', function() {
  gulp
    .src('app/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('jade', function() {
  gulp
    .src('app/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('moveJs', function() {
  gulp
    .src('app/js/*.js')
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['clean', 'sass', 'jade', 'moveJs']);