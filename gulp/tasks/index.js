'use strict';
var gulp = require('gulp');
var config = require('../config');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('index-useref', function() {
    var assets = $.useref.assets();
    return gulp.src(config.index.src)
        .pipe($.plumber({
            errorHandler: $.notify.onError('Error: <%= error.message %>')
        }))
        .pipe(assets)
        .pipe($.if('*.js',
            $.uglify({
                mangle: false
            })
        ))
        .pipe($.if('*.css', $.minifyCss()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest(config.index.dest))
        .pipe($.notify({
            onLast: true,
            message: 'Build complete'
        }));
});