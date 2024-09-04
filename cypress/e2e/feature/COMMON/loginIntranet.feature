Feature: Login via intranet

    @login_intranet @login_intranet_only
    Scenario: Login OK and access to the Intranet

        Given I have intranet credentials
        And I access to intranet login page
        When I login to the intranet with user "QA"
        Then I should be connected to the intranet
