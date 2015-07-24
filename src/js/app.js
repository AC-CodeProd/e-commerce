(function() {
    'use strict';
    angular.module('commerce', [
        'ui.router',
        'commerce.CartDirective',
        'commerce.CartService',
        'commerce.Route',
        'commerce.Page',
        'commerce.Books',
        'commerce.Summary',
    ]);
})();