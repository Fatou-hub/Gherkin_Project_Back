class ContractSetupPage {

    clickOnDeleteButton() {
        cy.xpath("//div[contains(@id,'contract_setup_box')]//input[@value='delete contract']").should('be.visible').click()
        cy.wait(2000)
    }

    clickOnRoyaltyAccountName(royaltyAccount) {
        cy.xpath(`//div[contains(@class,'contract_related_info')]//a[text()='${royaltyAccount}']`).should('be.visible').click()
    }
    
}
export default ContractSetupPage