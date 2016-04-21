'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router'
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
  });

   $urlRouterProvider.otherwise("/");
}]);
