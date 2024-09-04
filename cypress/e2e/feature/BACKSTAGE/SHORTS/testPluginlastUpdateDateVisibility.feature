Feature: Test DSPs lastUpdate widget visibility

    @feature("YouTubeShortFormVideos")
    @backstage @short_form
    Scenario: connect to backstage and access to shortForm videos page
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        Then I should be connected to the backstage

    @feature("YouTubeShortFormVideos")
    @backstage @short_form
    Scenario Outline: Test last update widget for <DSP>
        When I access to backstage homepage
        And I access to short Form video page
        Then the <DSP> last upadte widget is well display
        When I click on on the first row of the track table
        Then the <DSP> last upadte widget is well display

        Examples: <DSP>

            | DSP              |
            | "TikTok"         |
            | "YouTube Shorts" |