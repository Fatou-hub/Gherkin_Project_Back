@my_tag
Feature: unit testing

    Background: It is the background
        Given I want to do unit test

    @unit_testing @XrayId_QA-555
    Scenario: I make unit test
        Given I want to do unit test
        When I make a unit test
        Then I assert a unit test will pass

    @unit_testing @XrayId_QA-666
    Scenario: I make unit test
        Given I want to do unit test
        When I make a unit test
        Then I assert a unit test will not pass
        And I assert a unit test will pass