'use strict';
var gulp = require('gulp');
var config = require('../config');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
});
var _ = require('lodash');
var karmaConfig = require('../../test/config/karma.config.js');
var protractorConfig = require('../../test/config/protractor.config.js');
var karma = require('karma').server;
var webdriverStandalone = require('gulp-protractor').webdriver_standalone;
var webdriverUpdate = require('gulp-protractor').webdriver_update;
gulp.task('webdriver:update', webdriverUpdate);

gulp.task('tdd', function(cb) {
    karma.start(_.assign({}, karmaConfig, {
        singleRun: false,
        action: 'watch',
        browsers: ['PhantomJS']
    }), cb);
});

gulp.task('travis', ['build'], function(cb) {
    karma.start(_.assign({}, karmaConfig, {
        singleRun: true,
        browsers: ['PhantomJS']
    }), cb);
});

gulp.task('test:unit', function(cb) {
    karma.start(_.assign({}, karmaConfig, {
        singleRun: true
    }), cb);
});

gulp.task('test:e2e', ['webdriver:update'], function() {
    return gulp.src(protractorConfig.config.specs)
        .pipe($.protractor.protractor({
            configFile: 'test/config/protractor.config.js'
        }))
        .on('error', function(e) {
            throw e;
        });
});