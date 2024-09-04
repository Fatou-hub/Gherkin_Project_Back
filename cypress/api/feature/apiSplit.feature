Feature: Test Api Split 
As an user with valid credentials,
I want test all Api-Split endpoints 
 
  @get_collaborator
  Scenario Outline: Retrieve collaborator by ID

    When  I get a collaborator <ID>
    Then  status code is <expected_code>
    And collaborator name is <expected_name>
    And collaborator role is <expected_role>
    
    Examples:
        |      ID |   expected_code |    expected_name|   expected_role |
        |      "1"|            "200"|      "Youthstar"|       "artists" |
        |     "23"|            "200"|   "Pierre Mussi"|      "producer" |
        |      "0"|            "404"|  "expected_name"|      "producer" |
        |     "ah"|            "405"|  "expected_name"|      "producer" |


