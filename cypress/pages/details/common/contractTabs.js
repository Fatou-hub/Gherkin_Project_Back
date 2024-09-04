class ContractTabs {
    clickOnRoyaltyRatesCategory() {
        cy.xpath("//span[text()='Royalty Rates']").should('be.visible').click()
    }

    clickOnNeighboringRightsCategory() {
        cy.xpath("//span[text()='Neighboring Rights']").should('be.visible').click()
    }

    clickOnExpensesOICategory() {
        cy.xpath("//span[text()='Expenses & OI']").should('be.visible').click()
    }

    clickOnCommissionsCategory() {
        cy.xpath("//span[text()='Commissions']").should('be.visible').click()
    }

    clickOnAdvanceCategory() {
        cy.xpath("//div[@class='DHTMLSuite_tabContainer']//span[text()='advances']").should('be.visible').click()
    }

    clickOnContractSetupCategory() {
        cy.xpath("//div[@class='DHTMLSuite_tabContainer']//span[text()='Contract Setup']").should('be.visible').click()
    }
}
export default ContractTabs