describe("Testing the main controller", function() {
	var $controller,
	    $location,
	    $rootScope,
	    $scope,
	    controller;
	beforeEach(module('jg.ngGrails'));
	var wire = function( _$rootScope_, _$location_, _$controller_){
		$controller = _$controller_;
		$location = _$location_;
		spyOn($location, 'path');
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		controller = $controller('mainController', { 
		  $scope: $scope
		});
	}
	beforeEach(inject(wire));
	it("Make sure path gets called when going to new page", function() {
		expect($location.path).not.toHaveBeenCalled();
		controller.go("/");
		expect($location.path).toHaveBeenCalled();
	});
});