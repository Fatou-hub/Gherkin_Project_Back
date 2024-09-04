const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

When(`I get a collaborator {string}`, (collaborator_id) => {
    cy.fixture('api_credentials.json').then((datas) => {
        cy.request({
            method: 'GET',
            url: datas.api_split.base_uri + "finance-reporting/split-api/collaborators/" + collaborator_id,
            failOnStatusCode: false,
            headers: {'auth-blv-apikey': datas.api_split.api_key}
            }).as('Response')
        cy.get('@Response').then((response) => {
            if(!response) {
                throw new Error('The request response is empty, null, or undefined', response)
             } 
        })
    })
});

Then(`collaborator name is {string}`, (expected_request_response_name) => {
    cy.get('@Response').then((response) => {
        if(!response) {
            throw new Error('The request response is empty, null, or undefined', response)
               } 
            if(response.status == 200 & response.body.name != expected_request_response_name) {
                throw new Error('Wrong collaborator name')
            } 
    })
});

Then(`collaborator role is {string}`, (expected_request_response_role) => {
    cy.get('@Response').then((response) => {
        if(!response) {
            throw new Error('The request response is empty, null, or undefined', response)
               } 
            if(response.status == 200 & response.body.role != expected_request_response_role) {
                throw new Error('Wrong collaborator role')
            } 
    })
});