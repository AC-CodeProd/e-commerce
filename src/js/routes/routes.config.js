(function() {
    'use strict';
    angular
        .module('commerce.Route')
        .config(RouteConfig);

    function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider.state('books', {
            url: '/',
            templateUrl: 'partials/books.html',
            controller: 'BooksCtrl',
            controllerAs: 'booksC'
        }).state('summary', {
            url: '/summary',
            templateUrl: 'partials/summary.html',
            controller: 'SummaryCtrl',
            controllerAs: 'summaryC'
        });
    }
})();