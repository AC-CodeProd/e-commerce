'use strict';
var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});

gulp.task('scripts', function() {
    return gulp.src(config.scripts.src)
        .pipe($.changed(config.scripts.tmp))
        .pipe($.plumber({
            errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe($.ngAnnotate())
        .pipe($.jshint())
        .pipe(gulp.dest(config.scripts.tmp))
        .pipe($.size({
            title: 'scripts'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Scripts complete'
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
});