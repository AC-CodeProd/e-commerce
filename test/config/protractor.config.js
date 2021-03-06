'use strict';
var port = 3000;

exports.config = {
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    specs: [
        'test/e2e/**/*.scenario.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },
    seleniumArgs: ['-browserTimeout=60'],
    baseUrl: 'http://127.0.0.1:' + port
};