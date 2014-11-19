var Browser = require('zombie'),
    assert = require("assert"),
    Chance = require('chance');
var noteStepDefinitionWrapper = function() {
	var browser = null,
	    silent = false,
	    debug = false,
	    chance = new Chance(),
	    title;
	var Given = When = Then = this.defineStep;
	this.Before(function(callback) {
		browser = new Browser();
		browser.setMaxListeners(20);
		setTimeout(callback(), 5000);
		title = chance.string({length: 20});
	});

	this.World = require("../support/world.js").World; // overwrite default
	// World constructor

	var addForm = "#add-form";
	
	function addQuestionFormLoaded(window) {
		return window.document.querySelector(addForm);
	}

	this.Given(/^I am on the main page$/, function(callback) {
		console.log("Step 1");
		// console.log(JSON.stringify(require("../support/world.js").World));
		browser.visit('http://localhost:8080/grails-angular', {
			silent : silent,
			debug : debug
		});
		browser.wait(function() {
			callback();
		});
	});

	this.When(/^I click the add button$/, function(callback) {
		browser.clickLink('#add-question', function() {
				var promise = browser.wait(addQuestionFormLoaded, null)
				promise.then(function() {
					callback();
				})
		});
	});

	this.When(/^I fill out question information$/, function(callback) {
		assert.ok(browser.query(addForm), "It should have the add form");
		browser.fill("#questionDesc", "Test Desc").fill("#questionText", title);
		callback();
	});

	this.When(/^I click submit$/, function(callback) {
		browser.pressButton("Add Note", function() {
			callback();
		});
	});
	this.Then(/^I should see the new question$/, function(callback) {
		var x = browser.html(".question-text");
		var hasText = (x.indexOf(title) > -1)
		assert.equal(hasText, true, "The title should show up somewhere in the questions text.");
		callback();
	});
};
module.exports = noteStepDefinitionWrapper;