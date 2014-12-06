function NavigationService($location){
	this.go = function (path) {
        $location.path(path);
    }
}
angular.module('jg.ngGrails')
       .service('navService', NavigationService);