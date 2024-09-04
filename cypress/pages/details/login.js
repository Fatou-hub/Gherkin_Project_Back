class Login {

    elements = {
        buttonStartProgram: 'input[value="Click Here To Start The Program"]'
    };

    accessToDetailsLoginPage(){
        cy.visit(Cypress.env("detailsUrl"),{failOnStatusCode:false})
    }

    login(username) {
        cy.get('body').then(($body) =>{
            if ($body.find(this.elements.buttonStartProgram).length > 0) {
                cy.log("'Start the Program' button is visible.");
                cy.get(this.elements.buttonStartProgram).should('be.visible').click()
            } else {
                cy.getCrendentials("details").then((datas) => {
                    let account = datas.filter(account => account.idTypeUser == username)[0];
                    cy.wrap(account).as("currentUser")
                    cy.wait(1000)
                    cy.get('#loginput').type(account.login)
                    cy.get('input[type="password"]').type(account.password)
                    cy.get('input[type="submit"]').should('be.visible').click()
                    cy.wait(1000)
                    cy.get(this.elements.buttonStartProgram).should('be.visible').click()
                    cy.wait(1000)
                    })
            }
            // Check for "Log in again" view
            cy.get('body').then(($body) => {
                if ($body.find('#SubmitHolder > div > a').length > 0) {
                    cy.log("'Log in again' is visible.");
                    cy.get('#SubmitHolder > div > a').eq(0).should('be.visible').click();
                } else {
                    cy.log("'Log in again' button is not visible.");
                }
            });
        })
    }
}
export default Login