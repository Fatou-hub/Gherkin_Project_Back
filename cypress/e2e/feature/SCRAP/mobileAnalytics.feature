Feature: analytics

    The user wants to access his dashboards

    Background:

        Given I am connected
        And I am set on my homepage

    @globalStreams
    Scenario: access my analytics (global streams)

        Given I am set on the widget global stream
        When I look at the graph header
        Then The global stream display 7 days by default
        And a percentage is present
        And The percentage is on max 2 numbers

    @globalStreams
    Scenario: action on my graph (global streams)

        Given I am set on the widget global stream
        When I click on a spot of the graph
        Then the stream number gets updated
        And the stream number is coherent

    @latestRelease
    Scenario: access my analytics (latest release)

        Given I am set on the widget latest release
        When I look at the release component
        Then The page displays at least 1 track
        And The page displays maximum 3 tracks
        And each display has one image
        And each display has stream number
        And each display has a release date
        And each display has track's name
        And each display has track's artist

    @latestRelease
    Scenario: access my analytics via CTA (latest releases)

        Given I am on my latest release page
        When I click on "latest releases" label
        Then a release list is displayed
        And this list contains all time streams
        And this list contains releases
        And each release has its own information

    @latestRelease @links
    Scenario: Share a release (latest release)

        Given I am on my latest release page
        When I click on share
        Then The release is shared

    @topTracks
    Scenario: access my analytics (Top tracks)

        Given I am set on the widget top track
        When I look at the top track component
        And The page displays at least 1 track on last seven days
        And The page displays maximum 3 tracks on last seven days
        And each track has one image
        And each track has a stream number
        And each track has a position
        And each track has a name
        And each track has an artist
        And each track has share CTA

    @topTracks
    Scenario: Click on a track and reach the track page (Top tracks)

        Given I am on my top track page
        When I click on a track's cover
        Then I reach the track's page
        And each track has one image
        And each track has a stream number
        And each track has a position
        And each track has a name
        And each track has an artist

    @topTracks @links
    Scenario Outline: Share a track on <social network> (Top tracks)

        Given I am on my top track page
        And I click on a track's cover
        And I reach the track's page
        When I click on share
        And I select <social network>
        Then The release is shared on <social network>

        Examples:
            | social network |
            | Facebook       |
            | Instagram      |
            | Whatsapp       |
