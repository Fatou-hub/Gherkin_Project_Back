Feature: Login via backstage again

    @login_backstage_again
    Scenario: Login OK and access to the Backstage

        Given I have backstage credentials
        When I login to the backstage with user "SEY_USER"
        Then I should be connected to the backstage
