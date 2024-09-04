@details-nightly @delete
Feature: delete project ID creation

    As a customer
    I want to delete a new project ID
    So I can verify if the project ID is deleted

    @royalty-project-id
    Scenario: Delete the project ID created
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        When I click on the Projects subtab
        And I search my project "KULGAVA447"
        And I delete my project