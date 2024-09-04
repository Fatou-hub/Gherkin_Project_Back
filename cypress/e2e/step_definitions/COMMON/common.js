const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

When(`I go to {string}`, (expected_url) => {
        cy.visit(expected_url, {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'CF-Access-Client-Id': Cypress.env('CF_id'),
                'CF-Access-Client-Secret': Cypress.env('CF_secret')
            },
            failOnStatusCode: false
        });
})

When(`I wait {int} seconds`, (nb_sec) => {
    cy.wait(nb_sec * 1000)
})

Then(`I should retreive the element with the following id {string}`, (expectedID) => {
    cy.get("#" + expectedID);
});

Then(`I should see {string}`, (expected_string) => {
    cy.get("body").contains(expected_string);
});

When(`I select option {string} for {string}`, (expectedOption, expectedSelectListName) => {
    cy.get("select[name='" + expectedSelectListName + "']").select(expectedOption)
});

Then(`I should see nothing`, () => {
    cy.get("body").then(($value) => {
        bodyText = $value.text()
        if (bodyText != ""){
            throw new Error("Body is not empty. => {'" +  bodyText + "'}")
        }
    })
});
