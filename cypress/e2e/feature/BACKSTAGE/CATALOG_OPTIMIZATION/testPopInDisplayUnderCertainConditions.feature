Feature: Test the display of pop in under certain conditions

    @XrayId_DMV2-2994 @catalog_optimization
    Scenario: Test the display of pop in under certain conditions
        Given a producer with BSD access
        When he loads the BSD page via the menu
        And the user loads the first track
        And the user clicks on the Information button on track page
        Then a popup opens on the track page
        And the information about X Releases is displayed
        And the Last release date is displayed