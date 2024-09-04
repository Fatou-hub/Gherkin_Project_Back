const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

When(`I access to API Auth Swagger`, () => {
    cy.visit(Cypress.env("ApiAuthSwagger"))
})

When(`I should see the api {string} interface`, (apiName) => {
    cy.get("#swagger-ui")
    cy.xpath("//hgroup[@class='main']//h2[1]").invoke('text').should("contains",apiName)
    cy.xpath("(//a[@class='link']//span)[2]").invoke('text').should("equal"," /api/api-" + apiName.replace(" ","-").toLowerCase() + "/doc.json ")
    cy.get("#api-select").find(':selected').invoke('text').should("equal",apiName.toLowerCase().replace(" ","-"))
    cy.get("#swagger-ui")
    cy.xpath("//div[@class='opblock-summary opblock-summary-post']")
});