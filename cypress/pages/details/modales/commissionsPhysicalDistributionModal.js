class commissionsPhysicalDistributionModal {

    clickOnOkButtonCommissionsPhysicalDistribution() {
        cy.xpath("//input[@id='ok_btn']").should('be.visible').click()
    }
}
export default commissionsPhysicalDistributionModal