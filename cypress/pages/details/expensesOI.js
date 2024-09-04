class expensesOI {
    clickOnPlusButtonServicesExpensesRecharges() {
        cy.xpath("//div[contains(@id,'contract_costgroup_setup_header')]//a[@income='0']", {timeout: 10000}).should('be.visible').click()
    }

    inputCoverageExpensesOIRates(coverage) {
        cy.xpath("(//div[contains(@id,'contract_costgroup_setup_header')]//..//input[@column='mark_up'])[1]").clear().type(coverage)
    }

    inputShareExpensesOIRates(share) {
        cy.xpath("(//div[contains(@id,'contract_costgroup_setup_header')]//..//input[@column='cost_split_percent'])[1]").clear().type(share)
    }

    verifyModalAddServices() {
        cy.get('#DHTMLSuite_modalBox_contentDiv').should('be.visible')
    }

    verifyCorrectImageValidation() {
        cy.xpath("//div[@id='DHTMLSuite_modalBox_contentDiv']//img[@class='correct-img']").should('be.visible')
    }

    verifyExpensesOIServiceRate(rate) {
        cy.xpath(`//div[contains(@id,'contract_royalty_cost_group_setup_row_')]//input[@value=${rate}]`).should('be.visible')
    }

    clickOnOkButtonExpensesOIModal() {
        cy.xpath("//div[@class='DHTMLSuite_modalDialog_contentDiv']//input[@value='Ok']").should('be.visible').click()
    }

    selectServices(services) {
        cy.get('#costgroup_dropdown').select(services)
    }

    clickOnOkButtonServicesModal() {
        cy.get('#ok_btn').click()
    }

    deleteAllExpensesServices() {
        cy.xpath("//div[contains(@id, 'contract_costgroup_setup_')]//a[@close_btn_label='Cancel']").then(($services) => {
            function deleteServices(index) {
                if (index < $services.length) {
                    const $service = $services.eq(index);
                    $service.click();
                    cy.xpath("//div[@class='DHTMLSuite_modalDialog_contentDiv']//input[@value='Ok']").should('exist').click();
                    cy.wait(500).then(() => {
                        deleteServices(index + 1);
                    });
                }
            }
            deleteServices(0);
        });
    }
}
export default expensesOI