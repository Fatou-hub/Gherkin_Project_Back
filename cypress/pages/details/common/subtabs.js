class Subtabs {

    clickOnRoyaltySubtab() {
        cy.log("Click on the Label Tab button")
        cy.get('[contentid="LabelRoyaltyTab"]').should('be.visible').click()
    }

    clickOnProjectsSubtab() {
        cy.xpath("//div[text()='Projects']", {timeout: 10000}).should('be.visible').click()
    }
}
export default Subtabs