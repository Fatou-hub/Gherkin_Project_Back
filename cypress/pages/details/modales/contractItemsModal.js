class ContractItemsModal {

    searchNewProjectID(searchProjectID) {
        cy.xpath("(//input[@id='search'])[2]", {timeout: 10000}).type(searchProjectID)
    }

    buttonCreateNewProject() {
        cy.xpath("(//input[@id='create_new_release'])[2]", {timeout: 10000}).should('be.visible').click()
    }

    inputProjectID(projetID) {
        cy.get("#identifier").type(projetID)
    }

    inputArtist(artist) {
        cy.get("#release_artist").clear().type(artist)
    }

    inputTitle(title) {
        cy.get("#release_title").type(title)
    }

    inputLabel() {
        cy.get('select#label_id').select('Believe')
    }

    clickOnOkButton() {
        cy.xpath("//input[contains(@id, 'ok_')]").should('be.visible').click()
    }
}
export default ContractItemsModal