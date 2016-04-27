angular.module('govApp.directives.navigation',[]).directive('navigation', function() {
  return {
    scope: {
			links: "@"
		},
    restrict: 'EA',
    replace: true,
    templateUrl: "partials/navigation.html",
    link: function(scope, element, attrs){
      scope.links = [{
        id: 'home',
        title: 'Home'
      }, {
        id: 'about',
        title: 'About'
      }, {
        id: 'registration',
        title: 'Registration'
      }];
    }
	}
});
