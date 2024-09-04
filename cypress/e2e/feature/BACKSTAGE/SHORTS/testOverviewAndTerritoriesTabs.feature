Feature: Tabs "Overview" and "Territories" testing

    Scenario:Tabs "Overview" and "Territories" testing
        Given I access to backstage login page
        When I login to the backstage with user "QA USER DAILYCHECK"
        And I access to short Form video page
        And I have my button pressed by Default on "Overview" tab of this track
        Then the overview is well displayed
        When I clik on the tab "territories"
        Then the territories table is well displayed