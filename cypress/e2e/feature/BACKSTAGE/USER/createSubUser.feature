Feature: Backstage : Sub user creation
        As a backstage user with valids credentials for create user
        I want create a sub user
        And delete it

    @XrayId_QA-824 @backstage @Tbackstage @backstageSubUserCreation
    Scenario: Create a sub user and delete it
        Given I access to backstage login page
        When I login to the backstage with user "QA_USER_DAILYCHECK"
        And I access to 'User Access' page
        And I click on "Add a new user" button
        And I fill the new user informations form
        And I submit the new sub user creation form
        Then I am redirected to 'User Access' page
        And the new user is visible in the users table
        When I delete the new user by clicking on his 'Delete' button
        Then I should see a success message appear regarding the deletion of my new user
        And I should no longer see the new user in the user table
