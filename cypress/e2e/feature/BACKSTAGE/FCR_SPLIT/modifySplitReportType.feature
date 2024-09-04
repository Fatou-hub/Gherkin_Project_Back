@split_crud_scenarios
Feature: Modify split report types
    Scenario Outline: Modify split report types from <initial_reportTypes> to <arrival_reportTypes>
        Given I am on the split page
        And I click on the "collaborators" tab
        And I click on  the "fa-ellipsis_icon_xpath".
        Then I should be able to change the Report type from <initial_reportTypes> to <arrival_reportTypes> through the pop-up window

        Examples:
            | initial_reportTypes | arrival_reportTypes |
            | Short Report        | Full Report         |
            | Full Report         | Short Report        |
            | None:               | None:               |