/**
 * This is the sample list directive
 * @return {angular.Directive} Directive definition object.
 */
function ListDirective($templateCache) {
  return {
	  restrict: "E",
	  templateUrl: 'main/partials/list/list.jade',
	  controller:QuestionController
  }
};
angular.module('jg.ngGrails')
       .directive('jgNoteList', ListDirective);