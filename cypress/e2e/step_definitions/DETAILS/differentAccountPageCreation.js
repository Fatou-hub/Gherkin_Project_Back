const { When, Then} = require("@badeball/cypress-cucumber-preprocessor");
const { default: DifferentAccountInfo } = require("../../../pages/details/differentAccountInfo");
const { default: DifferentAccountModal } = require("../../../pages/details/modales/differentAccountModal");

const differentAccountInfo = new DifferentAccountInfo()
const differentAccountModal = new DifferentAccountModal()

//#region Action

When("I enter {string} in the id Prod section", (idProd) => {
    differentAccountModal.writeIdProd(idProd);
});

When("I enter {string} in the account page section", (accountPage) => {
    differentAccountModal.writeAccountPage(accountPage);
});

When("I select {string} in the contract page section", (contractType) => {
    differentAccountModal.selectContratType(contractType);
});

When("I select {string} in the legal entity section", (legalEntity) => {
    differentAccountModal.selectLegalEntity(legalEntity);
});

When("I select {string} in the cost center section", (costCenter) => {
    differentAccountModal.selectCostCenter(costCenter);
});

When("I enter {string} in the brand section", (brand) => {
    differentAccountModal.writeBrand(brand);
});

When("I enter {string} in the start date section", (startDate) => {
    differentAccountModal.writeStartDate(startDate);
});

When("I enter {string} in the end date section", (endDate) => {
    differentAccountModal.writeEndDate(endDate);
});

When("I delete all {string} created", (idProd) => {
    differentAccountInfo.deleteAllIdProd(idProd);
});

//#endregion
//#region Assertion

Then("the {string} is displayed in the input id prod", async (idProd) => {
    differentAccountInfo.verifyIdProd(idProd);
});

Then("the {string} is displayed in the input account page", async (accountPage) => {
    differentAccountInfo.verifyAccountPage(accountPage);
});

Then("the {string} is displayed in the input contract type", async (contractType) => {
    differentAccountInfo.verifyContractType(contractType);
});

Then("the {string} is displayed in the input legal entity", async (legalEntity) => {
    differentAccountInfo.verifyLegalEntity(legalEntity);
});

Then("the {string} is displayed in the input cost center", async (costCenter) => {
    differentAccountInfo.verifyCostCenter(costCenter);
});

Then("the {string} is displayed in the input brand", async (brand) => {
    differentAccountInfo.verifyBrand(brand);
});

//#endregion
