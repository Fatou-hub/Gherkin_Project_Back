const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

var baseURI
var expected_access_token

Given(`I send a POST request with valid credentials at API Content authorization endpoint`,() => {
    cy.fixture('api_credentials.json').then((datas) => {
        api_auth = datas.api_auth
        api_content = datas.api_content
        baseURI = datas.api_content.base_uri

        cy.request({
            method: 'POST',
            url: api_auth.base_uri + "/" + api_auth.authorization_endpoint,
            failOnStatusCode: false,
            body: {
                "grant_type":"client_credentials",
                "client_id":  api_auth.client_id, 
                "client_secret" : api_auth.client_secret
            }
        }).as('AuthRequest')
        cy.get('@AuthRequest').its('status').should('eq', 200)
        cy.get('@AuthRequest').then((response) => {
            expected_access_token = response.body.access_token
        })
    })
})

Then("I should get an access token", () => {
    cy.get('@AuthRequest').then((response) => {
        if(!response.body.access_token) {
            throw new Error('The access token is empty, null, or undefined', expected_access_token)
        }
    })
});

When(`I get a product {string}`, (product_id) => {
    cy.request({
        method: 'GET',
        url: api_content.base_uri + "products/"+ product_id,
        failOnStatusCode: false,
        headers: {
            "accept":"application/json",
            "authorization":"Bearer " + expected_access_token
        }
    }).as('Response')
    cy.get('@Response').then((response) => {
        if(!response) {
            throw new Error('The request response is empty, null, or undefined', response)
         } 
    })
});

When(`I get a producer {string}`, (producer_id) => {

    cy.request({
        method: 'GET',
        url: baseURI + "findId/producer/"+ producer_id,
        failOnStatusCode: false,
        headers: {
            "accept":"application/json",
            "authorization":"Bearer " + expected_access_token
        }
    }).as('Response')
    cy.get('@Response').then((response) => {
        if(!response) {
            throw new Error('The request response is empty, null, or undefined', response)
         } 
    })
});