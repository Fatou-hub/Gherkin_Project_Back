@split_smoke
Feature:checking split type by default
    Scenario:split type by default checking
        Given I am on the main split page
        And I am logged as a producer
        And I click "collaborators" tab
        When I click on "fa fa-ellipsis-v icon"
