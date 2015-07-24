(function() {
    'use strict';
    angular.module('commerce.BooksDirective', ['ng','commerce.CartService']);
    angular.module('commerce.CartDirective', ['ng','commerce.CartService']);
    angular.module('commerce.SummaryDirective', ['ng','commerce.CartService']);
})();