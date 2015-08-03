'use strict';
var gulp = require('gulp');
var config = require('../config');
gulp.task('watch', function(callback) {
    gulp.watch(config.index.src, ['browser-sync-reload']);
    gulp.watch(config.angular.partials.src, ['browser-sync-reload']);
    gulp.watch(config.angular.includes.src, ['browser-sync-reload']);
    gulp.watch(config.angular.templates.src, ['browser-sync-reload']);
    gulp.watch(config.stylesheet.src, ['sass', 'browser-sync-reload']);
    gulp.watch(config.scripts.src, ['scripts', 'browser-sync-reload']);
});