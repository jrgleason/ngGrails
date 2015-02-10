function AddQuestion(){
	return{
		restrict: "E",
		replace: false,
		scope: {},
		templateUrl: "main/partials/question/addQuestion.jade",
		controller: QuestionController,
	}
}
app
  .directive('jgAddQuestion', AddQuestion);