const image = 'cypress/assets/details/advanceSettings/image_testQA.png'
class AdvanceInformationsModal {

    elements = {
        checkboxDownloadAudioScope : () => cy.xpath("//input[@id='dl']", {timeout: 10000}),
        checkboxPhysicalSalesScope : () => cy.xpath("//input[@id='physical_sales']", {timeout: 10000}),
        projectsOnItemsSection : () => cy.xpath("//select[@id='box_section']"),
        checkboxProjectsItemsSection : (projects) => cy.xpath(`//div[@id='releases_box']//span[contains(text(), '${projects}')]//..//input[@class='box release_id']`, {timeout: 10000}),
        checkboxContractOnMultiContractsSection : (contract) => cy.xpath(`//div[@id='multi_contracts_row']//span[contains(text(), '${contract}')]//..//input[@class='box cross_recoup']`, {timeout: 10000})
    }

    //#region Advance

    fillOnSageReportingDateField(reportingDate) {
        cy.xpath("//input[@id='sage_reporting_date']").should('be.visible').type(reportingDate).click()
    }

    fillOnPaymentDateAdvance(paymentDate) {
        cy.xpath("//input[@id='auto_balance_date']").should('be.visible').type(paymentDate).click()
    }

    fillOnAmountCurrencyAdvance(amount) {
        cy.xpath("//input[@id='total_limit']").should('be.visible').type(amount)
    }

    fillOnPostingTypeAdvance(postingType) {
        cy.xpath("//input[@id='posting_type']").should('be.visible').type(postingType)
    }

    fillOnPostingNumberAdvance(postingNumber) {
        cy.xpath("//input[@id='posting_number']").should('be.visible').type(postingNumber)
    }

    fillOnPostingDescriptionAdvance(postingDescription) {
        cy.xpath("//input[@id='posting_description']").should('be.visible').type(postingDescription)
    }

    fillOnLineDescriptionAdvance(lineDescription) {
        cy.xpath("//input[@id='line_description']").should('be.visible').type(lineDescription)
    }

    clickOnNextButtonAdvanceModal() {
        cy.xpath("//input[@id='next_btn']", {timeout: 10000}).should('be.visible').click()
    }

    clickOnOkButtonAdvanceModal() {
        cy.xpath("//input[@id='ok_btn']", {timeout: 10000}).should('be.visible').click()
        cy.wait(2000)
    }

    uploadOnInvoiceModalAdvance() {
        cy.get("label[for='advance_invoice']").selectFile(image).should('be.visible')
    }
    
    uploadOnSpreadsheetModalAdvance() {
        cy.get("label[for='advance_document']").selectFile(image).should('be.visible')
    }

    verifyFieldSageReportingDateAdvance(reportingDate) {
        cy.xpath(`//input[@id='sage_reporting_date' and @value='${reportingDate}']`).should('have.value', reportingDate)
    }

    verifyFieldPaymentDateAdvance(paymentDate) {
        cy.xpath(`//input[@id='auto_balance_date' and @value='${paymentDate}']`).should('have.value', paymentDate)
    }

    verifyFieldAmountCurrencyAdvance(amount) {
        cy.xpath(`//input[@id='total_limit' and @value='${amount}']`).should('have.value', amount)
    }

    verifyFieldPostingTypeAdvance(postingType) {
        cy.xpath(`//input[@id='posting_type' and @value='${postingType}']`).should('have.value', postingType)
    }

    verifyFieldPostingNumberAdvance(postingNumber) {
        cy.xpath(`//input[@id='posting_number' and @value='${postingNumber}']`).should('have.value', postingNumber)
    }

    verifyFieldPostingDescriptionAdvance(postingDescription) {
        cy.xpath(`//input[@id='posting_description' and @value='${postingDescription}']`).should('have.value', postingDescription)
    }

    verifyFieldLineDescriptionAdvance(lineDescription) {
        cy.xpath(`//input[@id='line_description' and @value='${lineDescription}']`).should('have.value', lineDescription)
    }

    verifyImageUploadAdvanceInvoice(imageAdvanceInvoiceUpload) {
        cy.xpath(`//span[@id='advance_invoice_name']//a[contains(text(),'${imageAdvanceInvoiceUpload}')]`).should('be.visible')
    }

    verifyImageUploadAdvanceSpreadsheet(imageAdvanceSpreadsheetUpload) {
        cy.xpath(`//span[@id='advance_document_name']//a[contains(text(),'${imageAdvanceSpreadsheetUpload}')]`).should('be.visible')
    }

    //#endregion
    //#region Setup

    clickOnCheckboxRecoupPriorPeriodsModalSetup() {
        cy.xpath("//input[@id='multi_period_flag']", {timeout: 10000}).should('be.visible').click()
    }

    fillOnStartDateModalSetup(startDate) {
        cy.xpath("//input[@id='start_date']").should('be.visible').type(startDate).click()
    }

    verifyFieldStartDateModalSetup(startDate) {
        cy.xpath(`//input[@id='start_date' and @value='${startDate}']`).should('have.value', startDate)
    }

    //#endregion
    //#region Scope

    clickOnCheckboxDownloadAudioScope() {
        this.elements.checkboxDownloadAudioScope().should('be.visible').click()
    }

    verifyCheckboxDownloadAudioScope() {
        this.elements.checkboxDownloadAudioScope().should('have.attr', 'checked')
    }

    fillOnDownloadAudioScope(downloadAudio) {
        cy.xpath("//input[@id='recoupment_rate_dl']").should('be.visible').clear().type(downloadAudio)
    }

    clickOnCheckboxPhysicalSalesScope() {
        this.elements.checkboxPhysicalSalesScope().should('be.visible').click()
    }

    verifyCheckboxPhysicalSalesScope() {
        this.elements.checkboxPhysicalSalesScope().should('have.attr', 'checked')
    }

    verifyInputDownloadAudioScope(downloadAudio) {
        cy.xpath(`//input[@id='recoupment_rate_dl' and @value='${downloadAudio}']`).should('have.value', downloadAudio)
    }

    verifyInputPhysicalSalesScope(physicalSales) {
        cy.xpath(`//input[@id='recoupment_rate_physical' and @value='${physicalSales}']`).should('have.value', physicalSales)
    }

    fillOnPhysicalSalesScope(physicalSales) {
        cy.xpath("//input[@id='recoupment_rate_physical']").should('be.visible').clear().type(physicalSales)
    }


    //#endregion
    //#region Multi Contracts

    clickOnCheckboxContractOnMultiContractsSection(contract) {
        this.elements.checkboxContractOnMultiContractsSection(contract).should('be.visible').click()
    }

    verifyCheckboxContractOnMultiContractsSection(contract) {
        this.elements.checkboxContractOnMultiContractsSection(contract).should('have.attr', 'checked')
    }

    //#endregion
    //#region Items

    selectProjectsOnItemsSection(projects) {
        this.elements.projectsOnItemsSection().should('be.visible').select(projects)
    }

    verifyProjectsOnItemsSection(projects) {
        this.elements.projectsOnItemsSection().should('contain', projects)
    }

    verifyCheckboxProjectsItemsSection(projects) {
        this.elements.checkboxProjectsItemsSection(projects).should('have.attr', 'checked')
    }

    clickOnCheckboxProjectsItemsSection(projects) {
        this.elements.checkboxProjectsItemsSection(projects).should('be.visible').click()
    }

    //#endregion
}
export default AdvanceInformationsModal