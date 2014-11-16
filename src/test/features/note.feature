Feature: Simple Feature
  As a user 
  I want to add a question

  Scenario: Adding a question
    Given I am on the main page
    When I click the add button
    And I fill out question information
    And I click submit 
    Then I should see the new question