var app = angular.module('jg.ngGrails', [ 
            'templates-main',
            'ngRoute', 
            'ngAnimate'
          ]);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main/partials/view.jade',
        controller: 'noteController'
    })
    .when('/hi', {
        templateUrl: 'main/partials/hi.jade',
        controller: 'helloController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
app.directive('jgNgGrailsApp', function($templateCache){
	return{
		restrict: 'E',
		scope: {},
		templateUrl:"main/partials/app.jade"
	}
})