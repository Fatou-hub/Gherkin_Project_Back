@details-nightly @delete
Feature: delete advance settings

    As a customer
    I want to delete all advance setting created
    So I can verify if all advance setting are deleted

    Background: advance settings
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I go to the contract category

    @advance-settings-method1
    Scenario: delete advance settings Method 1
        And I fill "DP1051579C0001" in the search bar contracts
        And I click on the contract "DP1051579C0001"
        And I go to the advance category
        When I delete my contract "Method 1 : Fixed Percentage" in advance page
        And I go to the contract setup category
        And I click on royalty account "Joaquín Puerto" in the contract setup section
        And I put the field advance type on empty to execute other test

    @advance-settings-recoupment
    Scenario: delete advance settings recoupment
        And I fill "DP091178C0003" in the search bar contracts
        And I click on the contract "DP091178C0003"
        And I go to the advance category
        When I delete my contract "recoupment rate per type" in advance page
        And I go to the contract setup category
        And I click on royalty account "Heir Reid" in the contract setup section
        And I put the field advance type on empty to execute other test

    @advance-settings-cross-contract-and-recoupment
    Scenario: delete cross contract recoupment 100% income
        And I fill "DP065186C0001" in the search bar contracts
        And I click on the contract "DP065186C0001"
        And I go to the advance category
        When I delete my contract "Cross Contract Recoupment 100% Income" in advance page
        And I go to the contract setup category
        And I click on royalty account "Silene Editions (Kery James Label)" in the contract setup section
        And I put the field advance type on empty to execute other test
