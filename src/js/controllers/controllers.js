(function() {
    'use strict';
    angular.module('commerce.Page', []);
    angular.module('commerce.Books', ['commerce.BooksFactory','commerce.BooksDirective']);
    angular.module('commerce.Summary', ['commerce.SummaryDirective']);
})();