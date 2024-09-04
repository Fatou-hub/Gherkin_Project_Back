Feature: Test HTTP Callback
    As an user with valid credentials,
    I want test this two HTTP callback

    @dailycheck @http_callback_env_prod
    Scenario: Test https://callback.believedigital.com/test/demo
        Given I go to "https://callback.believedigital.com/test/demo"
        Then I should see "ok"

    @dailycheck @http_callback_env_test
    Scenario: Test https://callback-http-02.test.believe.fr/
        Given I go to "https://callback-http-02.test.believe.fr/"
        Then I should see nothing