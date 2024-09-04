@XrayId_CIN-7828 @CIN @smoke
Feature: Validate existing release opening

    As a backstage user,
    I want to be able to verify if an existing release can be opened and validated,
    so that I ensure the release can be edited and that all information is displayed correctly.

    Background:
        Given the user has valid credentials
        And   the user is on the Base URL

    @focus @XrayId_CIN-7299
    Scenario Outline: Open an existing release and validate information
        Given the user logs in classically with profile "<Profile>"
        And   the user navigates to "Catalog Drafts"
        And   the user enters "<ReleaseTitle>" in the search field and clicks the search button
        Then  the user should see the release "<ReleaseTitle>" in the list or the user should create it
        When  the user clicks on the edit icon next to the title "<ReleaseTitle>"
        Then  the user should be redirected to the "Release Information" page
        And   the "Release title" field should display the correct title

        Examples:
            | Profile            | ReleaseTitle               |
            | CIN_USER_CLASSICAL | My First Any Genre Audio   |
            | CIN_USER_CLASSICAL | My First Classical Audio   |
            | CIN_USER_CLASSICAL | My First Jazz Audio        |
            | CIN_USER_CLASSICAL | My First Apple Video       |
            | CIN_USER_CLASSICAL | My First Music Video       |
            | CIN_USER_CLASSICAL | My First Entertainment Vid |
            | CIN_USER_CLASSICAL | My First News Video        |
            | CIN_USER_CLASSICAL | My First Game Video        |
            | CIN_USER_CLASSICAL | My First Ringtone          |
