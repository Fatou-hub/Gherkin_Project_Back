const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");
const { default: IntranetPage } = require("../../../pages/intranet/intranetPage");

const intranetPage = new IntranetPage();
//https://docs.cypress.io/api/cypress-api/catalog-of-events
//To prevent the test from failing when there is an unknown error on the site

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

When(`I click on the intranet logo`, () => {
    intranetPage.clickOnMainLogo()
})

When(`I click on {string} icon`, (iconName) => {
    intranetPage.clickOnIcon(iconName)
})

When(`I click on {string} in the menu`, (menu) => {
    
    intranetPage.clickOnItem(menu)
})

When(`I filter the results by clicking on {string}`, (letter) => {
    intranetPage.filterResultsByletter(letter)
})

Then(`I should see appear the rest of the form`, () => {
    cy.get('#platformColumn')
})

When(`I click on {string} in {string} menu`, (expectedLink,expectedSubMenu) => {
    intranetPage.clickOnIcon(expectedSubMenu)
    intranetPage.clickOnItem(expectedLink)
})

Then(`the page is available and has no errors message`, () => {
    cy.get('body').then((body) => {
        if (body.find('#partContent').length > 0) {
            cy.wrap(1).as('isPageAvailabale')
        }
        else{
            intranetPage.goToHomepage()
            cy.wrap(0).as('isPageAvailabale')
        }
    })
    cy.get('@isPageAvailabale').then((pageStatus) => {
        if (pageStatus == 0){
            throw new Error("Unable to retrieve page content")
        }
    })
})
