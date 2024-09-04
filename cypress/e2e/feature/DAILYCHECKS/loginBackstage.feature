Feature: Login & Logout from backstage

    @login_backstage @Tbackstage @dailycheck
    Scenario: Login & Logout from backstage
        Given I access to backstage homepage
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        Then I should be connected to the backstage
        When I disconnect from backstage
        Then I should be redirected to the backstage login page