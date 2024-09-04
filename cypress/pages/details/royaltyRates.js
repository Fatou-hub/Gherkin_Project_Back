class detailsRoyaltyRates {
    clickOnPlusButtonRoyaltyRatesPhysical() {
        cy.xpath("//div[contains(@id,'tabViewregular_contract_tab_container')]//div[contains(@id,'contract_physical_option_header')]//a[@table_str='contract_physical_option']", {timeout: 10000}).should('be.visible').click()
    }

    clickOnPlusButtonRoyaltyRatesDigital() {
        cy.xpath("//div[contains(@id,'tabViewregular_contract_tab_container')]//div[contains(@id,'contract_digital_option_header')]//a[@table_str='contract_digital_option']", {timeout: 10000}).should('be.visible').click()
    }

    verifyRoyaltyRatesPhysical(rate) {
        cy.xpath(`//div[contains(@id,'contract_physical_option')]//input[@value='${rate}']`).should('be.visible')
    }

    verifyRoyaltyRatesDigital(rate) {
        cy.xpath(`//div[contains(@id,'contract_digital_option')]//input[@value='${rate}']`).should('be.visible')
    }
    
    deletePhysicalRoyaltyRates() {
        cy.xpath("(//a[@table_str='contract_physical_option'])[2]").should('be.visible').click()
    }

    deleteDigitalRoyaltyRates() {
        cy.xpath("(//a[@table_str='contract_digital_option'])[2]").should('be.visible').click()
    }
}
export default detailsRoyaltyRates