function QuestionController($scope, $location, questionService) {
	$scope.questionCtrl = this;
	var _this = this,
	    question = questionService.question
	questionService.getQuestions();    
    this.questions = questionService.questions;
    this.selectedId = questionService.selectedQuestion;
	this.selectedQuestion = questionService.questions[questionService.selectedQuestion];
	$scope.$watch('questionCtrl.questions' , function(val){
		if(val != null && questionService.selectedQuestion != null){
			this.selectedQuestion = questionService.questions[questionService.selectedQuestion];
		}
	})
	this.gotoEdit = function(key) {
		questionService.selectedQuestion = key
		$location.path("/edit");
    }
	
	this.add = function() {
		question.post(this.newQuestion);
		$location.path('');
	}
	this.voteUp = function(index) {
		var questionToUpdate = _this.questions[index];
		questionToUpdate.voteCount++;
		questionToUpdate.put();
	}
	this.voteDown = function(index) {
		var questionToUpdate = _this.questions[index];
		questionToUpdate.voteCount--;
		questionToUpdate.put();
	}
	this.delete = function(index) {
		var questionToUpdate = _this.questions[index];
		questionToUpdate.remove();
	}
	this.edit = function(index){
		var questionToUpdate = questionService.questions[index];
		console.log("Updating Question "+ (index==null)+" "+this.selectedId+" "+questionService.selectedQuestion)
		questionToUpdate.put();
		$location.path('');
	}
}
angular.module('jg.ngGrails').controller('questionController',
		QuestionController);