Feature: Intranet Smoke Tests

    @dailycheck @intranet_smoketest
    Scenario: Connexion
        Given I access to intranet login page
        When I login to the intranet with user 'QA'
        Then I should be connected to the intranet

    @dailycheck @intranet_smoketest
    Scenario Outline: MNF : <linkText> page is available
        When I click on <linkText> in 'Content Management' menu
        Then the page is available and has no errors message

        Examples:
            | linkText       |
            | "BNF releases" |

    @dailycheck @intranet_smoketest
    Scenario: Test Artist List
        When I click on the intranet logo
        And I click on 'Content Management' icon
        And I click on 'Artists List' in the menu
        And I filter the results by clicking on 'D'
        Then I should retreive the element with the following id 'ui-id-2'
        When I filter the results by clicking on 'L'
        Then I should retreive the element with the following id 'ui-id-3'

    @dailycheck @intranet_smoketest
    Scenario: Test Account List
        When I click on the intranet logo
        And I click on 'Content Management' icon
        When I click on 'Account List' in the menu
        And I filter the results by clicking on 'D'
        And I filter the results by clicking on 'All'
        And I filter the results by clicking on 'A'

    @dailycheck @intranet_smoketest
    Scenario: Test Labels List
        When I click on the intranet logo
        And I click on 'Content Management' icon
        And I click on 'Labels List' in the menu
        Then I should retreive the element with the following id 'ui-id-3'
        When I filter the results by clicking on 'D'
        And I filter the results by clicking on 'H'
        And I filter the results by clicking on 'L'

    @dailycheck @intranet_smoketest
    Scenario: Test Financial
        When I click on the intranet logo
        And I click on 'Financial' icon
        And I click on 'Setting NEW platforms columns for Import' in the menu
        Then I should retreive the element with the following id 'mainDMS-0'
        When I select option 'Spotify' for 'mainDMS'
        And I select option 'TESTLC - Spotify Stream' for 'subDms'
        Then I should see appear the rest of the form

    @dailycheck @intranet_smoketest
    Scenario Outline: Content Management : Multiple edition : <linkText> page is available
        When I click on <linkText> in 'Content Management' menu
        Then the page is available and has no errors message

        Examples: MULTIPLE EDITION
            | linkText             |
            | "Releases edition"   |
            | "Store ID updater"   |
            | "Contributor merger" |
    #| "Bulk Update Dolby"  |

    @dailycheck @intranet_smoketest
    Scenario Outline: Content Management : Tool : <linkText> page is available
        When I click on <linkText> in 'Content Management' menu
        Then the page is available and has no errors message

        Examples: TOOOL
            | linkText                          |
            | "Takedown Reminder"               |
            | "Audio & video file check"        |
            #| "Check autocorrection"              |
            | "MFiT Manager"                    |
            | "Content Dictionaries"            |
            | "iTunes Ticketing System"         |
            | "iTunes tickets KPI"              |
            | "iTunes tickets KPI per holdings" |
            #| "Physical Mapping Referential Tool" |
            | "Polishing Requester"             |
            #| "Statistics"                        |
            | "Takedown Reminder"               |
            | "Tests Data Management"           |
            | "Audio & video file check"        |
            #| "Check title"                       |
            #| "Check autocorrection"              |
            | "XML Testing Tool"                |

    @dailycheck @intranet_smoketest
    Scenario Outline: Deliveries : '<linkText>' pages availability
        When I click on <linkText> in 'Deliveries' menu
        Then the page is available and has no errors message

        Examples:
            | linkText             |
            | "Labels List Export" |
            | "Zimbalam Packs"     |
            | "Genre Matching"     |

    @dailycheck @intranet_smoketest
    Scenario Outline: Admin : Ingestion : '<linkText>' pages availability
        When I click on <linkText> in 'Admin' menu
        Then the page is available and has no errors message

        Examples:
            | linkText                   |
            | "Logs Monitoring"          |
            | "Autocron"                 |
            | "Dictionary"               |
            | "DS Dashboard"             |
            | "LConverter"               |
            | "Reports"                  |
            | "Graph Bench"              |
            | "DS v2 Monitor"            |
            | "Sales Reports Management" |

    @dailycheck @intranet_smoketest
    Scenario Outline: Marketing:'<linkText>' pages availability
        When I click on <linkText> in 'Marketing' menu
        Then the page is available and has no errors message

        Examples:
            | linkText |
#| "Releases"  |
