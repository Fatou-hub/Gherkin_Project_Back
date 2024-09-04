@XrayId_DTLS-865 @details-nightly
Feature: Royalty commissions

    As a customer
    I want to create different commissions
    So I can verify if different commissions are created

    @commissions
    Scenario: set all the commissions
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I go to the contract category
        And I fill "JV627358C0001" in the search bar contracts
        And I click on the contract "JV627358C0001" with a JV reference
        And I go to the commissions category
        And I setup the digital distribution commission
        And I setup the JE management commission
        And I setup the physical distribution commission
        Then the 3 commissions are displayed