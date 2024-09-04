@split_crud_scenarios
Feature: create a split with percentage for collaborators

    Scenario Outline: create a split with percentage for collaborators
        Given I am on the split page
        When I click on the button "SET SPLITS"
        Then I access to "Split Royalties" page
        And I select a "Release" in the first column of the table
        And I click on the right button "SET SPLITS"
        And I click on the "NEXT" button
        And I select collaborator
        And I fill in the first colummn with <value_1> of the split rate of the collaborator I selected
        And I fill in the second colummn with <value_2> of the split rate of the collaborator I selected
        And I click on "CONFIRM" button
        Then <value_1> should be visible for 1st collaborator
        Then <value_2> should be visible for the 2d collaborator

        Examples:
            | value_1 | value_2 |
            | 50      | 25      |
            | 33      | 45      |
            | 50      | 50      |