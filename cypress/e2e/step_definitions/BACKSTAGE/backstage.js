const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: BackstagePage } = require("../../../pages/backstage/backstagePage");

const backstagePage = new BackstagePage;

Given("I have backstage credentials", () => {
    cy.log("data fixture will be use");
});

Given("I access to backstage login page", () => {
    backstagePage.accessToExpectedLoginPage()
    // cy.url().then(($url) => {
    //     if ($url.includes("/index")){
    //         cy.reload()
    //         backstagePage.logout()
    //     }
    // })
});

When(`I login to the backstage with user {string}`, (idType) => {
    backstagePage.login(idType)
});

Then("I should be connected to the backstage", () => {
    cy.get("#bs-main-header-title").should("be.visible")
});

When("I disconnect from backstage", () => {
    backstagePage.logout()
});

Then("I should be redirected to the backstage login page", () => {
    cy.location('href').should("contains", "b2clogin.com/")
});

When("I access to backstage homepage", () => {
    cy.visit(Cypress.env("backstageUrl"))
});

When(`I access to 'User Access' page`, () => {
    backstagePage.goToUsersAccessPage()
});

When(`I access to short Form video page`, () => {
    backstagePage.goToShortFormVideosPage()
});

When(`I go to catalog optimization page`, () => {
    backstagePage.goToCatalogOptimizationPage()
});

When("I click on the split message on Toggle menu", () => {
    backstagePage.goToSplitPage()
});

When(`the analytics date filter is visible`, () => {
    backstagePage.checkDateFilterVisibility()
});

When(`I filter the results from the last {int} days`, (nbDays) => {
    backstagePage.filterResultsByDayInAnalyticsPage(nbDays)
});

When(`I should see appear the modal 'New release'`, () => {
    backstagePage.newReleaseModalIsVisible()
});

When(`the release creation form is well display`, () => {
    backstagePage.releaseCreationFormIsWellDisplay()
});

When(`I access to {string} in the backstage main menu`, (itemLocation) => {
    backstagePage.clickOnMainMenuItemByName(itemLocation)
});

When(`I access to {string} in the backstage user menu`, (itemLocation) => {
    backstagePage.clickOnUserMenuItemByName(itemLocation)
});

Then(`the page header title is {string}`, (headerTitle) => {
    backstagePage.pageHeaderTitleShouldBe(headerTitle)
});

Then(`the page content is well display`, () => {
    backstagePage.pageIsWellDisplay()
});