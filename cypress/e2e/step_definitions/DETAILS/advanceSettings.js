const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

const { default: SetupPage } = require("../../../pages/details/setupPage");
const { default: AdvancePage } = require("../../../pages/details/advancePage");
const { default: ContractTabs } = require("../../../pages/details/common/contractTabs");
const { default: ContractSetupPage } = require("../../../pages/details/contractSetupPage");
const { default: AdvanceTemplateModal } = require("../../../pages/details/modales/advanceTemplateModal");
const { default: AdvanceInformationsModal } = require("../../../pages/details/modales/advanceInformationsModal");

const setupPage = new SetupPage()
const advancePage = new AdvancePage()
const contractTabs = new ContractTabs()
const contractSetupPage = new ContractSetupPage()
const advanceTemplateModal = new AdvanceTemplateModal()
const advanceInformationsModal = new AdvanceInformationsModal()

//#region Action

When("I go to the advance category", () => {
    contractTabs.clickOnAdvanceCategory();
});

When("I go to the contract setup category", () => {
    contractTabs.clickOnContractSetupCategory();
});

When("I click on the plus button to display the template modal", () => {
    advancePage.clickOnPlusButtonAdvancePage();
});

When("I click on the {string} in the template modal", (templateName) => {
    advanceTemplateModal.clickOnTemplateButtonByName(templateName);
});

When("I click on the {string} in the advance page", (template) => {
    advancePage.clickOnAdvanceDescriptionByName(template);
});

When("I click on royalty account {string} in the contract setup section", (royaltyAccount) => {
    contractSetupPage.clickOnRoyaltyAccountName(royaltyAccount);
});

When("I fill {string} in the field sage reporting date", (reportingDate) => {
    advanceInformationsModal.fillOnSageReportingDateField(reportingDate);
});

When("I fill {string} in download audio on the scope section", (downloadAudio) => {
    advanceInformationsModal.clickOnCheckboxDownloadAudioScope();
    advanceInformationsModal.fillOnDownloadAudioScope(downloadAudio);
});

When("I fill {string} in physical sales on the scope section", (physicalSales) => {
    advanceInformationsModal.clickOnCheckboxPhysicalSalesScope();
    advanceInformationsModal.fillOnPhysicalSalesScope(physicalSales);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("I select {string} on the items section", (projects) => {
    advanceInformationsModal.selectProjectsOnItemsSection(projects);
});

When("I select {string} in multi contracts section", (contract) => {
    advanceInformationsModal.clickOnCheckboxContractOnMultiContractsSection(contract);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("I select the project {string} on the items section", (projects) => {
    advanceInformationsModal.clickOnCheckboxProjectsItemsSection(projects);
    advanceInformationsModal.clickOnOkButtonAdvanceModal();
});

When("I fill {string} in the field payment date", (paymentDate) => {
    advanceInformationsModal.fillOnPaymentDateAdvance(paymentDate);
});

When("I fill {string} in the field amount currency", (amount) => {
    advanceInformationsModal.fillOnAmountCurrencyAdvance(amount);
});

When("I fill {string} in the field posting type", (postingType) => {
    advanceInformationsModal.fillOnPostingTypeAdvance(postingType);
});

When("I fill {string} in the field posting number", (postingNumber) => {
    advanceInformationsModal.fillOnPostingNumberAdvance(postingNumber);
});

When("I fill {string} in the field posting description", (postingDescription) => {
    advanceInformationsModal.fillOnPostingDescriptionAdvance(postingDescription);
});

When("I fill {string} in the field line description", (lineDescription) => {
    advanceInformationsModal.fillOnLineDescriptionAdvance(lineDescription);
});

When("I upload the files in advance", () => {
    advanceInformationsModal.uploadOnInvoiceModalAdvance();
    advanceInformationsModal.uploadOnSpreadsheetModalAdvance();
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("I click on the checkbox recoup prior periods in setup section", () => {
    advanceInformationsModal.clickOnCheckboxRecoupPriorPeriodsModalSetup();
    advanceInformationsModal.clickOnCheckboxRecoupPriorPeriodsModalSetup();
});

When("I fill {string} in the field start date in setup section in Method 1 : Fixed Percentage", (startDate) => {
    advanceInformationsModal.fillOnStartDateModalSetup(startDate);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
    advanceInformationsModal.clickOnOkButtonAdvanceModal();
});

When("I fill {string} in the field start date in setup section in recoupment rate per type", (startDate) => {
    advanceInformationsModal.fillOnStartDateModalSetup(startDate);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("I fill {string} in the field start date in setup section in Cross Contract Recoupment 100% Income", (startDate) => {
    advanceInformationsModal.fillOnStartDateModalSetup(startDate);
    advanceInformationsModal.clickOnOkButtonAdvanceModal();
});

When("I delete my contract {string} in advance page", (template) => {
    advancePage.deleteAllAdvanceSettings(template);
});

When("the {string} is displayed in the field payment date", (paymentDate) => {
    advanceInformationsModal.verifyFieldPaymentDateAdvance(paymentDate);
});

When("the {string} is displayed in the field amount currency", (amount) => {
    advanceInformationsModal.verifyFieldAmountCurrencyAdvance(amount);
});

When("the {string} is displayed in the field posting type", (postingType) => {
    advanceInformationsModal.verifyFieldPostingTypeAdvance(postingType);
});

When("the {string} is displayed in the field posting number", (postingNumber) => {
    advanceInformationsModal.verifyFieldPostingNumberAdvance(postingNumber);
});

When("the {string} is displayed in the field posting description", (postingDescription) => {
    advanceInformationsModal.verifyFieldPostingDescriptionAdvance(postingDescription);
});

When("the {string} is displayed in the field line description", (lineDescription) => {
    advanceInformationsModal.verifyFieldLineDescriptionAdvance(lineDescription);
});

When("the {string} is displayed in the field in download audio on the scope section", (downloadAudio) => {
    advanceInformationsModal.verifyCheckboxDownloadAudioScope();
    advanceInformationsModal.verifyInputDownloadAudioScope(downloadAudio);
});

When("the {string} is displayed in the droplist all items", (projects) => {
    advanceInformationsModal.verifyProjectsOnItemsSection(projects);
});

When("the project {string} is checked in the items section", (projects) => {
    advanceInformationsModal.verifyCheckboxProjectsItemsSection(projects);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
    advanceInformationsModal.clickOnOkButtonAdvanceModal();
});

When("the {string} is checked in the multi contracts section", (contract) => {
    advanceInformationsModal.verifyCheckboxContractOnMultiContractsSection(contract);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("I click on the next button in the advance page", () => {
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("the {string} is displayed in the field in physical sales on the scope section", (physicalSales) => {
    advanceInformationsModal.verifyCheckboxPhysicalSalesScope();
    advanceInformationsModal.verifyInputPhysicalSalesScope(physicalSales);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("the {string} is correctly upload in advance invoice label", (imageAdvanceInvoiceUpload) => {
    advanceInformationsModal.verifyImageUploadAdvanceInvoice(imageAdvanceInvoiceUpload);
});

When("the {string} is correctly upload in advance spreadsheet label", (imageAdvanceSpreadsheetUpload) => {
    advanceInformationsModal.verifyImageUploadAdvanceSpreadsheet(imageAdvanceSpreadsheetUpload);
});

When("the {string} is displayed in the field start date in Method 1 : Fixed Percentage", (startDate) => {
    advanceInformationsModal.verifyFieldStartDateModalSetup(startDate);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
    advanceInformationsModal.clickOnOkButtonAdvanceModal();
});

When("the {string} is displayed in the field start date in recoupment rate per type", (startDate) => {
    advanceInformationsModal.verifyFieldStartDateModalSetup(startDate);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
});

When("the {string} is displayed in the field start date in Cross Contract Recoupment 100% Income", (startDate) => {
    advanceInformationsModal.verifyFieldStartDateModalSetup(startDate);
    advanceInformationsModal.clickOnNextButtonAdvanceModal();
    advanceInformationsModal.clickOnOkButtonAdvanceModal();
});

//#endregion
//#region Assertion

Then("the {string} is displayed with a {string} in advance page", (template, amount) => {
    advancePage.verifyContractAdvancePage(template, amount);
});

Then("the {string} is displayed in the field sage reporting date", (reportingDate) => {
    advanceInformationsModal.verifyFieldSageReportingDateAdvance(reportingDate);
});

Then("I put the field advance type on empty to execute other test", () => {
    setupPage.selectEmptyAdvanceType();
});

Then("the templates Cross Contract Recoupment are not visible in the DOM", () => {
    advanceTemplateModal.verifyTemplateCrossContractRecoupmentNotExistingInDOM();
    advanceTemplateModal.verifyTemplateRecoupmentNotExistingInDOM();
    advanceTemplateModal.clickOnOkButtonCancelAdvanceTemplateModal();
});

Then("the templates Multi Scope Advances are not visible in the DOM", () => {
    advanceTemplateModal.verifyTemplateMethod1NotExistingInDOM();
    advanceTemplateModal.verifyTemplateMethod2NotExistingInDOM();
    advanceTemplateModal.verifyTemplateMethod3NotExistingInDOM();
    advanceTemplateModal.verifyTemplateRecoupmentRatePerTypeNotExistingInDOM();
    advanceTemplateModal.clickOnOkButtonCancelAdvanceTemplateModal();
});

//#endregion