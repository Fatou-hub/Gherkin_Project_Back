Feature: Test Api Content 
As an user with valid credentials,
I want test all Api-content endpoints 
 
Scenario: Get Api authorization
    Given I send a POST request with valid credentials at API Content authorization endpoint
    Then I should get an access token

  @get_product
  Scenario Outline: Retrieve product by ID
    When  I get a product <ID>
    Then  status code is <expected>
    
    Examples:
        |      ID |   expected |
        |    "12" |       "404"|
        | "666666"|       "200"|
        |    "ah" |       "400"|


  @get_producer
  Scenario Outline: Retrieve producer by ID
    When I get a producer <ID>
    Then status code is <expected>
    
    Examples:
        |      ID |   expected |
        |    "12" |       "500"|
        |    "123"|       "200"|
        |   "haha"|       "200"|


