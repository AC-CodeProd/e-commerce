(function() {
    'use strict';
    describe('Controller: BooksCtrl', function() {
        var scope;
        var rootScope;
        var controller;
        var fakeData = [{
            isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
            title: 'Henri Potier à l\'école des sorciers',
            price: 35,
            cover: 'http://henri-potier.xebia.fr/hp0.jpg'
        }, {
            isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
            title: 'Henri Potier et la Chambre des secrets',
            price: 30,
            cover: 'http://henri-potier.xebia.fr/hp1.jpg'
        }, {
            isbn: 'fcd1e6fa-a63f-4f75-9da4-b560020b6acc',
            title: 'Henri Potier et le Prisonnier d\'Azkaban',
            price: 30,
            cover: 'http://henri-potier.xebia.fr/hp2.jpg'
        }, {
            isbn: 'c30968db-cb1d-442e-ad0f-80e37c077f89',
            title: 'Henri Potier et la Coupe de feu',
            price: 29,
            cover: 'http://henri-potier.xebia.fr/hp3.jpg'
        }, {
            isbn: '78ee5f25-b84f-45f7-bf33-6c7b30f1b502',
            title: 'Henri Potier et l\'Ordre du phénix',
            price: 28,
            cover: 'http://henri-potier.xebia.fr/hp4.jpg'
        }, {
            isbn: 'cef179f2-7cbc-41d6-94ca-ecd23d9f7fd6',
            title: 'Henri Potier et le Prince de sang-mêlé',
            price: 30,
            cover: 'http://henri-potier.xebia.fr/hp5.jpg'
        }, {
            isbn: 'bbcee412-be64-4a0c-bf1e-315977acd924',
            title: 'Henri Potier et les Reliques de la Mort',
            price: 35,
            cover: 'http://henri-potier.xebia.fr/hp6.jpg'
        }];
        var $httpBackend;
        var Books;
        beforeEach(module('commerce'));

        beforeEach(inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');
            Books = $injector.get('Books');
        }));

        beforeEach(inject(function($rootScope, $controller) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            controller = $controller('BooksCtrl as booksC', {
                $scope: scope
            });
        }));

        it('should not be null', function() {
            expect(controller).not.toEqual(null);
        });

        it('should be defined Books', function() {
            expect(Books.get).toBeDefined();
        });

        it('should send a request to Books', function() {
            $httpBackend.when('GET', 'http://henri-potier.xebia.fr/books').respond(fakeData);
            Books.get();
            $httpBackend.flush();
        });

    });
})();