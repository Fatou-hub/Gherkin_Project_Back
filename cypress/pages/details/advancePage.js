class AdvancePage {

    deleteAdvance(index, advances) {
        if (index < advances.length) {
            const $advance = advances.eq(index);
            $advance.click();
            cy.xpath("//input[@id='ok_btn']").should('exist').click();
            cy.wait(500).then(() => {
                this.deleteAdvance.call(this, index + 1, advances);
            });
        }
    }
    deleteAllAdvanceSettings(template) {
        const deleteButtonXpath =
            `//div[contains(@id, 'main_contract_advances')]` +
            `//a[contains(text(), '${template}')]` +
            `//..//..//img[@class='delete_auto_balance']`;
        if (deleteButtonXpath.length > 0) {
            cy.xpath(deleteButtonXpath, { timeout: 10000 })
                .should('be.visible')
                .then(($advances) => {
                this.deleteAdvance.call(this, 0, $advances);
            });
        } else {
            cy.log('Aucun élément à supprimer trouvé.');
        }
    }

    clickOnPlusButtonAdvancePage() {
        cy.xpath("//a[@id='add_avd_balance']").should('be.visible').click()
    }

    clickOnAdvanceDescriptionByName(template) {
        cy.wait(3000)
        cy.xpath(`(//a[contains(text(), '${template}')])[1]`).should('be.visible').click()
    }

    verifyContractAdvancePage(template, amount) {
        cy.xpath(`//div[contains(@id, 'main_contract_advances')]//a[contains(text(), '${template}')]//..//..//span[contains(text(), '${amount}')]`, {timeout: 10000}).should('be.visible')
    }
}
export default AdvancePage