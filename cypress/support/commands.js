// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getCrendentials', (targetPlateforme) => {
    targetEnv = Cypress.env("env_name") || "dev"
    envCredentialsPath = targetEnv + "/" + targetPlateforme + "-accounts.json"
    cy.readFile("cypress/fixtures/" + envCredentialsPath)
    return cy.fixture(envCredentialsPath)
})

Cypress.Commands.add('fillIntranetRequester', (field_label, field_value, field_type_input) => {

    cy.log('using intranet requester...');

    if (field_type_input == 'select2') {

        var xpthSelect2_1 = `//div[contains(@class,'generic-requester-filters-cell')]//label[text()="${field_label}"]/ancestor::div[2]//ul[@class='select2-choices']`;
        var xpthSelect2_2 = `//div[contains(@class,'select2-drop-active')]//ul[@class='select2-results']/li/div[text()='${field_value}']`;

        cy.xpath(xpthSelect2_1).click();
        cy.xpath(xpthSelect2_2).click();

    } else if (field_type_input == 'input' || field_type_input == 'checkbox') {
        var xpth = `//div[contains(@class,'generic-requester-filters-cell')]//label[text()="${field_label}"]/ancestor::div[2]//input`;
        cy.xpath(xpth).type(field_value)
    } else if (field_type_input == 'select') {
        var xpth = `//div[contains(@class,'generic-requester-filters-cell')]//label[text()="${field_label}"]/ancestor::div[2]//select/option[text() = '${field_value}']`;
        cy.xpath(xpth).click();
    }

})

Cypress.Commands.add('forceVisit', url => {
    cy.window().then(win => {
        return win.open(url, '_self');
    });
});

Cypress.Commands.add('checkRiemannStatValue', (elementXpath, statName, maxErrorAccepted) => {
    let n = 0;
    cy.wait(3000)
    cy.xpath(elementXpath).then(($element) => {
        cy.wrap($element.text()).as("actualText")
    })
    actualText = cy.get('@actualText')
    while (n < 3) {
        cy.xpath(elementXpath).then(($element) => {
            actualText = $element.text()
            if (actualText == "?"){
                cy.wait(15000)
            }
            else{
                n= n+4
                cy.log("There are " + actualText + " " + statName)
            }
            if(parseInt(actualText) > maxErrorAccepted * 1000){
                cy.log("There are " + actualText + " " + statName)
                throw new Error("There are too many errors")
            }
        })
        n++;
    }
})