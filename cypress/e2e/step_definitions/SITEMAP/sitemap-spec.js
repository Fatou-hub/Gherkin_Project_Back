const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");
const X2JS = require('x2js');

Given("I have the sitemap.xml", () => {
  cy.request('/sitemap.xml')
  .its('body')
  .then((body) => {
    const x2js = new X2JS()
    const json = x2js.xml2js(body)
    expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)
  })
})


When("I parse each url", () => {
  cy.request('/sitemap.xml')
  .its('body')
  .then((body) => {
    const x2js = new X2JS()
    const json = x2js.xml2js(body)
    json.urlset.url.forEach((url) => {
      const parsed = new URL(url.loc)
      cy.log(parsed.pathname)
      cy.request(parsed.pathname)
    })
  })
})

Then("I have a status code 200", () => {
  cy.request('/sitemap.xml')
  .its('body')
  .then((body) => {
    const x2js = new X2JS()
    const json = x2js.xml2js(body)
    json.urlset.url.forEach((url) => {
      cy.request('HEAD', url.loc).its('status').should('eq', 200)
      cy.visit(url.loc).wait(1000, { log: false })
    })
  })
})