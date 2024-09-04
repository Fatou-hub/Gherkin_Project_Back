class SetupPage {

    selectEmptyAdvanceType() {
        cy.xpath("//select[contains(@id,'advance_type')]").should('be.visible').select('')
    }
}
export default SetupPage