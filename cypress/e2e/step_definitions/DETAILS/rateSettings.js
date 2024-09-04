const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: ExpensesOI } = require("../../../pages/details/expensesOI");
const { default: RoyaltyTabs } = require("../../../pages/details/common/royaltyTabs");
const { default: DetailsRoyaltyRates } = require("../../../pages/details/royaltyRates");
const { default: NeighboringRights } = require("../../../pages/details/neighboringRights");
const { default: NeighboringRightsModal } = require("../../../pages/details/modales/neighboringRightsModal");
const { default: RoyaltyRatesDigitalModal } = require("../../../pages/details/modales/royaltyRatesDigitalModal");
const { default: RoyaltyRatesPhysicalModal } = require("../../../pages/details/modales/royaltyRatesPhysicalModal");
const { default: ContractTabs } = require("../../../pages/details/common/contractTabs");

const expensesOI = new ExpensesOI()
const royaltyTabs = new RoyaltyTabs()
const neighboringRights = new NeighboringRights()
const contractTabs = new ContractTabs
const detailsRoyaltyRates = new DetailsRoyaltyRates()
const neighboringRightsModal = new NeighboringRightsModal()
const royaltyRatesDigitalModal = new RoyaltyRatesDigitalModal()
const royaltyRatesPhysicalModal = new RoyaltyRatesPhysicalModal()

//#region Action

When("I go to the royalty rates category", () => {
    contractTabs.clickOnRoyaltyRatesCategory();
});

When("I go to the neighboring rights category", () => {
    contractTabs.clickOnNeighboringRightsCategory();
});

When("I go to the expense & OI category", () => {
    contractTabs.clickOnExpensesOICategory();
});

When("I setup a coverage expense services rate at {string} in services expenses & recharges", (coverage) => {
    expensesOI.inputCoverageExpensesOIRates(coverage);
});

When("I setup a share expense services rate at {string} in services expenses & recharges", (share) => {
    expensesOI.inputShareExpensesOIRates(share);
});

When("I click on the plus button in the expense & OI category", () => {
    expensesOI.clickOnPlusButtonServicesExpensesRecharges();
});

When("I select a {string} in the add services expenses modal", (services) => {
    expensesOI.selectServices(services);
    expensesOI.clickOnOkButtonServicesModal();
});

When("I setup a general royalty rate at {string} to the neighboring rights", (rate) => {
    neighboringRights.clickOnPlusButtonNeighboringRights();
    neighboringRightsModal.inputNeighboringRights(rate);
    neighboringRightsModal.clickOnOkButtonModalNeighboringRights();
});

When("I setup a physical rate to {string} with base {string}", (rate, rateName) => {
    detailsRoyaltyRates.clickOnPlusButtonRoyaltyRatesPhysical();
    royaltyRatesPhysicalModal.inputRoyaltyRate(rate);
    royaltyRatesPhysicalModal.selectRate(rateName);
    royaltyRatesPhysicalModal.clickOnOkButtonModalPhysical();
});

When("I setup a digital rate to {string} with base {string}", (rate, rateName) => {
    detailsRoyaltyRates.clickOnPlusButtonRoyaltyRatesDigital();
    royaltyRatesDigitalModal.inputRoyaltyRate(rate);
    royaltyRatesDigitalModal.selectRate(rateName);
    royaltyRatesDigitalModal.clickOnOkButtonModalDigital();
});

When("I delete all datas in services expenses & recharges", () => {
    expensesOI.deleteAllExpensesServices();
});

When("I go to the contract category", () => {
    royaltyTabs.clickOnRoyaltyContractSection();
});

When("I delete physical royalty rates", () => {
    detailsRoyaltyRates.deletePhysicalRoyaltyRates();
});

When("I delete digital royalty rates", () => {
    detailsRoyaltyRates.deleteDigitalRoyaltyRates();
});

When("the rate {string} is displayed in the input rate digital", (rate) => {
    detailsRoyaltyRates.verifyRoyaltyRatesDigital(rate);
});

//#endregion
//#region Assertion

Then("the rate {string} is displayed in the input rate to the neighboring rights", (rate) => {
    neighboringRights.verifyNeighboringRights(rate);
});

Then("the rate {string} is displayed in the input coverage in services expenses & recharges", (rate) => {
    contractTabs.clickOnNeighboringRightsCategory();
    contractTabs.clickOnExpensesOICategory();
    expensesOI.verifyExpensesOIServiceRate(rate);
});

Then("the modal add services expenses is displayed", () => {
    expensesOI.verifyModalAddServices();
});

Then("the rate {string} is displayed in the input rate physical", (rate) => {
    detailsRoyaltyRates.verifyRoyaltyRatesPhysical(rate);
});

Then("I delete the neighboring rights rates", () => {
    neighboringRights.deleteNeighboringRightsRates();
});

Then("the correct image is displayed in the services expenses modal", () => {
    expensesOI.verifyCorrectImageValidation();
});

//#endregion