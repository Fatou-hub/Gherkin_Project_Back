Feature: Backstage smoketest

    @backstage_smoketest @dailycheck
    Scenario: Login Backstage
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"

    @backstage_smoketest @dailycheck
    Scenario Outline: Test Main Menu : <headerTitle> page is available
        Given I access to backstage homepage
        When I access to <itemName> in the backstage main menu
        Then the page header title is <headerTitle>
        And the page content is well display

        Examples:
            | itemName                          | headerTitle                                      |
            | "Multiple releases"               | "New Release > Multiple releases"                |
            # In prod we are redirected to https://backstage-marketing.com/releases but in preprod we are redirected to Overview
            #|  "Promotion"          | "New Release > Overview"                     |
            | "Catalog/All Releases"            | "Catalog > All Releases"                         |
            | "Catalog/Drafts"                  | "Catalog > Drafts"                               |
            | "Catalog/Correction Requested"    | "Catalog > Correction Requested"                 |
            # Catalog => Artists only available in prod with Test02 (KO on producer 18 with Petitbiscuit"
            #|  "Catalog/Artists" | "Catalog > Artists"              |
            | "Analytics/Daily Trends"          | "Analytics > Daily Trends"                       |
            # Not the same text => Playlists & Charts in PROD Playlists & Charts(beta) in producer18
            #|  "Analytics/Playlists & Charts"   | "Analytics > Playlists & Charts"   |
            | "Analytics/TikTok"                | "Analytics > Overview"                           |
            | "Analytics/Video Trends"          | "Analytics > Overview"                           |
            # Catalog ! pas catalogUE !
            | "Analytics/Catalog optimization " | "Analytics > Catalogue Page"                     |
            | "Financial/Payment & operations"  | "Financial > Payment & operations : Maintenance" |
            | "Financial/Financial reports"     | "Financial > Financial Reports"                  |
            | "Financial/Financial analytics"   | "Financial > Financial analytics"                |
            | "Financial/Split  "               | "Financial > SPLIT"                              |
            #|  "Neighbouring Rights/Neighbouring Rights Registration Requests" | "Neighbouring Rights > Neighbouring Rights Registration Requests" |
            #|  "Neighbouring Rights/Physical Sales Declaration"                | "Neighbouring Rights > Physical Sales Declaration"                |
            #|  "Neighbouring Rights/Reports And Payments"                      | "Neighbouring Rights > Reports And Payments"                      |
            | "Legal"                           | "Legal > YouTube Conflicts"                      |

    @backstage_smoketest @dailycheck
    Scenario Outline: Test User Menu : <headerTitle> page is available
        When I access to <itemName> in the backstage user menu
        Then the page header title is <headerTitle>
        And the page content is well display

        Examples:
            | itemName           | headerTitle                                         |
            | "Profile"          | "Settings > Profile"                                |
            | "Tax information"  | "Settings > Tax information"                        |
            | "Bank Information" | "Settings > Payment method and payment information" |
            | "User Access"      | "Settings > User Access"                            |

    @backstage_smoketest @dailycheck
    Scenario: Test Release Creation Form
        When I access to 'One release' in the backstage main menu
        Then I should see appear the modal 'New release'
        And the release creation form is well display