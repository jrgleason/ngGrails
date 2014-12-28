function EditQuestion(){
	return{
		restrict: "E",
		replace: false,
		scope: {
		  ordinal:"=", 
		},
		templateUrl: "main/partials/question/editQuestion.jade",
		controller: QuestionController,
	}
}
app
  .directive('jgEditQuestion', EditQuestion);