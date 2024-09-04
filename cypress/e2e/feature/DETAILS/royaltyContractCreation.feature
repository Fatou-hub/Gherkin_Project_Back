@XrayId_DTLS-735 @details-nightly
Feature: Royalty contract creation

    As a customer
    I want to create and attached a new Royalty Contract using an existing Royalty Account
    So I can verify if that contract is created

    Background: Royalty contract
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I fill "620281" in the search bar account pages
        And I select the first result in the account pages list

    @royalty-contract-creation
    Scenario: royalty contract creation from an existing royalty account
        And I click on the green plus button on the top right
        And I fill the Account name "Chativesle Check"
        And I select the Account name "Chativesle Check"
        And I fill in the Contrat name text field "Test - scenario 2"
        And I click on the create blank contract button
        Then the royalty contract "Test - scenario 2" is created and is visible at the bottom of the contract list

    @royalty-contract-creation-new-account
    Scenario: royalty contract creation from a new royalty account
        And I click on the green plus button on the top right
        And I fill "Test QA" in the search bar royalty accounts
        And I click on the create new royalty account button
        Then the account section value is "Test QA"
        When I fill the royalty account's needed informations
        And I click on the Next button
        And I fill in the Contrat name text field "Test QA - Album 1"
        And I select the tickbox for the catalog auto-attachment
        And I click on the create blank contract button
        Then the royalty contract "Test QA - Album 1" is created and is visible at the bottom of the contract list

    @royalty-contract-duplication-same-account
    Scenario: Duplication of a Royalty contract from the same royalty account
        And I click on the green plus button on the top right
        And I fill the Account name "Chativesle Check"
        And I select the Account name "Chativesle Check"
        And I fill in the Contrat name text field "Duplicate test contract"
        And I click on the Copy contract button
        Then the royalty contract "Duplicate test contract" is created and is visible at the bottom of the contract list
        And it has the same value as original contract "DT-00000343 Chativesle Check"
