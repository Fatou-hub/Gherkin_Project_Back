@split_crud_scenarios
Feature: Checking of report frequency for a collaborator

    Scenario Outline: Checking of report by switching from <old_status> to <new_status>
        Given I am on the split page
        And I select the tab "collaborators"
        And the collaborator's split table should be visible
        When I click on "frequency_icon_xpath"
        Then I should be able to change the frequency value from <old_status> to <new_status> through the pop-up window

        Examples:
            | old_status  | new_status  |
            | Monthly     | Quarterly   |
            | Quartly     | Semi Annual |
            | Semi Annual | Monthly     |