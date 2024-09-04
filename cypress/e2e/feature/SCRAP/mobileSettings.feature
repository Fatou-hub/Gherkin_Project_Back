Feature: change language in settings

    The user has his application set in french, an he wants to set it in english

    @settings
    Scenario Outline: Change language
        Given I am connected
        And I have my phone set in <language_ini>
        And I click on my settings
        And I access my settings
        When I click on the CTA "langue"
        And I choose <language_ter>
        Then language <language_ter> is set on different menu

        Examples:
            | language_ini | language_ter |
            | english      | french       |
            | french       | english      |