Feature: Login & logout from the Intranet

    @login_intranet @dailycheck @XrayId_QA-431
    Scenario: Login & logout from the Intranet
        Given I access to intranet login page
        When I login to the intranet with user "QA"
        Then I should be connected to the intranet
        When I disconnect from intranet
        Then I should be redirected to the intranet login page