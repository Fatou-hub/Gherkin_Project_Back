const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor");
const { default: IntranetPage } = require("../../../pages/intranet/intranetPage");

const intranetPage = new IntranetPage()

Given("I have intranet credentials", () => {
    cy.log("data fixture will be use");
});

Given("I access to intranet login page", () => {
    intranetPage.accessToLoginPage()
});

Given(`I am logged in as {string} to the intranet`, (userName) => {
    intranetPage.loginIfNeeded(userName)
});

When(`I login to the intranet in production with user {string}`, (userName) => {
    cy.fixture('prod/intranet_accounts.json').then((datas) => {
        let account = datas.filter(account => account.idTypeUser == userName)[0];
        cy.wrap(account).as("currentUser")
        cy.loginIntranet(account.login, account.password)
    })});

When(`I login to the intranet with user {string}`, (userName) => {
    intranetPage.login(userName)
});

Then("I should be connected to the intranet", () => {

    cy.get("@currentUser").then((currentUser) => {
        cy.log("check data for user : " + currentUser.idTypeUser)
        cy.get("#dropdownMenuLink").should("be.visible");
    });
});

When("I disconnect from intranet", () => {
    intranetPage.logout()
});

Then("I should be redirected to the intranet login page", () => {
    cy.title().should('equal','Intranet login :: Believe Digital')
});