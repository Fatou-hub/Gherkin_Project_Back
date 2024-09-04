const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: ContractList } = require("../../../pages/details/contractList");
const { default: CommissionsPage } = require("../../../pages/details/commissionsPage");
const { default: ContractTabs } = require("../../../pages/details/common/contractTabs");
const { default: CommissionsModal } = require("../../../pages/details/modales/commissionsModal");
const { default: CommissionsManagementModal } = require("../../../pages/details/modales/commissionsManagementModal");
const { default: CommissionsDigitalDistributionModal } = require("../../../pages/details/modales/commissionsDigitalDistributionModal");
const { default: CommissionsPhysicalDistributionModal } = require("../../../pages/details/modales/commissionsPhysicalDistributionModal");

const contractTabs = new ContractTabs()
const contractsList = new ContractList()
const commissionsPage = new CommissionsPage()
const commissionsModal = new CommissionsModal()
const commissionsManagementModal = new CommissionsManagementModal()
const commissionsDigitalDistributionModal = new CommissionsDigitalDistributionModal()
const commissionsPhysicalDistributionModal = new CommissionsPhysicalDistributionModal()


//#region Action

When("I click on the contract {string} with a JV reference", (contractNameJV) => {
    contractsList.selectContractJV(contractNameJV);
});

When("I go to the commissions category", () => {
    contractTabs.clickOnCommissionsCategory();
});

When("I setup the digital distribution commission", () => {
    commissionsPage.clickOnPlusButtonCommissionsPage();
    commissionsModal.clickOnOkButtonModalDigitalDistributionCommission();
    commissionsDigitalDistributionModal.clickOnOkButtonCommissionsDigitalDistribution();
});

When("I setup the JE management commission", () => {
    commissionsPage.clickOnPlusButtonCommissionsPage();
    commissionsModal.clickOnOkButtonModalManagementCommission();
    commissionsManagementModal.clickOnNextButtonCommissionsManagement();
    commissionsManagementModal.clickOnOkButtonCommissionsManagement();
});

When("I setup the physical distribution commission", () => {
    commissionsPage.clickOnPlusButtonCommissionsPage();
    commissionsModal.clickOnOkButtonModalPhysicalDistributionCommission();
    commissionsPhysicalDistributionModal.clickOnOkButtonCommissionsPhysicalDistribution();
});

When("I delete all commissions", () => {
    commissionsPage.deleteAllCommissions();
});

//#endregion
//#region Assertion

Then("the 3 commissions are displayed", () => {
    commissionsPage.verifyDigitalDistributionCommission();
    commissionsPage.verifyManagementCommission();
    commissionsPage.verifyPhysicalDistributionCommission();
});

//#endregion