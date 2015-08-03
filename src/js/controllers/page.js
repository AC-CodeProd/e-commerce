(function() {
    'use strict';
    angular
        .module('commerce.Page')
        .controller('PageCtrl', PageCtrl);

    function PageCtrl($rootScope, $scope, Cart) {
        var pageC = this;

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
        var btnShow = document.querySelector('#cart-button-show');
        var btnValid = document.querySelector('#cart-valid-btn');
        var shadowLayer = document.querySelector('#shadow-layer');
        btnShow.onclick = function() {
            if (Cart.getTotalCount() > 0) {
                classie.toggle(document.body, 'show');
                classie.toggle(document.querySelector('.mdl-layout'), 'overflow-hidden');
            }
        }
        btnValid.onclick = function() {
            classie.remove(document.body, 'show');
            classie.remove(document.querySelector('.mdl-layout'), 'overflow-hidden');
        }
        shadowLayer.onclick = function() {
            classie.remove(document.body, 'show');
            classie.remove(document.querySelector('.mdl-layout'), 'overflow-hidden');
        }
    }
})();