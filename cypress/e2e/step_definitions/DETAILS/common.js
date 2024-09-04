const { When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor");
const { default: Login } = require("../../../pages/details/login");
const { default: DifferentAccountModal } = require("../../../pages/details/modales/differentAccountModal");

const login = new Login()
const differentAccountModal = new DifferentAccountModal()

//#region Action

Given("I access to details login page", () => {
    login.accessToDetailsLoginPage()
});

When("I click on the button Ok on Details", () => {
    differentAccountModal.clickOnOkButton();
});

When("I login to Details with user {string}", async (username) => {
    login.login(username);
});

//#endregion