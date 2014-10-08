/**
 * List controller.
 *
 * @param {!angular.Scope} $scope
 * @constructor
 * @ngInject
 * @export
 */
var ListController = function($scope){
	$scope.listCtrl = this;
	console.log(JSON.stringify($scope.notes))
}