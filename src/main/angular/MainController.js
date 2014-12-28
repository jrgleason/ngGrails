function MainController($location){
	this.go = function (path) {
		$location.path(path);
    }
}
app.controller('mainController', MainController);