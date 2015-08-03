'use strict';
(function() {
    describe('app', function() {
        beforeEach(function() {
            console.info('\nrunning:', jasmine.getEnv().currentSpec.description);
            // _protractor = protractor.getInstance();
            // _protractor.ignoreSynchronization = true;
            // _protractor.waitForAngular();
            browser.driver.manage().window().maximize();
            browser.sleep(1000);
        });

        it('should load the homepage', function() {
            browser.get('/');
            // expect(browser.isElementPresent(by.css('body'))).toBe(true);
        });

        it('should have a title', function() {
            expect(browser.getTitle()).toEqual('Future Xebian');
        });

        it('should add book to cart', function() {
            element.all(by.css('.book-action-buy')).get(1).click();
            browser.sleep(500);
            element.all(by.css('.book-action-buy')).get(2).click();
            browser.sleep(500);
            element.all(by.css('.book-action-buy')).get(3).click();
        });

        it('should click preview cart', function() {
            element(by.id('cart-button-show')).click();
            browser.sleep(1000);
        });

        it('should plus and minus quantity book', function() {
            element.all(by.css('.cart-preview-item-quantity-input-btn-plus')).get(0).click();
            browser.sleep(500);
            element.all(by.css('.cart-preview-item-quantity-input-btn-plus')).get(0).click();
            browser.sleep(500);
            element.all(by.css('.cart-preview-item-quantity-input-btn-plus')).get(0).click();
            browser.sleep(500);
            element.all(by.css('.cart-preview-item-quantity-input-btn-plus')).get(1).click();
            browser.sleep(500);
            element.all(by.css('.cart-preview-item-quantity-input-btn-minus')).get(0).click();
            browser.sleep(500);
        });

        it('should remove book to cart', function() {
            element.all(by.css('.cart-preview-item-delete')).get(2).click();
            browser.sleep(500);
        });

        it('should navigate to the summary page when clicking', function() {
            element(by.css('a[ui-sref="summary"]')).click();
            expect(browser.getCurrentUrl()).toMatch(/\/summary/);
            browser.sleep(1000);
        });

    });
})();