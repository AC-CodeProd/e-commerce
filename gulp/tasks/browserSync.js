'use strict';
var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config').browserSync;
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('browserSync', function() {
    browserSync(config);
});
gulp.task('browser-sync-reload', function() {
    browserSync.reload();
});