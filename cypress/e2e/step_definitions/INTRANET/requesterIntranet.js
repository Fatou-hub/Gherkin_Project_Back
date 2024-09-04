const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

Given(`I navigate to the "producer requester"`, async () => {
    //@todo improve this part to use specific cypress function instead of url manipulation
    cy.visit(Cypress.env('intranetUrl') + 'requester/producer/')

});

When(`I prepare my research on account requester with field label {string} which is typed as {string} and equal to {string}`, async (field_label, field_type_input, field_value) => {
 cy.fillIntranetRequester(field_label, field_value, field_type_input)
})

When(/^I apply filters on Release Requester$/i, async function(){
    cy.xpath("//button[contains(text(),'Apply filters')]").click()
})

Then(`I check number rows founded by requester is equal to {int}`, async (number) => {

    cy.get("#requesterFoundRows").should('contain.text', number)
})

