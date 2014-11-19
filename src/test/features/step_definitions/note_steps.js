var noteStepDefinitionWrapper = function() {

	this.World = require("../support/world.js").World; // overwrite default
	// World constructor

	this.Given(/^I am on the main page$/, function(callback) {
		console.log("step 1");
		this.visit('http://localhost:8080/grails-angular', callback);
	});

	this.When(/^I click the add button$/, function(callback) {
		console.log("step 2");
		this.clickLink('#add-question', callback);
	});

	this.When(/^I fill out question information$/, function(callback) {
		console.log("step 3");
		this.fillQuestionForm(callback);
	});
	this.Then(/^I should see the new question$/, function(callback) {
		console.log("step 4");
		this.checkResults(callback)
	});
};
module.exports = noteStepDefinitionWrapper;