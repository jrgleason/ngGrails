var NoteController = function($scope, noteService){
	$scope.noteCtrl = this;
	$scope.pageClass = "page-view"
	var _this = this;
	this.notes = [];
	this.getNotes = function(){
		console.log("Controller Get");
		noteService.get(setNotes, failNotes);
	}
	var setNotes = function(data){
		console.log("Got notes! "+ JSON.stringify(data)+" "+JSON.stringify(data[0]))
		_this.notes = data;
	}
	var failNotes = function(){
		console.log("Failed to get notes")
	}
	
	this.getNotes();
}
angular.module('jg.ngGrails')
       .controller('noteController', NoteController);