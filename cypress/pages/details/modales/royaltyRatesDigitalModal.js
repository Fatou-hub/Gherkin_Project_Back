class RoyaltyRatesDigitalModal {
    inputRoyaltyRate(rate) {
        cy.xpath("//input[@name='royalty_rate']").type(rate)
    }

    selectRate(rateName) {
        cy.get("select[name='base']").select(rateName)
    }

    clickOnOkButtonModalDigital() {
        cy.xpath("//div[@class='details-box']//input[@id='modal_ok']").should('be.visible').click()
    }
}
export default RoyaltyRatesDigitalModal