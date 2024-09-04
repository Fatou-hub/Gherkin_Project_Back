@details-nightly @delete
Feature: delete different account creation

    As a customer
    I want to delete different new account page
    So I can verify if all that contracts are deleted

    @royalty-different-contract-creation
    Scenario Outline: delete <Account Page>
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        When I click on the section account pages
        And I fill "<Id Prod>" in the search bar account pages
        And I delete all "<Id Prod>" created
        Examples:
            | Id Prod | Account Page       |
            | 1111111 | Account Page ASDP  |
            | 2222222 | Account Page ASJE  |
            | 4444444 | Account Page Label |
