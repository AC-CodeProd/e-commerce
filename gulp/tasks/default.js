'use strict';
var gulp = require('gulp');
var runSequence = require('run-sequence');
gulp.task('default', function(callback) {
    runSequence(
        'clean',
        'font-awesome',
        'assets-fonts',
        'assets-images',
        'scripts',
        'sass',
        'browserSync',
        'watch',
        callback
    );
});
gulp.task('build', function(callback) {
    runSequence(
        'clean',
        'scripts',
        'sass',
        'font-awesome',
        'assets-fonts',
        'assets-images',
        'assets-copy',
        'includes',
        'templates',
        'partials',
        'index-useref',
        callback
    );
});