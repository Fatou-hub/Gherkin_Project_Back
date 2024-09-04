Feature: Check intranet sitempa xml on 200

    @sitemap
    Scenario: 200 on 4 pages

        Given I have the sitemap.xml
        When I parse each url
        Then I have a status code 200
