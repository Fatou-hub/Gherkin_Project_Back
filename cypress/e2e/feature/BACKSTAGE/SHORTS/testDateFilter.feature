Feature: Filter testing on table page

    @feature("YouTubeShortFormVideos")
    @backstage @short_form
    Scenario: Access to shortForm videos page
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        And I access to short Form video page

    @feature("YouTubeShortFormVideos")
    @backstage @short_form
    Scenario Outline:Test date filter <date>
        When I access to backstage homepage
        And I access to short Form video page
        And I filter the results from the last <date> days
        Then the data displayed in the table is consistent

        Examples: date : <date>

            | date |
            | 7    |
            | 28   |
            | 90   |
            | 365  |
