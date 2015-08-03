(function() {
    'use strict';
    angular
        .module('commerce.Books')
        .controller('BooksCtrl', BooksCtrl);

    function BooksCtrl($rootScope, $scope, Books, Cart) {
        var booksC = this;
        Books.get().$promise.then(function(data) {
            booksC.getBooks = function() {
                return data;
            }
        });
    }
})();