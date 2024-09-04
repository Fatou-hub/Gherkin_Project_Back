Feature: Release page

    The user wants to access his release page and the different dashboard

    Background:
        Given I am connected
        And I click on a release cover

    @releasePage
    Scenario: access data header widget
        When I access the data header
        Then each display has a cover image
        And each display has a release name
        And each display has a release artist
        And each display has a release date
        And each display has a share button

    @releasePage
    Scenario: access the global stream number widget
        When I access the stream number
        Then the graph is set on 7 days by default
        And a stream number is displayed
        And an index of evolution is displayed

    @releasePage
    Scenario: access top three country widget
        When I access the top three country
        Then the name of the country is displayed
        And the flag of the country is displayed
        And a stream number of this country is displayed
        And a position is displayed for each country

    @releasePage
    Scenario: access top three platform widget
        When I access the top three platform
        Then the name of the platform is displayed
        And a stream number of this platform is displayed
        And the percentage of this platform is displayed