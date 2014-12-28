/**
 * This is the sample list directive
 * @return {angular.Directive} Directive definition object.
 */
function ListDirective($templateCache) {
  return {
	  restrict: "E",
	  templateUrl: 'main/partials/question/listQuestion.jade',
	  controller:  'questionController',
	  //Example of how you could use controller as per https://github.com/angular/angular.js/issues/7635
	  //I left this out because it would add 3 lines and remove 1 ;-)
//	  controllerAs: 'questionCtrl'
  }
};
app.directive('jgNoteList', ListDirective);