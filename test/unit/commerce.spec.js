(function() {
    'use strict';

    describe('Module: commerce', function() {
        var module;
        var deps;

        var hasModule = function(m) {
            return deps.indexOf(m) >= 0;
        };

        beforeEach(function() {
            module = angular.module('commerce');
            deps = module.value('commerce').requires;
        });

        it('should be registered', function() {
            expect(module).not.toEqual(null);
        });

        it('should have ui.router as a dependency', function() {
            expect(hasModule('ui.router')).toEqual(true);
        });

        it('should have commerce.CartService as a dependency', function() {
            expect(hasModule('commerce.CartService')).toEqual(true);
        });
    });
})();