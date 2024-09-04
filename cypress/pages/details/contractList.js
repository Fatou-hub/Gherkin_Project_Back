class ContractList {

    selectContract(contractName) {
        cy.xpath(`//a[contains(text(),'${contractName}')]`, {timeout: 20000}).should('be.visible').click()
    }

    selectContractJV(contractNameJV) {
        cy.xpath(`//a[contains(text(),'${contractNameJV}')]`, {timeout: 20000}).should('be.visible').click()
    }
}
export default ContractList
