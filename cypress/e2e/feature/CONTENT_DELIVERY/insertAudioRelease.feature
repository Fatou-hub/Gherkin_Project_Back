@CDE @DELIVERY @SMOKE_TEST
Feature: Make a delivery from intranet

    Scenario Outline: Insert an audio release from intranet

        Given I am logged in as "<user>" to the intranet
        And   I am on the release page of idAlbum="<idAlbum>"
        And   There is no delivery on going for storeId="<storeId>"
        When  I make "<deliveryAction>" on storeId="<storeId>"
        Then  Delivery report should display "<receivedMessage>" on "<storeName>"
        And   Delivery action on store "<storeId>" should be display in Deliveries To Do tab

        Examples:
            | user | idAlbum | storeId | storeName | deliveryAction  | receivedMessage       |
            | QA   | 37610   | 379     | 1DTouch   | insert delivery | OK, album is in queue |
