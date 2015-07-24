'use strict';
var baseDir = './';
var destPath = './build';
var srcPath = './src';
var tempPath = srcPath + '/.tmp';
var assetsPath = '/assets';
var includesPath = '/includes';
var templatesPath = '/templates';
var partialsPath = '/partials';

var bowerComponentsPath = srcPath + '/bower_components';
var modRewrite = require('connect-modrewrite');

//external
var fontsAwesomePath = bowerComponentsPath + '/font-awesome/fonts';

module.exports = {
    browserSync: {
        server: {
            baseDir: srcPath,
            middleware: [
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    },
    index: {
        src: [srcPath + '/index.html', srcPath + '/.htaccess'],
        dest: destPath
    },
    angular: {
        includes: {
            src: srcPath + includesPath + '/**/*.html',
            dest: destPath + includesPath
        },
        templates: {
            src: srcPath + templatesPath + '/**/*.html',
            dest: destPath + templatesPath
        },
        partials: {
            src: srcPath + partialsPath + '/**/*.html',
            dest: destPath + partialsPath
        }
    },
    scripts: {
        src: [srcPath + '/js/**/*.js'],
        dest: destPath + '/js',
        tmp: tempPath + '/js'
    },
    stylesheet: {
        src: [srcPath + '/scss/**/*.{sass,scss}'],
        dest: destPath + '/css',
        tmp: tempPath + '/css'
    },
    assets: {
        src: tempPath + assetsPath+ '/**',
        dest: destPath + assetsPath,
        images: {
            src: srcPath + assetsPath + '/images/**',
            dest: destPath + assetsPath + '/images',
            tmp: tempPath + assetsPath + '/images'
        },
        fonts: {
            src: srcPath + assetsPath + '/fonts/**',
            dest: destPath + assetsPath + '/fonts',
            tmp: tempPath + assetsPath + '/fonts'
        },
        fontsAwesome: {
            src: fontsAwesomePath + '/**',
            dest: destPath + assetsPath + '/fonts/font-awesome',
            tmp: tempPath + assetsPath + '/fonts/font-awesome'
        }
    }
};