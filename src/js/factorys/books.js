(function() {
    'use strict';
    angular
        .module('commerce.BooksFactory')
        .factory('Books', Books);

    function Books($resource) {
        return $resource('http://henri-potier.xebia.fr/books/:isbns/:cmd', {

        }, {
            'get': {
                method: 'GET',
                isArray: true
            },
            'getCommercialOffers': {
                method: 'GET',
                params: {
                    cmd: "commercialOffers"
                }
            }
        });
    }
})();