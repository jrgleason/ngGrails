/**
 * @param {!angular.$http} $http The Angular http service.
 * @constructor
 */
function NoteService($http, $q, $resource){
	/** @type {!angular.$http} */
	this.http_ = $http;
	this.resource_ = $resource('/grails-angular/Note/:key');
}
NoteService.prototype.get = function(successCallback, failCallback) {
  console.log("NoteService get");
  this.http_.get('/grails-angular/Note').success(successCallback).error(failCallback);
}
NoteService.prototype.add = function(obj){
  var result = $q.defer();
  this.http_.post('/grails-angular/Note', obj)
}
angular.module('jg.ngGrails')
       .service('noteService', NoteService);