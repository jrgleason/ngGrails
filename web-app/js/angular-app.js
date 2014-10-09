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
 * List controller.
 *
 * @param {!angular.Scope} $scope
 * @constructor
 * @ngInject
 * @export
 */
var ListController = function($scope){
	$scope.listCtrl = this;
	console.log(JSON.stringify($scope.notes))
}
/**
 * This is the sample list directive
 * @return {angular.Directive} Directive definition object.
 */
var ListDirective = function($templateCache) {
  return {
	  restrict: "E",
	  templateUrl: 'main/partials/List/list.jade',
	  scope:{
		  notes:"=",
	  },
  }
};
angular.module('jg.ngGrails')
       .directive('jgNoteList', ListDirective);
var AddNoteController = function(noteService){
	this.addNote = function(note){
//		noteService.
	}
}
var AddNoteDirective = function(){
	
}
var NoteController = function($scope, noteService){
	$scope.noteCtrl = this;
	$scope.pageClass = "page-view"
	var _this = this;
	this.notes = [];
	this.getNotes = function(){
		console.log("Controller Get");
		noteService.get(setNotes, failNotes);
	}
	var setNotes = function(data){
		console.log("Got notes! "+ JSON.stringify(data)+" "+JSON.stringify(data[0]))
		_this.notes = data;
	}
	var failNotes = function(){
		console.log("Failed to get notes")
	}
	
	this.getNotes();
}
angular.module('jg.ngGrails')
       .controller('noteController', NoteController);
/**
 * @param {!angular.$http} $http The Angular http service.
 * @constructor
 */
function NoteService($http){
	/** @type {!angular.$http} */
	this.http_ = $http;
}
NoteService.prototype.get = function(successCallback, failCallback) {
  console.log("NoteService get");
  this.http_.get('/grails-angular/Note').success(successCallback).error(failCallback);
}
NoteService.prototype.add = function(success){
	
}
angular.module('jg.ngGrails')
       .service('noteService', NoteService);