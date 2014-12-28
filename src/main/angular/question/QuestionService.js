function QuestionService($interval, Restangular) {
	this.question = Restangular.all('Note');
	var _this = this, errorCount = 0, running = true;
	this.questions = [];
	this.selectedQuestion;
	function questionsReceived(questions) {
		errorCount = 0;
		if (_this.questions.length != questions.length) {
			// Updating the lists seemed to help with performance.
			while(_this.questions.length > 0) {
				_this.questions.pop();
			}
			angular.forEach(questions, function(value) {
				_this.questions.push(value)
			});
			
		} else {
			angular.forEach(questions, function(value, key) {
				_this.questions[key].voteCount = value.voteCount
			})
		}
	}
	function questionsFailed(question) {
		running = !(++errorCount > 5);
	}
	this.add = function(item){
		return _this.question.post(item);
	}
	this.getQuestions = function() {
		this.question.getList().then(questionsReceived, questionsFailed);
	}
	this.getQuestion = function(id) {
		return this.questions[id];
	}
	//TODO: Very inefficient some of these issues will be addressed in 2.0
	var clock = $interval(function() {
		if (running) {
			_this.getQuestions();
		}
	}, 100);
}
app.service('questionService', QuestionService);