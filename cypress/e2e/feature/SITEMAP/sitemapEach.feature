Feature: Check intranet sitempa xml on 200

    @sitemap
    Scenario: Test the sitemap in env

        When I have the sitemap in my env
        Then I go through each url
