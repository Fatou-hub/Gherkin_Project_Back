class ContractItems {

    selectContractItems() {
        cy.xpath("//span[text()='Contract Items']").should('be.visible').click()
        cy.wait(1000);
    }

    clickOnProjectsSectionPlusButton() {
        cy.xpath(`//div[contains(@class, 'DHTMLSuite_aTab') and ` +
        `.//span[contains(text(), 'Projects')]]` + 
        `//a[contains(@class, 'contract-release-form')]`)
        .should('be.visible')
        .click()
    }

    verifyProject(contractname) {
        cy.xpath(`//a[contains(text(),'${contractname}')]`).should('be.visible')
    }
}
export default ContractItems