'use strict';
var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

gulp.task('sass', function() {
    var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 32',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4',
  'bb >= 10'
];
    return gulp.src(config.stylesheet.src)
        .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
        .pipe($.sass())
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS), {
            cascade: true
        }).pipe($.pleeease({
            autoprefixer: true,
            mqpacker: true,
            sass: true,
            rem: false,
            minifier: false
        }))
        .pipe(gulp.dest(config.stylesheet.tmp))
        .pipe($.size({title: 'sass'}))
        .pipe($.notify({
            onLast: true,
            message: 'Sass complete'
        }));
});