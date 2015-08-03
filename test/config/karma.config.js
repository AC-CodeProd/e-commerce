'use strict';
var src = 'src';
var bowerComponentsPath = src + '/bower_components';
var baseDirTest = 'test';

module.exports = {
    files: [
        bowerComponentsPath + '/angular/angular.js',
        bowerComponentsPath + '/angular-mocks/angular-mocks.js',
        bowerComponentsPath + '/angular-i18n/angular-locale_fr-fr.js',
        bowerComponentsPath + '/angular-ui-router/release/angular-ui-router.js',
        bowerComponentsPath + '/angular-resource/angular-resource.min.js',
        src + '/js/directives/directives.js',
        src + '/js/directives/books.js',
        src + '/js/directives/cart.js',
        src + '/js/directives/summary.js',
        src + '/js/services/services.js',
        src + '/js/services/cart.js',
        src + '/js/factorys/factorys.js',
        src + '/js/factorys/books.js',
        src + '/js/routes/routes.js',
        src + '/js/routes/routes.config.js',
        src + '/js/controllers/controllers.js',
        src + '/js/controllers/page.js',
        src + '/js/controllers/books.js',
        src + '/js/controllers/summary.js',
        src + '/js/app.js',
        baseDirTest + '/unit/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    plugins: [
        'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage',
        'karma-html-reporter',
        'karma-mocha-reporter'
    ],
    preprocessors: {
       '**/src/js/**/*.js': 'coverage'
    },
    reporters: ['mocha', 'html', 'coverage'],
    coverageReporter: {
        type: 'html',
        dir: baseDirTest + '/unit-results/coverage',
        file: 'coverage.html'
    },
    htmlReporter: {
        outputDir: baseDirTest + '/unit-results/html'
    },
    logLevel: 'info',
    urlRoot: '/__test/',
    browsers: ['PhantomJS']
};