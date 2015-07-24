(function() {
    'use strict';
    angular
        .module('commerce.CartService')
        .service('Cart', CartService);

    function CartService($q, Books) {
        var books = [];

        function add(value) {
            var clone = _.clone(value);
            clone.uuid = generateUUID();
            books.push(clone);
        }

        function remove(isbn) {
            var remove = _.where(books, {
                isbn: isbn
            });
            books = _.difference(books, remove);
        }

        function plus(value) {
            add(value);
        }

        function minus(uuid) {
            books = _.without(books, _.findWhere(books, {
                uuid: uuid
            }));
        }

        function getTotalCount() {
            return _.size(books);
        }

        function getCart() {
            return _.groupBy(books, 'isbn');
        }

        function getIsbns() {
            var isbns = _.pluck(_.flatten(books), "isbn");
            return isbns;
        }

        function getTotalPrice() {
            var prices = _.pluck(_.flatten(books), "price");
            var total = 0;
            angular.forEach(prices, function(value, key) {
                total = total + value;
            });
            return total;
        }

        function whichIsGoodOffer(data) {
            var deferred = $q.defer();
            var offers = [];
            Books.getCommercialOffers({
                isbns: getIsbns()
            }).$promise.then(function(data) {
                angular.forEach(data.offers, function(offer, key) {
                    switch (offer.type) {
                        case 'percentage':
                            var reduction = (getTotalPrice() * parseInt(offer.value) / 100);
                            var currentOffers = getTotalPrice() - reduction;
                            offers.push(currentOffers);
                            break;
                        case 'minus':
                            var currentOffers = getTotalPrice() - offer.value;
                            offers.push(currentOffers);
                            break;
                        case 'slice':
                            var reduction = 0;
                            var slice = Math.floor(getTotalPrice() / offer.sliceValue);
                            reduction = offer.value * slice;
                            var currentOffers = getTotalPrice() - reduction;
                            offers.push(currentOffers);
                            break;
                    }
                });

                deferred.resolve({ offer: _.min(offers) });
            });
            return deferred.promise;
        }

        function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        return {
            add: add,
            remove: remove,
            plus: plus,
            minus: minus,
            getCart: getCart,
            getTotalCount: getTotalCount,
            getIsbns: getIsbns,
            getTotalPrice: getTotalPrice,
            whichIsGoodOffer: whichIsGoodOffer
        };
    }
})();