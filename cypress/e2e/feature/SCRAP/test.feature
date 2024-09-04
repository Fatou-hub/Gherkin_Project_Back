@settings
Feature: blablba
    balblalabla
    Scenario Outline: balblabla
        Given I am connected
        And I have my phone set in <language_ini>
        And I click on my settings
        And I access my settings
        When I click on the CTA "langue"zd
        And I choose <language_ter>
        Then language <language_ter> is set on different menu

        Examples:
            | language_ini | language_ter |
            | english      | french       |
            | french       | english      |