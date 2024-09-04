Feature: Test Swagger availability

    @XrayId_QA-439 @dailycheck @swagger_availability
    Scenario: Check Swaggers availability in PROD
        # Check Swagger in PROD
        Given I access to API Auth Swagger
        Then I should see the api "Auth" interface