'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('index', function() {

    beforeEach(function() {
      browser.get('index.html');
    });


    it('should render index view when user navigates to index', function() {
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/Hello World/);
    });

  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('index.html#/about');
    });


    it('should render about view when user navigates to about', function() {
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/About Us/);
    });

  });
});
