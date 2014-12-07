function MainController($scope, $location){
	$scope.mainCtrl = this;
	this.go = function (path) {
		$location.path(path);
    }
}
angular.module('jg.ngGrails')
.controller('mainController', MainController);