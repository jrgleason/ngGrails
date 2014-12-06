/*jslint node: true */
"use strict";
var Browser = require('zombie'),
    assert = require("assert"),
    Chance = require('chance');

var WorldConstructor = function WorldConstructor(callback) {
	this.browser = new Browser();
	this.chance = new Chance();
	var addForm = "#add-form";
	var _this = this;
	function addQuestionFormLoaded(window) {
		return window.document.querySelector(addForm);
	}
	var world = {
		visit : function(url, callback) {
			this.browser.visit(url);
			this.browser.wait(function() {
				console.log("Waiting to callback");
				callback();
			});
		}.bind(this),
		clickLink : function(selector, callback) {
			this.browser.clickLink(selector, function() {
				var promise = _this.browser.wait(addQuestionFormLoaded, null)
				console.log("Test 123");
				promise.then(function() {
					console.log("Test");
					callback();
				})
			});
		}.bind(this), 
		fillQuestionForm: function(callback){
			var title = this.chance.string({length: 20});
			assert.ok(this.browser.query(addForm), "It should have the add form");
			this.browser.fill('textArea[id^="taHtmlElement"]', "Test Desc").fill("#questionText", this.title);
			this.browser.pressButton("Add Note", function() {
				callback();
			});
		}.bind(this),
		checkResults: function(callback){
			var x = this.browser.html(".question-text");
			var hasText = (x.indexOf(this.title) > -1)
			assert.equal(hasText, true, "The title should show up somewhere in the questions text.");
			callback();
		}.bind(this)
	}

	callback(world); // tell Cucumber we're finished and to use our world
						// object instead of 'this'
};
exports.World = WorldConstructor;