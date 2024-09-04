const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

When("it crawls the homepage", () => {
  cy.get('a').each(($link) => {
    cy.wrap($link).invoke('show')
    console.log("this is an url " + $link.attr('href'))
  })
})

Then('the link should open correctly', () => {
  const links = []
  const intranetUrl = Cypress.env('intranetUrl');

  cy.get('a').each(($link) => {
    links.push($link.attr('href'))
  }).then(() => {
    for (const link of links) {
      cy.wrap().then(() => {
        try {
          cy.visit({
            url: intranetUrl + link,
            failOnStatusCode: false
          })      
        }
        catch(error){
          console.log(`Erreur lors de la vérification de l'URL`)
        }
      })
    }
  })
})