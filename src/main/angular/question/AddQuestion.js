function AddQuestion(){
	return{
		restrict: "E",
		replace: false,
		scope: {},
		templateUrl: "main/partials/question/addQuestion.jade",
		controller: QuestionController,
	}
}
angular.module('jg.ngGrails')
  .directive('jgAddQuestion', AddQuestion);