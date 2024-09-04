@split_smoke
Feature: visualization of the three block for page where split are not created yet
    Scenario:visualization of the three block for page
        Given I am on the main split page
        And I am a producer
        When I navigate through the page
        Then I should see block 1
        And I should see block 2
        And I should see block 3