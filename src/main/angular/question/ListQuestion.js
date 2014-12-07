/**
 * This is the sample list directive
 * @return {angular.Directive} Directive definition object.
 */
function ListDirective($templateCache) {
  return {
	  restrict: "E",
	  templateUrl: 'main/partials/question/listQuestion.jade',
	  controller:  'questionController'
  }
};
angular.module('jg.ngGrails')
       .directive('jgNoteList', ListDirective);