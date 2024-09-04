const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

Then(`status code is {string}`, (expected_request_response_code) => {
    cy.get("@Response").then((currentResponse) => {
        if(currentResponse.status != expected_request_response_code) {
        throw new Error('Wrong status code')
     }
    });
});