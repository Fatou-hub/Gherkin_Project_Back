Feature: Create a new SE release with simple title

    @new_release_backstage
    Scenario: Create a new SE release with simple title
        Given I login to the backstage with user "SEY_USER"
        When I create a new audio release
        Then I see a popin for a new release possibility
        And I see my release
