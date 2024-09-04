@delete_split @split_crud_scenarios
Feature: delete a split

    Scenario: connexion home page
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        And I should be connected to the backstage

    Scenario: delete a split
        Given I access to split page
        And I am on the split tab
        And the split table is visible
        When I click on the bin icon to delete a release
        And a modal window should be opened to confirm
        # Then I click on the delete button