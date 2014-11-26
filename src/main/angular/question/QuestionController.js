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
	
	function questionsReceived(questions){
		errorCount = 0;
		if(_this.questions.length != questions.length){
			_this.questions = questions;
		}
		else{
			angular.forEach(questions,function(value, key){
				_this.questions[key].voteCount = value.voteCount
			})
		}
		
	}
	function questionsFailed(question){
		running = !(++errorCount > 5);
	}
	this.getQuestions = function() {
		question.getList().then(questionsReceived, questionsFailed);
	}
	
	this.getQuestions();
	
	var clock = $interval(function(){
		if(running){
			_this.getQuestions();
		}
		
		},100);
	//On exit lets kill our clock
	$scope.$on('$destroy', function() {
		  if (angular.isDefined(clock)) {
	        $interval.cancel(clock);
	        stop = undefined;
	      }
		})
	
	this.add = function() {
		question.post(this.newQuestion);
		go('');
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