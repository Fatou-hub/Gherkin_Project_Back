Feature: checking of TikTok and YouTube and All filter

    Scenario: checking of TikTok and YouTube and All filter
        Given I access to backstage login page
        When I login to the backstage with user "QA USER DAILYCHECK"
        And I access to short Form video page
        When I click on the filter "TIKTOK"
        Then the ISRC information switch to tiktok ISRC
        When I click on the filter "YOUTUBE SHORTS"
        Then the ISRC information switch to YouTube ISRC
        When I click on the filter "ALL"
        Then the ISRC information switch to Youtube and TikTok ISRC
