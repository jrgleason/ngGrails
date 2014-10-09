/**
 * @param {!angular.$http} $http The Angular http service.
 * @constructor
 */
function NoteService($http){
	/** @type {!angular.$http} */
	this.http_ = $http;
}
NoteService.prototype.get = function(successCallback, failCallback) {
  console.log("NoteService get");
  this.http_.get('/grails-angular/Note').success(successCallback).error(failCallback);
}
NoteService.prototype.add = function(success){
	
}
angular.module('jg.ngGrails')
       .service('noteService', NoteService);