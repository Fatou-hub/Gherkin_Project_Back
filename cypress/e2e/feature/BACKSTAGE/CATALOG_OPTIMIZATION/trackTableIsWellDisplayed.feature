Feature: Test the correct display of the page with the right columns

    @XrayId_DMV2-2915 @catalog_optimization
    Scenario: Test the correct display of the page with the right columns
        Given a producer with BSD access
        When he loads the BSD page via the menu
        And the first column corresponds to tracks in track table
        And the second column corresponds to first released in track table
        And each line represents a valid Spotify ISRC
