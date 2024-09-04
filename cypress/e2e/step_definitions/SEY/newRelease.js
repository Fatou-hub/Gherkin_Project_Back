const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");


When(`I create a new audio release`, async () => {

    cy.xpath('//i[contains(text(),"chevron_right")]').click()
    cy.contains('One release').click()
    cy.get('#type_audio').click()
    cy.get('#newReleaseModalNextButton').click()
    cy.get('#genre_nogenre').click()
    cy.get('#newReleaseModalNextButton').click()
    let releaseName = 'QA test release'
    cy.wrap(releaseName).as("releaseName")
    cy.get('input[id=newReleaseInputTitle]').type(releaseName)
    cy.get('#newReleaseModalCreateButton').click()
    cy.wait(1000)

});

Then("I see a popin for a new release possibility", () => {

    //https://producer-xxx.test.believe.fr/easyentry/main/edit/3050632
    cy.contains('I get it').then((val) => {
        if (val) {
            cy.contains('I get it').click()
            cy.wait(1000)
        }
    })
});

Then("I see my release", () => {

    //current url === cy.url()
    cy.get("@releaseName").then((releaseName) => {
        cy.get("#easyEntryEditForm-albumName-0").should('contain.value', releaseName)
    })

});