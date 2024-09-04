Feature: Test the display of each track BSD component

    @XrayId_DMV2-2991 @catalog_optimization
    Scenario: Test the display of each track BSD component
        Given I access to backstage login page
        When I login to the backstage with user "PETITBISCUIT_PRODUCER"
        When he loads the BSD page via the menu
        And the user loads the first track
        Then he can see the ISRC track name
        And he can see the ISRC version
        And he can see the ISRC nb release
        And he can see the oldest cover