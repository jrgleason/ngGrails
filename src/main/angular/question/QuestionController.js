function QuestionController($scope, $location, questionService) {
	$scope.questionCtrl = this;
	var _this = this,
	    question = questionService.question
	questionService.getQuestions();    
    this.questions = questionService.questions;
    this.selectedId = questionService.selectedQuestion;
	this.selectedQuestion = questionService.questions[questionService.selectedQuestion];
	this.errorMessages = [];
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
		questionService.add(this.newQuestion)
                 .then(function(data){
			if(data.errorMessages == null || data.errorMessages.length == 0){
				$location.path('');
			}
			else{
				while(_this.errorMessages.length > 0) {
					_this.errorMessages.pop();
				}
				angular.forEach(data.errorMessages, function(value) {
					_this.errorMessages.push(value)
				})
			}
		})
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
		questionToUpdate.put();
		$location.path('');
	}
}
angular.module('jg.ngGrails').controller('questionController',
		QuestionController);