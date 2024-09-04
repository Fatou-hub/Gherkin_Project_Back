@Xrayid_FCR-3490 @creation_split @split_crud_scenarios
Feature: creation of split with different number of releases and collaborators

    Scenario: connexion home page
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        And I should be connected to the backstage
        

    Scenario: Create a split with collaborators
        Given I access to split page
        When I click on the START SETTING SPLITS button
        And I select checkbox of the second release
        And I click on the SET SPLIT button
        And I click on the next button on the split page
        And I choose the first collaborator from the collaborators list
        And I set <firstCollaboratorShare> for the first collaborator
        And I choose the second collaborator from the collaborators list
        And I set <secondCollaboratorShare> for the second collaborator
        And I click on the confirm button
        Then I have well selected my collaborators
        Then I click on the Apply button to create my split successfully
        Then I should see appear a success modal window for my created split
        Then I close split creation success modal

Examples:
    |firstCollaboratorShare|secondCollaboratorShare|
    |50                    |50                     |