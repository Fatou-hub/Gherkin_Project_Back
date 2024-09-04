Feature: Test Test API Riemann status
    As an user with valid credentials on Riemann API,
    I want to make sure that there are no critical alerts returned by the Riemann API

    @test_api_riemann
    Scenario: Access to Riemann
        Given I go to "http://10.91.255.13:6258/#API"
        And I wait 3 seconds

    @test_api_riemann
    Scenario: Test 'API'
        When I am on 'API' tab
        Then there are 75 status OK

    @test_api_riemann
    Scenario: Test 'DLV'
        When I click on 'DLV' in Riemann menu
        Then I am on 'DLV' tab
        Then the 'waiting deliveries' is less than 150k
        And the 'ready to deliver' is less than 150k
        And the 'last errors' is less than 10k

    @test_api_riemann
    Scenario: Test 'ENC'
        When I click on 'ENC' in Riemann menu
        Then I am on 'ENC' tab
        And the 'Track to encode' is less than 10k