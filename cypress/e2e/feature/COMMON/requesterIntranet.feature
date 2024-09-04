Feature: Use requester on intranet

    @requester_intranet
    Scenario: check "Neighboring rights" producers

        Given I login to the intranet with user "QA"
        And I navigate to the "producer requester"
        When I prepare my research on account requester with field label "Neighboring rights" which is typed as "checkbox" and equal to "1"
        And I apply filters on Release Requester
        Then I check number rows founded by requester is equal to 2029
