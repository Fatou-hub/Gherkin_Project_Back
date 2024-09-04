Feature: Login via the mobile app

    The user wants to login on backstage on the mobile view
    @login
    Scenario Outline: Login OK and access settings to verify user connection
        Given I have credentials
        And I am on the homepage disconected
        When I connect myself with the <user>/<password> combination
        Then I get redirected on the homepage
        And The background is the good one
        And the logo is present
        When I click on settings
        Then I have my <username> in the top right

        Examples:
            | user  | password  | username   |
            | user1 | qwerty123 | John Wayne |

    @login
    Scenario Outline: Login <cause>
        Given I have credentials
        And I am on the homepage disconected
        When I connect myself with the <user>/<password> combination
        Then I get redirected on the homepage disconected
        And an error message pop out with this text : <error_message>

        Examples:
            | cause                          | user                 | password        | error_message      |
            | failure account does not exist | test2_not_exist      | qwerty123       | login KO           |
            | failure wrong password         | test1_exist          | qwerty123_wrong | login KO           |
            | failure wrong password         | test3_not_authorized | qwerty123       | access not granted |

    @login
    Scenario Outline: Logout <status> Android
        Given I have credentials
        And I am on the homepage disconected
        When I connect myself with the <user>/<password> combination
        Then I get redirected on the homepage
        When I click on the logout button
        Then I get on the login page

        Examples:
            | status  | user  | password  |
            | success | test1 | qwerty123 |

    @login
    Scenario Outline: Logout <status> IOS
        Given I have credentials
        And I am on the homepage disconected
        When I connect myself with the <user>/<password> combination
        Then I get redirected on the homepage
        When I click on the logout button
        And I click on the "yes" option on the popin
        Then I get on the login page

        Examples:
            | status  | user  | password  |
            | success | test1 | qwerty123 |