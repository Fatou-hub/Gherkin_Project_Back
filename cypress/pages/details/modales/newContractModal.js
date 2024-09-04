class NewContractModal {

    clickOnContractAccountName(accountname) {
        cy.wait(1000)
        cy.xpath(`//div[@id='DHTMLSuite_modalBox_contentDiv']//a[contains(text(), '${accountname}')]`).should('be.visible').click();
    }
    
    clickOnContractAccountID(accountID) {
        cy.xpath(`//a[contains(text(),${accountID})]`).should('be.visible').click();
    }

    clickOnbuttonDelete(accountname) {
        cy.xpath(`(//a[@data-royalty_account_name="${accountname}"])[1]`).should('be.visible').click();
    }

    clickOnModalYesOrDelete() {
        cy.get('#DHTMLSuite_modalBox_contentDiv #modal_ok').should('be.visible').click();
    }

    writeContractName(contractname) {
        cy.get('input[id="contract_name"]').clear().type(contractname)
    }

    clickOnCreateBlankContract() {
        cy.get('input[value="create blank contract"]', {timeout: 10000}).should('be.visible').click()
    }
}
export default NewContractModal