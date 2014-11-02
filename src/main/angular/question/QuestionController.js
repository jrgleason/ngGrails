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