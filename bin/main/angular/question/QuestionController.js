var QuestionController = function($scope, $resource, noteService){
	$scope.questionCtrl = this;
	$scope.pageClass = "page-view"
	var _this = this;
	var Question = $resource('/grails-angular/Note/:key');
	this.questions = Question.query();
	this.newQuestion;
	
	this.add = function(){
		console.log("Saving "+JSON.stringify(this.newQuestion));
//		var readyToSave = new Question(this.newQuestion);
//		readyToSave.$save();
	}
}
angular.module('jg.ngGrails')
       .controller('questionController', QuestionController);