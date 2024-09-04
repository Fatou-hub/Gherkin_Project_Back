class RoyaltyAccountPagesList {

    searchAccount(accountname) {
        cy.wait(2000)
        cy.xpath("//div[contains(@class,'DHTMLSuite_aTab')]//input[contains(@id, 'search_')]").type(accountname)
        cy.wait(2000)
    }

    searchRoyaltyAccount(accountname) {
        cy.xpath("//input[@id='search_royalty_account']").should('be.visible').type(accountname)
    }

    searchAccountName(accountname) {
        cy.xpath("//div[@id='DHTMLSuite_modalBox_contentDiv']//input[contains(@id, 'search_')]", {timeout: 10000}).should('be.visible').type(accountname)
    }

    searchBarContract(contract) {
        cy.xpath("//input[@id='search_contracts']", {timeout: 10000}).should('be.visible').type(contract)
    }

    verifyAccountName(accountname) {
        cy.xpath("//input[@id='royalty_account_name']").should('have.value', accountname)
    }

    verifyContractName(contractname) {
        cy.xpath(`//a[contains(text(),'${contractname}')]`).should('contain', contractname)
    }

    verifyRoyaltyAccount(royaltyaccount) {
        cy.xpath(`//a[contains(text(),'${royaltyaccount}')]`).should('contain', royaltyaccount)
    }

    clickOnFirstAccountList() {
        cy.xpath("(//div[contains(@id, 'royalty_deals')]//a[@class='open-deal'])[1]").should('be.visible').click()
    }

    verifyContractVisibility(isVisible, contractname) {
        const contractRow = cy.get(`a[contract_name="${contractname}"]`)
        if (isVisible) {
            contractRow.should('be.visible');
        } else {
            contractRow.should('not.be.visible');
        }
    }

    clickOnContractName(contractname) {
        cy.get(`a[contract_name="${contractname}"]`).first().should('be.visible').click()
    }
}
export default RoyaltyAccountPagesList