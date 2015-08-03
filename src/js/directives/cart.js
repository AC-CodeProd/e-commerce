(function() {
    'use strict';
    angular
        .module('commerce.CartDirective')
        .directive('cart', CartDirective);

    function CartDirective($timeout, Cart) {

        var directive = {
            link: link,
            scope: true,
            restrict: 'AEC'
        };
        return directive;

        function link(scope, element, attrs) {

            var el = element[0];

            scope.$watch(Cart.getTotalCount, function(newValue, oldValue, scope) {
                classie.add(element[0], 'cart-animate');
                scope.count = Cart.getTotalCount();
                scope.cart = Cart.getCart();
                scope.totalPrice = Cart.getTotalPrice();
                if (Cart.getTotalCount() === 0) {
                    classie.remove(document.body, 'show');
                    classie.remove(document.querySelector('.mdl-layout'), 'overflow-hidden');
                } else if (Cart.getTotalCount() >= 1) {
                    Cart.whichIsGoodOffer().then(function(data) {
                        scope.goodOffer = data.offer;
                    });
                }
                $timeout(function() {
                    classie.remove(element[0], 'cart-animate');
                }, 400);

            });
            scope.getQuantity = function(value) {
                return _.size(value);
            }
            scope.getName = function(value) {
                return value[0].title;
            }
            scope.getBookPrice = function(value) {
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