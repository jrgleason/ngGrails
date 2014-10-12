var app = angular.module('jg.ngGrails', [ 
            'templates-main',
            'ngRoute', 
            'ngAnimate',
            'ngResource'
          ]);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'main/partials/view.jade',
        controller: 'questionController'
    })
    .when('/add', {
        templateUrl: 'main/partials/add.jade'
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
/**
 * @param {!angular.$http} $http The Angular http service.
 * @constructor
 */
function NoteService($http, $q, $resource){
	/** @type {!angular.$http} */
	this.http_ = $http;
	this.resource_ = $resource('/grails-angular/Note/:key');
}
NoteService.prototype.get = function(successCallback, failCallback) {
  console.log("NoteService get");
  this.http_.get('/grails-angular/Note').success(successCallback).error(failCallback);
}
NoteService.prototype.add = function(obj){
  var result = $q.defer();
  this.http_.post('/grails-angular/Note', obj)
}
angular.module('jg.ngGrails')
       .service('noteService', NoteService);
var QuestionController = function($scope, $resource, noteService){
	$scope.questionCtrl = this;
	$scope.pageClass = "page-view"
	var _this = this;
	var Question = $resource('/grails-angular/Note/:key');
	this.questions = Question.query();
	console.log(JSON.stringify(this.questions))
	this.newQuestion;
	
	this.add = function(){
		console.log("Saving "+JSON.stringify(this.newQuestion));
		var readyToSave = new Question(this.newQuestion);
		readyToSave.$save();
	}
}
angular.module('jg.ngGrails')
       .controller('questionController', QuestionController);