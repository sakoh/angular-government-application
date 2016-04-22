'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router'
]).
config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    views:{
      "main": {
        templateUrl: 'templates/index.html'
      }
    },
    controller: function($scope){

    }
  }).state('about', {
    url: '/about',
    views:{
      "main": {
        templateUrl: 'templates/about.html'
      }
    },
    controller: function($scope){

    }
  }).state('registration', {
    url: '/registration',
    views:{
      "main": {
        templateUrl: 'templates/registration/index.html'
      }
    },
    controller: function($scope){

    }
  }).state('registration.step-1', {
    url: '/step-1',
    views:{
      "registrationForm": {
        templateUrl: 'templates/registration/step-1.html'
      }
    },
    controller: function($scope){

    }
  }).state('registration.step-2', {
    url: '/step-2',
    views:{
      "registrationForm": {
        templateUrl: 'templates/registration/step-2.html'
      }
    },
    controller: function($scope){

    }
  });

   $urlRouterProvider.otherwise("/");
}]);
