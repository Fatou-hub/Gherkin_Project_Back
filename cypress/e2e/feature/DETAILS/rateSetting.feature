@XrayId_DTLS-864 @details-nightly
Feature: Royalty rate settings
    As a customer
    I want to create different rate settings
    So I can verify if different rate settings are created

    Background: Rate settings
        Given I access to details login page
        When I login to Details with user "QA2"
        And I click on the Label tab
        And I click on the Royalty subtab
        And I go to the contract category
        And I fill "DP687094C0001" in the search bar contracts
        And I click on the contract "DP687094C0001"

    @royalty-general-rate-settings
    Scenario: set the general rate settings of my contract
        When I go to the royalty rates category
        And I setup a physical rate to "50.00" with base "income"
        And I setup a digital rate to "80.00" with base "income"
        Then the rate "50.00" is displayed in the input rate physical
        And the rate "80.00" is displayed in the input rate digital

    @royalty-neighboring-rights
    Scenario: set the neighboring rights of my contract
        When I go to the neighboring rights category
        And I setup a general royalty rate at "50.00" to the neighboring rights
        Then the rate "50.00" is displayed in the input rate to the neighboring rights

    @royalty-expenses-oi
    Scenario Outline: set the "<service name>"
        When I go to the expense & OI category
        And I click on the plus button in the expense & OI category
        Then the modal add services expenses is displayed
        When I select a "<services>" in the add services expenses modal
        Then the correct image is displayed in the services expenses modal
        When I setup a coverage expense services rate at "<coverage>" in services expenses & recharges
        And I setup a share expense services rate at "<share>" in services expenses & recharges
        Then the rate "<coverage>" is displayed in the input coverage in services expenses & recharges

        Examples:
            | service name                | services | coverage | share  |
            | Brand Partnership - Believe | 52       | 10.00    | 100.00 |
            | Compilation                 | 68       | 20.00    | 100.00 |
            | Merchandising - Believe     | 54       | 30.00    | 100.00 |


