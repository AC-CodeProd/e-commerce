(function() {
    'use strict';

    angular
        .module('commerce.BooksDirective')
        .directive('books', BooksDirective);

    function BooksDirective(Cart) {
        var directive = {
            link: link,
            scope: true,
            restrict: 'AEC'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.add = function(value) {
                Cart.add(value);
            }
        }
    }
})();