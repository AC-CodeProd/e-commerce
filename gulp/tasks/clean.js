'use strict';
var gulp = require('gulp');
var del = require('del');
gulp.task('clean', function(cb) {
    return del(['build', 'src/.tmp'], cb);
});