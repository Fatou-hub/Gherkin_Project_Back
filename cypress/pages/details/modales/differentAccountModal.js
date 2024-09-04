class DifferentAccountModal {

    writeIdProd(idProd) {
        cy.xpath("//input[contains(@id, 'id_prod_')]").type(idProd)
    }

    writeAccountPage(accountPage) {
        cy.xpath("//input[contains(@id, 'deal_partner_')]").type(accountPage)
    }

    selectContratType(contractType) {
        cy.get("select.box.required.number").select(contractType)
    }

    selectLegalEntity(legalEntity) {
        cy.xpath("//span[contains(text(), 'Legal Entity')]/..//select[contains(@class, 'box required string')]").select(legalEntity)
    }

    selectCostCenter(costCenter) {
        cy.xpath("//span[contains(text(), 'Cost Center')]/..//select[contains(@class, 'box required string')]").select(costCenter)
    }

    writeBrand(brand) {
        cy.xpath("//input[contains(@id, 'brand_')]").type(brand)
    }

    writeStartDate(startDate) {
        cy.xpath("//input[contains(@id, 'start_date_')]").type(startDate)
    }

    writeEndDate(endDate) {
        cy.xpath("//input[contains(@id, 'end_date_')]").type(endDate)
    }

    clickOnOkButton() {
        cy.xpath("//input[contains(@id, 'ok_')]").should('be.visible').click()
    }
}
export default DifferentAccountModal