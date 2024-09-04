@details-nightly @delete
Feature: delete royalty contract creation

  As a customer
  I want to delete all royalty contract created
  So I can verify if all contracts are deleted

  Background: Royalty contract
    Given I access to details login page
    When I login to Details with user "QA2"
    And I click on the Label tab
    And I click on the Royalty subtab
    And I fill "620281" in the search bar account pages
    And I select the first result in the account pages list

  @royalty-contract-creation
  Scenario: delete a Royalty contract creation from an existing royalty account
    When I select the created contract "Test - scenario 2"
    And I click on the delete button
    And I close the first tab opened

  @royalty-contract-creation-new-account
  Scenario: delete a royalty contract creation from a new royalty account
    When I select the created contract "Test QA - Album 1"
    And I click on the delete button
    And I click on the section Royalty Account
    And I fill "Test QA" in the search bar royalty account
    And I delete "Test QA" in the royalty account results
    And I close the first tab opened

  @royalty-contract-duplication-same-account
  Scenario: delete a duplication of a Royalty contract from the same royalty account
    When I select the created contract "Duplicate test contract"
    And I click on the delete button