class AccountPages {

    clickOnAddButtonSelectContract() {
        cy.xpath("//a[contains(@id, 'select_contract_form')]").should('be.visible').click()
    }

    clickOnAddButtonOpenContract() {
        cy.xpath("//a[contains(@id, 'open_form')]", {timeout: 10000}).should('be.visible').click()
    }

    clickOnNextButton() {
        cy.xpath("//input[contains(@id, 'ra_next_')]").should('be.visible').click()
    }

    clickOnCopyContract() {
        cy.xpath("(//input[@class= 'contract-template'])[1]").should('be.visible').click()
    }

    clickOnNewRoyaltyAccountButton() {
        cy.xpath("//input[@value='create new royalty account']").should('be.visible').click()
    }
}
export default AccountPages