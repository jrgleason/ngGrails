function QuestionController($scope, $location, questionService) {
	//SEE ListController
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
		questionService.add(_this.newQuestion)
                 .then(function(data){
			if(!data.errorMessages || data.errorMessages.length == 0){
				$location.path('');
			}
			else{
				//TODO: Go back and look at Angular error handling
				//Clear the list
				while(_this.errorMessages.length > 0) {
					_this.errorMessages.pop();
				}
				//Add new items back on
				angular.forEach(data.errorMessages, function(value) {
					_this.errorMessages.push(value)
				})
			}
		})
	}
	this.voteUp = function(index) {
		_this.questions[index].voteCount++;
		_this.questions[index].put();
	}
	this.voteDown = function(index) {
		_this.questions[index].voteCount--;
		_this.questions[index].put();
	}
	this.delete = function(index) {
		_this.questions[index].remove();
	}
	this.edit = function(index){
		questionService.questions[index].put();
		//TODO Could probably be toggleable
		$location.path('');
	}
}
app.controller('questionController', QuestionController);