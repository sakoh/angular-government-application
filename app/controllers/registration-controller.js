angular.module('govApp.RegistrationCtrl',[])
.controller('RegistrationCtrl', ['$scope','$location', function($scope, $location){
  $scope.object = {};
  $scope.registrationIndex = $location.path() === '/registration';
}]);
