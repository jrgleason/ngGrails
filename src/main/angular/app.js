var app = angular.module('jg.ngGrails', [ 
            'templates-build',
            'ngRoute', 
            'ngAnimate',
            'textAngular',
            'restangular'
          ]);

//We need to setup our router
var RouteProvider = function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main/partials/view.jade'
    })
    .when('/add', {
        templateUrl: 'main/partials/add.jade'
        	
    })
    .when('/edit', {
        templateUrl: 'main/partials/edit.jade'
    })
    .when('/wc', {
    	templateUrl: 'main/partials/webComponent.jade',
    	controller: WebComponentController
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
	RestangularProvider.setBaseUrl(window.appContext);
});

