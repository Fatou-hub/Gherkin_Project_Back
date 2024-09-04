@XrayId_DTLS-734 @details-nightly
Feature: Different New Account creation use case

  As a customer
  I want to create and attached different new account page
  So I can verify if all that contracts are created

  @royalty-different-contract-creation
  Scenario Outline: <Account Page> creation
    Given I access to details login page
    When I login to Details with user "QA2"
    And I click on the Label tab
    And I click on the Royalty subtab
    And I click on the plus button
    And I enter "<Id Prod>" in the id Prod section
    And I enter "<Account Page>" in the account page section
    And I select "<Contract Type>" in the contract page section
    And I select "<Legal Entity>" in the legal entity section
    And I select "<Cost Center>" in the cost center section
    And I enter "<Brand>" in the brand section
    And I enter "13/02/2021" in the start date section
    And I enter "23/08/2027" in the end date section
    And I click on the button Ok on Details
    Then the "<Id Prod>" is displayed in the input id prod
    And the "<Account Page>" is displayed in the input account page
    And the "<Contract Type>" is displayed in the input contract type
    And the "<Legal Entity>" is displayed in the input legal entity
    And the "<Cost Center Label>" is displayed in the input cost center
    And the "<Brand>" is displayed in the input brand

    Examples:
      | Id Prod | Account Page       | Contract Type         | Legal Entity                       | Cost Center | Cost Center Label                     | Brand                                 |
      | 1111111 | Account Page ASDP  | AS Distro Premium     | FR001 - Believe Digital SA         | 54          | Artist Services Distro Premium France | Artist Services Distro Premium France |
      | 2222222 | Account Page ASJE  | AS Joint Exploitation | LU002 - Believe International SARL | 79          | Artist Services JE France             | Animal 63                             |
      | 4444444 | Account Page Label | Label                 | LU002 - Believe International SARL | 163         | Label 6&7 - Label                     | 6&7                                   |

