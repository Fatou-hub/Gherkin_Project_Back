@details-nightly @delete
Feature: delete royalty rate settings

    As a customer
    I want to delete different rate settings
    So I can verify if different rate settings are deleted
    
    Background: rate settings
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I go to the contract category
        And I fill "DP687094C0001" in the search bar contracts
        And I click on the contract "DP687094C0001"

     @royalty-general-rate-settings
     Scenario: delete the general rate settings of my contract
        When I go to the royalty rates category
        When I delete physical royalty rates
        And I delete digital royalty rates

    @royalty-neighboring-rights
    Scenario: delete the neighboring rights of my contract
        When I go to the neighboring rights category
        And I delete the neighboring rights rates
    
    @royalty-expenses-oi
    Scenario: delete the expenses & OI of my contract
        When I go to the expense & OI category
        And I delete all datas in services expenses & recharges
        