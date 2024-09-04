class detailsNeighboringRights {
    clickOnPlusButtonNeighboringRights() {
        cy.wait(1000)
        cy.xpath("//div[contains(@id,'tabViewregular_contract_tab_container')]//a[@table_str='contract_performance_option']").should('be.visible').click()
    }

    verifyNeighboringRights(rate) {
        cy.xpath(`//div[contains(@id,'contract_performance_option_header')]//..//input[@value='${rate}']`).should('be.visible')
    }

    deleteNeighboringRightsRates() {
        cy.xpath("(//a[@table_str='contract_performance_option'])[2]").should('be.visible').click()
    }
}
export default detailsNeighboringRights
