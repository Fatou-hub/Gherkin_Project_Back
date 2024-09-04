Feature: Login via backstage

    @login_backstage
    Scenario: Login OK and access to the Backstage

        Given I have backstage credentials
        And I access to backstage homepage
        When I login to the backstage with user "QA_USER"
        Then I should be connected to the backstage
