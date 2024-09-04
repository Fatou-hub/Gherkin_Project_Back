class commissionsManagementModal {

    clickOnNextButtonCommissionsManagement() {
        cy.xpath("//input[@id='next_btn']").should('be.visible').click()
    }

    clickOnOkButtonCommissionsManagement() {
        cy.xpath("//input[@id='ok_btn']").should('be.visible').click()
    }
}
export default commissionsManagementModal