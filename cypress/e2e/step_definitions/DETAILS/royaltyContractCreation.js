const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { default: Tabs } = require("../../../pages/details/common/tabs");
const { default: Subtabs } = require("../../../pages/details/common/subtabs");
const { default: AccountPages } = require("../../../pages/details/accountPages");
const { default: RoyaltyTabs } = require("../../../pages/details/common/royaltyTabs");
const { default: ContractSetupPage } = require("../../../pages/details/contractSetupPage");
const { default: NewContractModal } = require("../../../pages/details/modales/newContractModal");
const { default: RoyaltyAccountPagesList } = require("../../../pages/details/royaltyAccountPagesList");
const { default: NewRoyaltyAccountModal } = require("../../../pages/details/modales/newRoyaltyAccountModal");


const tabs = new Tabs()
const subtabs = new Subtabs()
const royaltyTabs = new RoyaltyTabs()
const accountPages = new AccountPages()
const newContractModal = new NewContractModal()
const contractSetupPage = new ContractSetupPage()
const newRoyaltyAccountModal = new NewRoyaltyAccountModal()
const royaltyAccountPagesList = new RoyaltyAccountPagesList()

//#region Action

When("I click on the Label tab", () => {
    tabs.clickOnLabelTab();
});

When("I click on the section Royalty Account", () => {
    royaltyTabs.clickOnRoyaltyAccountSection();
});

When("I click on the section account pages", () => {
    royaltyTabs.clickOnAccountPagesSection();
});

When("I delete {string} in the royalty account results", async (accountname) => {
    newContractModal.clickOnbuttonDelete(accountname);
    newContractModal.clickOnModalYesOrDelete();
});

When("I click on the Royalty subtab", () => {
    subtabs.clickOnRoyaltySubtab();
});

When("I fill {string} in the search bar royalty accounts", async (accountname) => {
    royaltyAccountPagesList.searchAccountName(accountname)
});

When("I fill {string} in the search bar contracts", async (contract) => {
    royaltyAccountPagesList.searchBarContract(contract)
});

When("I fill {string} in the search bar account pages", async (accountname) => {
    royaltyAccountPagesList.searchAccount(accountname)
});

When("I select the first result in the account pages list", () => {
    royaltyAccountPagesList.clickOnFirstAccountList();
});

When("I select the tickbox for the catalog auto-attachment", () => {
    newRoyaltyAccountModal.checkboxAutoAttachment();
});

When("I click on the green plus button on the top right", () => {
    accountPages.clickOnAddButtonSelectContract();
});

When("I click on the create new royalty account button", () => {
    accountPages.clickOnNewRoyaltyAccountButton();
});

When("I click on the Copy contract button", () => {
    accountPages.clickOnCopyContract()
});

When("I fill {string} in the search bar royalty account", async (accountname) => {
    royaltyAccountPagesList.searchRoyaltyAccount(accountname)
});

When("I fill the Account name {string}", async (accountname) => {
    royaltyAccountPagesList.searchAccountName(accountname)
});

When("I click on the plus button", () => {
    accountPages.clickOnAddButtonOpenContract();
});

When("I click on the Next button", () => {
    accountPages.clickOnNextButton();
});

When("I fill the royalty account's needed informations", () => {
    newRoyaltyAccountModal.selectCurrency()
    newRoyaltyAccountModal.selectRoyaltyPeriod()
    newRoyaltyAccountModal.fillMinPayout()
    newRoyaltyAccountModal.selectInvoiceLayout()
});

When("I select the Account name {string}", async (accountname) => {
    newContractModal.clickOnContractAccountName(accountname);
});

When("I Select an account {string}", async (accountID) => {
    newContractModal.clickOnContractAccountID(accountID);
});

When("I fill in the Contrat name text field {string}", async (contractname) => {
    newContractModal.writeContractName(contractname);
});

When("I click on the create blank contract button", () => {
    newContractModal.clickOnCreateBlankContract();
});

When("it has the same value as original contract {string}", async (royaltyaccount) => {
    royaltyAccountPagesList.verifyContractName(royaltyaccount);
});

When("I select the created contract {string}", async (contractname) => {
    royaltyAccountPagesList.clickOnContractName(contractname);
});

When("I click on the delete button", () => {
    contractSetupPage.clickOnDeleteButton();
});

When("I close the first tab opened", () => {
    royaltyTabs.closeFirstTabOpened();
})

//#endregion
//#region Assertion

Then("the account section value is {string}", async (accountname) => {
    royaltyAccountPagesList.verifyAccountName(accountname);
});

Then("the royalty contract {string} is created and is visible at the bottom of the contract list", async (contractname) => {
    royaltyAccountPagesList.verifyContractName(contractname);
});

Then("the contract {string} is deleted", async (contractname) => {
    royaltyAccountPagesList.verifyContractVisibility(false, contractname);
});

//#endregion