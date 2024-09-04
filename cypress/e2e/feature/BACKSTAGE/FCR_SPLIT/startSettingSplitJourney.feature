@smoke_test
Feature: Access the split journey
    Scenario: Access the split journey
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        And I should be connected to the backstage
        And I click on the split message on Toggle menu
        Then I access to split page