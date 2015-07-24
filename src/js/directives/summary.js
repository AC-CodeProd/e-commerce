(function() {
    'use strict';
    angular
        .module('commerce.SummaryDirective')
        .directive('summary', SummaryDirective);

    function SummaryDirective(Cart) {
        var directive = {
            link: link,
            scope: true,
            restrict: 'AEC'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch(Cart.getTotalCount, function(newValue, oldValue, scope) {
                scope.cart = Cart.getCart();
                scope.totalPrice = Cart.getTotalPrice();
                scope.count = Cart.getTotalCount();
                Cart.whichIsGoodOffer().then(function(data) {
                    scope.goodOffer = data.offer;
                });

            });
            scope.getQuantity = function(value) {
                return _.size(value);
            }
            scope.getName = function(value) {
                return value[0].title;
            }
            scope.getBookPrice = function(value) {
                return value[0].price;
            }
            scope.getTotalBookPrice = function(value) {
                return value[0].price * _.size(value);
            }
            scope.delete = function(value) {
                Cart.remove(value[0].isbn);
            }
            scope.plus = function(value) {
                Cart.plus(value[0]);
            }
            scope.minus = function(value) {
                Cart.minus(value[0].uuid);
            }
        }
    }
})();