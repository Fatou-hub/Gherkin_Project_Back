class CommissionsPage {

    clickOnPlusButtonCommissionsPage() {
        cy.xpath("//a[@id='add_avd_balance']").should('be.visible').click()
    }

    verifyDigitalDistributionCommission() {
        cy.xpath("//a[contains(text(), 'Digital Distribution Commission (x%)')]").should('be.visible')
    }

    verifyManagementCommission() {
        cy.xpath("//a[contains(text(), 'JE Management Commission (x%)')]").should('be.visible')
    }

    verifyPhysicalDistributionCommission() {
        cy.xpath("//a[contains(text(), 'Physical Distribution Commission (x%)')]").should('be.visible')
    }

    deleteDigitalDistributionCommission() {
        cy.xpath("//div[@class='row auto_balance']//a[contains(text(), 'Digital Distribution Commission (x%)')]//..//..//img[contains(@class, 'delete_auto_balance')]").should('be.visible').click()
    }

    deleteAllCommissions() {
        cy.xpath("//img[@class='delete_auto_balance']").then(($commissions) => {
            function deleteCommission(index) {
                if (index < $commissions.length) {
                    const $commission = $commissions.eq(index);
                    $commission.click();
                    cy.xpath("//input[@id='ok_btn']").should('exist').click();
                    cy.wait(500).then(() => {
                        deleteCommission(index + 1);
                    });
                }
            }
            deleteCommission(0);
        });
    }
}
export default CommissionsPage