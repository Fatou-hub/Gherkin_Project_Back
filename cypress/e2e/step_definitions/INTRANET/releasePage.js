import {
    Given,
    Then,
    When
  } from '@badeball/cypress-cucumber-preprocessor';

const { default: ReleasePage } = require("../../../pages/intranet/releasePage");

const releasePage = new ReleasePage()

// GIVEN

Given(`I am on the release page of idAlbum={string}`, (idAlbum) => {
    releasePage.accessToReleasePage(idAlbum);
    releasePage.ensureDeliveryActionEltsAreVisible();
});

Given(`There is no delivery on going for storeId={string}`, (idPlatform) => {
    releasePage.cleanDeliveriesToDo(idPlatform);
})

// WHEN

When(`I make {string} on storeId={string}`, (action, idPlatform) => {
    let actionSelector = "Make " + action; 
    releasePage.makeDeliveryOnStore(actionSelector, idPlatform);
});

// THEN

Then(`Delivery report should display {string} on {string}`, (message, storeName) => {
    releasePage.checkDeliveryReport(message, storeName);
});
// 

Then(`Delivery action on store {string} should be display in Deliveries To Do tab`, (idPlatform) => {
    releasePage.checkDeliveriesToDo(idPlatform);
    releasePage.cleanDeliveriesToDo(idPlatform);
});