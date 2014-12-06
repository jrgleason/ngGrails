function QuestionController($scope, $location, questionService) {
	$scope.questionCtrl = this;
	var _this = this,
	    question = questionService.question
	
	questionService.getQuestions();    
    this.questions = questionService.questions;
	$scope.questions = questionService.questions;
	this.selectedQuestion = questionService.questions[questionService.selectedQuestion];
	
	this.gotoEdit = function(key) {
		questionService.selectedQuestion = key
		$location.path("/edit");
    }
	
	this.add = function() {
		question.post(this.newQuestion);
		$location.path('');
	}
	this.voteUp = function(index) {
		var questionToUpdate = _this.questions[index]
		questionToUpdate.voteCount++;
		questionToUpdate.put();
	}
	this.voteDown = function(index) {
		var questionToUpdate = _this.questions[index]
		questionToUpdate.voteCount--;
		questionToUpdate.put();
	}
	this.delete = function(index) {
		var questionToUpdate = _this.questions[index];
		questionToUpdate.remove();
	}
	this.edit = function(index){
		var questionToUpdate = _this.questions[index]
		questionToUpdate.put();
	}
}
angular.module('jg.ngGrails').controller('questionController',
		QuestionController);