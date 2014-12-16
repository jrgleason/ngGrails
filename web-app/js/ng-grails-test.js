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
describe("Testing the question", function() {
	var $controller,
	    $location,
	    $rootScope,
	    $scope,
	    controller,
	    questionService;
	    var item = {
			put:function(){},
			remove:function(){}
	    }, question;
	beforeEach(module('jg.ngGrails'));
	var wire = function( _$rootScope_, _$location_, _$controller_, _questionService_, $q){
		$controller = _$controller_;
		$location = _$location_;
		spyOn($location, 'path');
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		questionService = _questionService_;
		spyOn(item, 'put');
		spyOn(item, 'remove');
		var defer = $q.defer();
//		defer.resolve({errorMessages:[{}]})
		
		spyOn(questionService, 'add').and.returnValue(defer.promise);
		defer.resolve();
		questionService.questions = [item,item];
		controller = $controller('questionController', { 
		  $scope: $scope
		});
	}
	beforeEach(inject(wire));
	it("Make sure vote up works", function() {
		expect(item.put).not.toHaveBeenCalled();
		controller.voteUp(1);
		expect(item.put).toHaveBeenCalled();
	});
	it("Make sure vote down works", function() {
		expect(item.put).not.toHaveBeenCalled();
		controller.voteDown(1);
		expect(item.put).toHaveBeenCalled();
	});
	it("Make sure remove works", function() {
		expect(item.remove).not.toHaveBeenCalled();
		controller.delete(1);
		expect(item.remove).toHaveBeenCalled();
	});
	it("Make sure the edit is working as expected", function(){
		expect(item.put).not.toHaveBeenCalled();
		expect($location.path).not.toHaveBeenCalled();
		controller.edit(1);
		expect(item.put).toHaveBeenCalled();
		expect($location.path).toHaveBeenCalledWith('');
	})
	//FIXME: Finish this test.
//	it("Make sure the add is working as expected", function(){
//		expect(controller.errorMessages.length).toBe(0);
//		controller.newQuestion = {};
//		controller.add();
//		expect(controller.errorMessages.length).toBe(1);
//	})
});