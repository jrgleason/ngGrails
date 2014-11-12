function MainController($scope, navService){
	$scope.mainCtrl = this;
	this.go = function (path) {
		navService.go(path);
    }
}
angular.module('jg.ngGrails')
.controller('mainController', MainController);