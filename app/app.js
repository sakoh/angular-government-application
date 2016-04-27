'use strict';

// Declare app level module which depends on views, and components
angular.module('govApp', [
  'ui.router',
  'govApp.directives.navigation',
  'govApp.RegistrationCtrl'
]).
config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/index.html',
    controller: function($scope){

    }
  }).state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    controller: function($scope){

    }
  }).state('registration', {
    url: '/registration',
    templateUrl: 'templates/registration/index.html',
    controller: 'RegistrationCtrl'
  }).state('registration.property', {
    url: '/property',
    templateUrl: 'templates/registration/property.html',
    controller: function($scope, $http){
      $http.get('./content.json').success(function(data){
        $scope.data = data['A'];
      });
    }
  }).state('registration.transferors-sellers', {
    url: '/transferors-sellers',
    templateUrl: 'templates/registration/transferors-sellers.html',
    controller: function($scope, $http){
      $http.get('./content.json').success(function(data){
        $scope.data = data['B'];
      });
    }
  });

   $urlRouterProvider.otherwise("/");
}]);
