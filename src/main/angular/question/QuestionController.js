function QuestionController($scope, $interval, Restangular, navService) {
	$scope.questionCtrl = this;
	var _this = this,
	    question = Restangular.allUrl('Note'),
	    errorCount = 0,
	    running = true;
	
	this.questions = [];
	
	$scope.mainCtrl = this;
	function go(path) {
		navService.go(path);
    }
	
	function happyPath(questions){
		errorCount = 0;
		if(_this.questions.length != questions.length){
			_this.questions = questions;
		}
		
	}
	function problemPath(question){
		errorCount++;
		if(errorCount > 5){
			running = false;
		}
	}
	this.getQuestions = function() {
		question.getList().then(happyPath, problemPath);
	}
	
	this.getQuestions();
	
	$interval(function(){
		if(running){
			_this.getQuestions();
		}
		
		},100);
	
	this.add = function() {
		question.post(this.newQuestion);
		go('');
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