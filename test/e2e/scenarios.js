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

  describe('registration', function() {


    it('should render a view when user navigates to /registration', function() {
      browser.get('index.html#/registration');
      expect(element.all(by.css('[ui-view] h1')).first().getText()).
        toMatch(/Registration/);

    });

    it('should render a view when user navigates to /registration/step-1', function() {
      browser.get('index.html#/registration/step-1');
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/Step 1/);
    });

    it('should render a view when user navigates to /registration/step-2', function() {
      browser.get('index.html#/registration/step-2');
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/Step 2/);
    });

    it('should render a view when user navigates to /registration/step-3', function() {
      browser.get('index.html#/registration/step-3');
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/Step 3/);
    });

    it('should render a view when user navigates to /registration/step-4', function() {
      browser.get('index.html#/registration/step-4');
      expect(element.all(by.css('[ui-view] p')).first().getText()).
        toMatch(/Step 4/);
    });

  });
});
