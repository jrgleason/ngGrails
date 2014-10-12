var app = angular.module('jg.ngGrails', [ 
            'templates-main',
            'ngRoute', 
            'ngAnimate',
            'ngResource'
          ]);
app.config(function ($routeProvider) {
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
});
app.directive('jgNgGrailsApp', function($templateCache){
	return{
		restrict: 'E',
		scope: {},
		templateUrl:"main/partials/app.jade"
	}
})
