const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: ContractItems } = require("../../../pages/details/contractItems");
const { default: RoyaltyTabs } = require("../../../pages/details/common/royaltyTabs");
const { default: ContractItemsModal } = require("../../../pages/details/modales/contractItemsModal");
const { default: Subtabs } = require("../../../pages/details/common/subtabs");
const { default: AllProjectsList } = require("../../../pages/details/allProjectsList");
const { default: ContractList } = require("../../../pages/details/contractList");

const contractsList = new ContractList
const contractItems = new ContractItems()
const contractItemsModal = new ContractItemsModal()
const royaltyTabs = new RoyaltyTabs()
const allProjectsList = new AllProjectsList
const subtab = new Subtabs()

//#region Action

When("I go to the contracts category", () => {
    royaltyTabs.clickOnRoyaltyContractSection();
});

When("I click on the contract {string}", (contractName) => {
    contractsList.selectContract(contractName);
});

When("I click on the contract items tab", () => {
    contractItems.selectContractItems();
});

When("I click on the Projects subtab", () => {
    subtab.clickOnProjectsSubtab()
});

When("I search my project {string}", (project) => {
    allProjectsList.searchProject(project)
});

When("I delete my project", () => {
    allProjectsList.deleteAllProject()
});

When("I click on the green plus button of the project section", () => {
    contractItems.clickOnProjectsSectionPlusButton();
});

When("I search the project ID {string}", (searchProjectID) => {
    contractItemsModal.searchNewProjectID(searchProjectID);
});

When("I click on the create new project button", () => {
    contractItemsModal.buttonCreateNewProject();
});

When("I input the project ID {string}", (projetID) => {
    contractItemsModal.inputProjectID(projetID);
});

When("I input the artist name {string}", (artist) => {
    contractItemsModal.inputArtist(artist);
});

When("I input the title {string}", (title) => {
    contractItemsModal.inputTitle(title);
});

When("I input the label {string}", () => {
    contractItemsModal.inputLabel();
});

When("I click on the button Ok", () => {
    contractItemsModal.clickOnOkButton();
});

//#endregion
//#region Assertion

Then("the project {string} is added to the project section of the contract items page", (contractname) => {
    contractItems.verifyProject(contractname);
});

//#endregion