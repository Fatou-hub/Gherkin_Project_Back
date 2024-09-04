class NewRoyaltyAccountModal {

    selectCurrency() {
       cy.get('select#currency_id').select('EUR')
    }

    selectRoyaltyPeriod() {
       cy.get('select#royalty_period').select('Quarter')
    }

    selectInvoiceLayout() {
       cy.get('select#invoice_project_id').select('Believe (DP)')
    }

    checkboxAutoAttachment() {
        cy.xpath("//input[contains(@id,'autofetch_project_')]").should('be.visible').click()
     }

    fillMinPayout() {
        cy.xpath("//input[@id='min_payment']").type('100')   
    }
}
export default NewRoyaltyAccountModal