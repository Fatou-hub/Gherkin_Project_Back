@XrayId_DTLS-859 @details-nightly
Feature: Project ID creation

    As a customer
    I want to create a new project ID
    So I can verify if the project ID is created

    @royalty-project-id
    Scenario: As an user, I want to create a new project ID
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I go to the contracts category
        And I fill "DP687094C0001" in the search bar contracts
        And I click on the contract "DP687094C0001"
        And I click on the contract items tab
        And I click on the green plus button of the project section
        And I search the project ID "KULGAVA447"
        And I click on the create new project button
        And I input the project ID "KULGAVA447"
        And I input the artist name "Test scenario 4,5"
        And I input the title "Test scenario 4,5"
        And I input the label "Believe"
        And I click on the button Ok
        Then the project "KULGAVA447 - Test scenario 4,5 - Test scenario 4,5" is added to the project section of the contract items page