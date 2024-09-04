class RoyaltyRatesPhysicalModal {
    inputRoyaltyRate(rate) {
        cy.xpath("//input[@name='royalty_rate']", {timeout: 300000}).type(rate)
    }

    selectRate(rateName) {
        cy.get("select[name='base']", {timeout: 10000}).select(rateName)
    }

    clickOnOkButtonModalPhysical() {
        cy.xpath("//div[@class='details-box']//input[@id='modal_ok']", {timeout: 10000}).should('be.visible').click()
    }
}
export default RoyaltyRatesPhysicalModal