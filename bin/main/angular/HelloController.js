var HelloController = function($scope, $location) {
	$scope.helloCtrl = this;
	$scope.pageClass = "page-hello"
}
angular.module('jg.ngGrails').controller('helloController', HelloController);