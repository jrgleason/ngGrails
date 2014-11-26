function TempController($scope, $routeParams){
	$scope.tmpCtrl = this;
	this.id = $routeParams.id
}
angular.module('jg.ngGrails')
.controller('TmpController', TempController);