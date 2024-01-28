Feature: Add a computer

  Background:
    Given I am on the computers page
    And I click on the Add a new computer button

  Scenario: Successfully add a new computer
    When I enter a valid computer name
    And I enter a valid introduced date
    And I enter a valid discontinued date
    And I select a company
    And I click on the Create this computer button
    Then I should see the success message

  Scenario: Add a new computer with missing required information
    When I enter a valid introduced date
    And I enter a valid discontinued date
    And I select a company
    And I click on the Create this computer button
    Then I should see the error message on the Computer name field

  Scenario: Add a new computer with invalid introduced date
    When I enter a valid computer name
    And I enter an invalid introduced date
    And I enter a valid discontinued date
    And I select a company
    And I click on the Create this computer button
    Then I should see the error message on the Introduced date field

  Scenario: Add a new computer with invalid discontinued date
    When I enter a valid computer name
    When I enter a valid introduced date
    And I enter an invalid discontinued date
    And I select a company
    And I click on the Create this computer button
    Then I should see the error message on the Discontinued date field

  Scenario: Add a new computer with discontinued date before introduced date
    When I enter a valid computer name
    When I enter a valid introduced date
    And I enter a valid discontinued date before the introduced date
    And I click on the Create this computer button
    Then I should see the error message on the Discontinued date field

  Scenario: Cancel adding a new computer
    When I fill all the fields on the form
    And I click on the Cancel button
    And I see the computers page
    And I click on the Add a new computer button
    Then I should see the form with empty fields
