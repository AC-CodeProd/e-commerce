'use strict';
var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('partials', function() {
    return gulp.src(config.angular.partials.src)
        .pipe($.changed(config.angular.partials.dest))
        .pipe(gulp.dest(config.angular.partials.dest))
        .pipe($.size({
            title: 'copy partials'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Partials complete'
        }));
});
gulp.task('includes', function() {
    return gulp.src(config.angular.includes.src)
        .pipe($.changed(config.angular.includes.dest))
        .pipe(gulp.dest(config.angular.includes.dest))
        .pipe($.size({
            title: 'copy includes'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Includes complete'
        }));
});
gulp.task('templates', function() {
    return gulp.src(config.angular.templates.src)
        .pipe($.changed(config.angular.templates.dest))
        .pipe(gulp.dest(config.angular.templates.dest))
        .pipe($.size({
            title: 'copy templates'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Templates complete'
        }));
});