Feature: login on the intranet and crawl links

    @crawl
    Scenario: crawl the intranet once connected
        Given I login to the intranet with user "QA"
        When it crawls the homepage
        Then the link should open correctly