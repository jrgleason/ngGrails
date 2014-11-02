var app = angular.module('jg.ngGrails', [ 
            'templates-main',
            'ngRoute', 
            'ngAnimate',
            'restangular'
          ]);

//We need to setup our router
var RouteProvider = function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main/partials/view.jade',
        controller: ViewController
    })
    .when('/add', {
        templateUrl: 'main/partials/add.jade',
        controller: AddController
    })
    .otherwise({
        redirectTo: '/'
    });
}
app.config(RouteProvider);

//I normally create a main directive, $rootScope pretty much handles this for you but I like to be explicit
var MainDirective = function($templateCache){
	return{
		restrict: 'E',
		scope: {},
		templateUrl:"main/partials/app.jade"
	}
}
app.directive('jgNgGrailsApp', MainDirective)

//This configures Restangular to our context-root
app.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('/grails-angular');
});

