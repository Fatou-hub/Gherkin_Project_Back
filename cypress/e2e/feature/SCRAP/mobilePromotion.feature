Feature: Promotion

    The user intend to share his content on social network

    @spotlights
    Scenario Outline: Share a release on <social network> network (Top tracks) Spotlight widget

        Given I am on my track's page
        When I click on partager
        And I click on the CTA partager
        And I click on <social network> logo
        Then The release is shared on <social network>

        Examples:
            | social network |
            | Facebook       |
            | Instagram      |
            | Whatsapp       |