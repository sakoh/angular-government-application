angular.module('govApp.directives.navigation',[]).directive('navigation', function() {
  return {
    scope: {
			links: "="
		},
    transclude: true,
    restrict: 'EA',
    replace: false,
    templateUrl: function(elem, attrs) {
      return attrs.templateUrl || "partials/navigation.html";
    }
	}
});
