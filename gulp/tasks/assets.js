'use strict';
var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
gulp.task('font-awesome', function() {
    return gulp.src(config.assets.fontsAwesome.src)
        .pipe($.changed(config.assets.fontsAwesome.tmp))
        .pipe(gulp.dest(config.assets.fontsAwesome.tmp))
        .pipe($.size({
            title: 'copy font-awesome'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Font-awesome complete'
        }));
});
gulp.task('assets-fonts', function() {
    return gulp.src(config.assets.fonts.src)
        .pipe($.changed(config.assets.fonts.tmp))
        .pipe(gulp.dest(config.assets.fonts.tmp))
        .pipe($.size({
            title: 'copy assets fonts'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Assets fonts complete'
        }));
});
gulp.task('assets-images', function() {
    return gulp.src(config.assets.images.src)
        .pipe($.changed(config.assets.images.tmp))
        .pipe(gulp.dest(config.assets.images.tmp))
        .pipe($.size({
            title: 'copy images'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Images complete'
        }));
});
gulp.task('assets-copy', function() {
    return gulp.src(config.assets.src)
        .pipe($.changed(config.assets.dest))
        .pipe(gulp.dest(config.assets.dest))
        .pipe($.size({
            title: 'copy assets'
        }))
        .pipe($.notify({
            onLast: true,
            message: 'Assets complete'
        }));
});