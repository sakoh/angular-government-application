'use strict';

// Declare app level module which depends on views, and components
angular.module('govApp', [
  'ui.router',
  'active-link'
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
    controller: function($scope){

    }
  }).state('registration.step-1', {
    url: '/step-1',
    templateUrl: 'templates/registration/step-1.html',
    controller: function($scope){

    }
  }).state('registration.step-2', {
    url: '/step-2',
    templateUrl: 'templates/registration/step-2.html',
    controller: function($scope){

    }
  }).state('registration.step-3', {
    url: '/step-3',
    templateUrl: 'templates/registration/step-3.html',
    controller: function($scope){

    }
  }).state('registration.step-4', {
    url: '/step-4',
    templateUrl: 'templates/registration/step-4.html',
    controller: function($scope){

    }
  });

   $urlRouterProvider.otherwise("/");
}]);
