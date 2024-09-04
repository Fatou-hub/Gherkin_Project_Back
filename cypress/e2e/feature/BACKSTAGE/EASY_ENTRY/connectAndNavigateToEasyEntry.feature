@XrayId_CIN-7828 @CIN @smoke @test/baseline-for-bug-tracking
Feature: Comprehensive release creation flow via Easy Entry

    As a backstage user,
    I want to create releases through Easy Entry,
    so that the releases are ready for further validation or editing.

    Background:
        Given the user has valid credentials
        And   the user is on the Base URL

    @XrayId_CIN-7297
    Scenario Outline: Complete flow from login to release creation
        Given the user logs in classically with profile "<Profile>"
        When  the user ensures the visibility of the "One release" button by handling the menu if necessary
        And   the user clicks on the One release button
        And   a pop-up appears with options "Audio", "Video", "Ringtone"
        And   the user selects "<ReleaseType>" and clicks "Next"
        When  the user verifies the genre or video type pop-up for "<ReleaseType>"
        And   the user selects "<GenreOrType>" and navigates to the title creation page
        And   the user enters a title "<Title>" for "<ReleaseType>" release and clicks "Create"
        Then  the user should see the new title "<Title>" for "<ReleaseType>" release created under "<GenreOrType>"

        Examples:
            | Profile            | ReleaseType | GenreOrType         | Title                      |
            | CIN_USER_CLASSICAL | Audio       | Any genre           | My First Any Genre Audio   |
            | CIN_USER_CLASSICAL | Audio       | Western classical   | My First Classical Audio   |
            | CIN_USER_CLASSICAL | Audio       | Jazz                | My First Jazz Audio        |
            | CIN_USER_CLASSICAL | Video       | Apple video         | My First Apple Video       |
            | CIN_USER_CLASSICAL | Video       | Music video         | My First Music Video       |
            | CIN_USER_CLASSICAL | Video       | Entertainment video | My First Entertainment Vid |
            | CIN_USER_CLASSICAL | Video       | News video          | My First News Video        |
            | CIN_USER_CLASSICAL | Video       | Game video          | My First Game Video        |
            | CIN_USER_CLASSICAL | Ringtone    | N/A                 | My First Ringtone          |