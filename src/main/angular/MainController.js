function MainController($location){
	$scope.mainCtrl = this;
	this.go = function (path) {
		$location.path(path);
    }
}
app.controller('mainController', MainController);