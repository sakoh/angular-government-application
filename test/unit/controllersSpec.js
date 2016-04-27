'use strict';

/* jasmine specs for controllers go here */

describe('Controllers', function() {

  describe('RegistrationCtrl', function(){

      // Load our app module definition before each test.
      beforeEach(module('govApp'));

      it('should have RegistrationCtrl', function() {
        var ctrl = $controller('RegistrationCtrl', {$scope: scope});
        expect(scope.firstName).toBe("John");
      });
  });

});
