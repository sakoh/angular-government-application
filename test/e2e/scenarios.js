'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('index', function() {

    beforeEach(function() {
      browser.get('#/');
    });


    it('should render index view when user navigates to index', function() {
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/Hello World/);
    });

  });


  describe('about', function() {

    it('should render about view when user navigates to about', function() {
      browser.get('#/about');
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/About Us/);
    });

  });

  describe('registration', function() {


    it('should render a view when user navigates to /registration', function() {
      browser.get('#/registration');
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/Registration/);

    });

    it('should render a property as the default subview when user navigates to /registration', function() {
      browser.get('#/registration');
      expect(element.all(by.css('[ui-view] h3')).first().getText()).
        toMatch(/Property/);
    });

    it('should render a view when user navigates to /registration/property', function() {
      browser.get('#/registration/property');
      expect(element.all(by.css('[ui-view] fieldset')).count()).
        toEqual(8);
    });

    it('should render inputs when user navigates to /registration/transferors-sellers', function() {
      browser.get('#/registration/transferors-sellers');
      expect(element.all(by.css('[ui-view] input')).count()).
        toEqual(3);
    });

    it('should render select options when user navigates to /registration/transferors-sellers', function() {
      browser.get('#/registration/transferors-sellers');
      expect(element.all(by.css('[ui-view] select')).count()).
        toEqual(5);
    });

  });
});
