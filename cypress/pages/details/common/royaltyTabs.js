class RoyaltyTabs {

    clickOnRoyaltyAccountSection() {
        cy.xpath("//div[@class='DHTMLSuite_tabContainer']//span[contains(text(), 'Royalty Accounts')]").should('be.visible').click();
    }

    clickOnAccountPagesSection() {
        cy.get('[id="tabTablabel_royalty_0"]').should('be.visible').click();
    }

    closeFirstTabOpened() {
        cy.get('#tabTablabel_royalty_3 img[src$="tab-view-close.gif"]').should('be.visible').click();
    }

    clickOnRoyaltyContractSection() {
        cy.xpath("//div[@id='tabTablabel_royalty_1']//span[text()='Contracts']").should('be.visible').click()
    }
}

export default RoyaltyTabs