class NeighboringRightsModal {
    inputNeighboringRights(rate) {
        cy.xpath("//input[@id='modal_royalty_rate']").type(rate)
    }

    clickOnOkButtonModalNeighboringRights() {
        cy.xpath("//div[@class='DHTMLSuite_modalDialog_contentDiv']//input[@id='modal_ok']").should('be.visible').click()
    }
}
export default NeighboringRightsModal