Feature: redirection to info track page
    Scenario: redirection to info track page
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        And I access to short Form video page
        And I filter the results from the last 90 days
        When I click on on the first row of the track table
        Then I am redirected to the information page of this track
        And my track information page is well displayed
