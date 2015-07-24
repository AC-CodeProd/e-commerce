(function() {
    'use strict';
    angular
        .module('commerce.Summary')
        .controller('SummaryCtrl', SummaryCtrl);

    function SummaryCtrl($rootScope, $scope, $state, Cart) {
        var summaryC = this;
        $scope.$watch(Cart.getTotalCount, function(newValue, oldValue, scope) {
            if(Cart.getTotalCount() === 0){
                $state.go("books");
            }
        });
    }
})();