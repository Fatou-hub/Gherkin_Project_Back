class commissionsModal {
    
    clickOnOkButtonModalDigitalDistributionCommission() {
        cy.xpath("//div[@id='DHTMLSuite_modalBox_contentDiv']//input[@value='Digital Distribution Commission (x%)']").should('be.visible').click()
    }

    clickOnOkButtonModalManagementCommission() {
        cy.xpath("//div[@id='DHTMLSuite_modalBox_contentDiv']//input[@value='JE Management Commission (x%)']").should('be.visible').click()
    }

    clickOnOkButtonModalPhysicalDistributionCommission() {
        cy.xpath("//div[@id='DHTMLSuite_modalBox_contentDiv']//input[@value='Physical Distribution Commission (x%)']").should('be.visible').click()
    }
}
export default commissionsModal
