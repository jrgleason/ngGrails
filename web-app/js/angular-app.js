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


var HelloController = function($scope, $location) {
	$scope.helloCtrl = this;
	$scope.pageClass = "page-hello"
}
angular.module('jg.ngGrails').controller('helloController', HelloController);
var MainController = function($scope, $location){
	$scope.mainCtrl = this;
	this.go = function (path) {
        $location.path(path);
    }
}
angular.module('jg.ngGrails')
.controller('mainController', MainController);
/**
 * This is the sample list directive
 * @return {angular.Directive} Directive definition object.
 */
var ListDirective = function($templateCache) {
  return {
	  restrict: "E",
	  templateUrl: 'main/partials/list/list.jade',
	  controller:QuestionController
  }
};
angular.module('jg.ngGrails')
       .directive('jgNoteList', ListDirective);
var AddController = function($scope){
	$scope.pageClass = "page-add";
}
var ViewController = function($scope){
	$scope.pageClass = "page-view";
}
var AddQuestion = function(){
	return{
		restrict: "E",
		replace: false,
		scope: {},
		templateUrl: "main/partials/question/addQuestion.jade",
		controller: QuestionController
	}
}
angular.module('jg.ngGrails')
  .directive('jgAddQuestion', AddQuestion);
var QuestionController = function($scope, $interval, Restangular) {
	$scope.questionCtrl = this;
	var _this = this;
	var question = Restangular.allUrl('Note');
	this.questions = [];
	this.getQuestions = function() {
		question.getList().then(function(questions) {
			_this.questions = questions;
		});
	}
	this.getQuestions();
	
	$interval(function(){
		_this.getQuestions();
		},100);
	
	this.add = function() {
		question.post(this.newQuestion).then(function() {});
	}
	this.voteUp = function(index) {
		var questionToUpdate = _this.questions[index]
		questionToUpdate.voteCount = questionToUpdate.voteCount + 1;
		questionToUpdate.put();
	}
	this.voteDown = function(index) {
		var questionToUpdate = _this.questions[index]
		questionToUpdate.voteCount = questionToUpdate.voteCount - 1;
		questionToUpdate.put();
	}
}
angular.module('jg.ngGrails').controller('questionController',
		QuestionController);