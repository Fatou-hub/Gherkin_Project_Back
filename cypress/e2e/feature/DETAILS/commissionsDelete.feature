@details-nightly @delete
Feature: delete royalty commissions

    As a customer
    I want to delete different commissions
    So I can verify if different commissions are deleted

    @commissions
    Scenario: delete all commissions
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I go to the contract category
        And I fill "JV627358C0001" in the search bar contracts
        And I click on the contract "JV627358C0001" with a JV reference
        And I go to the commissions category
        Then I delete all commissions