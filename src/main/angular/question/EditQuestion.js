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
angular.module('jg.ngGrails')
  .directive('jgEditQuestion', EditQuestion);