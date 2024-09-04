Feature: Test Covers
    Test all the images on the test page and check that they are clearly visible

    @test_cover
    Scenario: Access to 'http://covers.believedigital.com/tests/testImages.php'
        Given I access to test covers page
        And I wait 45 seconds

    @test_cover
    Scenario Outline: Check covers in <categoryName>
        Then there are <nbCovers> covers in <categoryName>
        And all covers in this section are displayed

        Examples:
            | categoryName                                | nbCovers |
            | "PENDING ALBUM WITHOUT TOKEN"               | 1        |
            | "NO PREVIEW"                                | 3        |
            | "MAIN COVER"                                | 5        |
            | "MAIN COVER WITHOUT TOKEN"                  | 5        |
            | "PENDING ALBUM BELIEVE"                     | 5        |
            | "PENDING ALBUM ZIMBALAM"                    | 5        |
            | "PENDING ALBUM WITHOUT TOKEN"               | 1        |
            | "PENDING ALBUM WITHOUT TOKEN (public)"      | 1        |
            | "CONFIDENTIAL ALBUM WITHOUT TOKEN (public)" | 1        |
            | "BACKGROUND PLAYER"                         | 3        |
            | "BELIEVEBAND"                               | 2        |
            | "EMAIL GRABBER"                             | 1        |
            | "BACKSTAGE HEADER LOGO"                     | 1        |
            | "PLAYER BACKGROUND"                         | 2        |
            | "ZIMBALAM BRANDING"                         | 1        |
            | "STORE LOGOS"                               | 6        |
            | "STORE LOGOS (on covers)"                   | 6        |
            | "ECRM NEWSLETTER IMAGE"                     | 2        |
            | "ICON INTRANET"                             | 3        |
            | "VIDEO THUMBS"                              | 1        |
            | "PRODUCER IMAGES"                           | 2        |
            | "PROMO SCREENSHOTS"                         | 3        |
            | "INTRANET USERS"                            | 2        |
