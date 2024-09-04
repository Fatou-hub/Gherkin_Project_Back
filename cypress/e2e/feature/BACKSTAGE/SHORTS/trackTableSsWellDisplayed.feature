Feature: Checking of track table's information

    @feature("YouTubeShortFormVideos")
    @backstage @short_form
    Scenario: Checking of track table's information
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        And I access to short Form video page
        And I filter the results from the last 90 days
        Then the column 1 corresponds to "Track" field in track table
        And the column 2 corresponds to "Last release date" field in track table
        And the column 3 corresponds to "Creations" field in track table
        And the column 4 corresponds to "Territories" field in track table
        And the column 5 corresponds to "Views" field in track table
        And the column 6 corresponds to "Audio streams" field in track table
        Then the data displayed in the table is consistent
