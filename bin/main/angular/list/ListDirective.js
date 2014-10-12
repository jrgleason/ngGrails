/**
 * This is the sample list directive
 * @return {angular.Directive} Directive definition object.
 */
var ListDirective = function($templateCache) {
  return {
	  restrict: "E",
	  templateUrl: 'main/partials/list/list.jade',
	  scope:{
		  notes:"=",
	  },
  }
};
angular.module('jg.ngGrails')
       .directive('jgNoteList', ListDirective);