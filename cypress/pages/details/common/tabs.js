class Tabs {
    clickOnLabelTab() {
        cy.log("Click on the Label Tab button")
        cy.get('[contentid="Label"]').should('be.visible').click()
    }
}
export default Tabs