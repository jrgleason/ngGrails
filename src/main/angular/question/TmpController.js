function TempController($scope, $routeParams){
	$scope.tmpCtrl = this;
	this.id = $routeParams.id
	console.log("The id is "+ this.id);
}
angular.module('jg.ngGrails')
.controller('TmpController', TempController);