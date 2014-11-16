/*jslint node: true */
"use strict";
var zombie = require('zombie');
var WorldConstructor = function WorldConstructor(callback) {
  this.browser = new zombie();
  var world = {
    visit: function(url, callback){
    	this.browser.visit(url, callback);
    }
  };

  callback(world); // tell Cucumber we're finished and to use our world object instead of 'this'
};
exports.World = WorldConstructor;