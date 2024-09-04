/*-------------------------------------------------------*/
/* eslint max-len: ["error", { "ignoreComments": true }] */
/* eslint-disable class-methods-use-this                 */
/* eslint-disable cypress/no-unnecessary-waiting         */
/*-------------------------------------------------------*/

class DifferentAccountInfo {

    verifyIdProd(idProd) {
        cy.xpath(`//input[contains(@value,'${idProd}')]`)
    }

    verifyAccountPage(accountPage) {
        cy.xpath(`//input[contains(@value,'${accountPage}')]`)
    }

    verifyContractType(contractType) {
        cy.xpath("//select[contains(@column,'deal_type_id')]")
            .should('contain', contractType)
    }

    verifyLegalEntity(legalEntity) {
        cy.xpath("//select[contains(@column,'company_id')]")
            .should('contain', legalEntity)
    }

    verifyCostCenter(costCenter) {
        cy.xpath("//select[contains(@column,'cost_center_id')]")
            .should('contain', costCenter)
    }

    verifyBrand(brand) {
        cy.xpath(`//input[contains(@value,'${brand}')]`)
    }

    clickOnIdProd(idProd) {
        cy.xpath(`//a[contains(text(),'${idProd}')]`)
    }

    deleteAllIdProd(idProd) {
        cy.wait(2000);
        const deleteButtonXpath =
            `//div[starts-with(@id, 'royalty_deals_')]` +
            `//a[text()='${idProd}']` +
            `//ancestor::div//img[@class='delete-deal']`;
        if (deleteButtonXpath.length > 0) {
            cy.xpath(deleteButtonXpath).then(($idprods) => {
                if ($idprods.length > 0) {
                    this.deleteIdProd.call(this, $idprods, 0);
                } else {
                    cy.log('Aucun élément à supprimer trouvé.');
                }
            });
        }
    }
    deleteIdProd($idprods, index) {
        if (index < $idprods.length) {
            const $idprod = $idprods.eq(index);
            $idprod.click();
            cy.get('#DHTMLSuite_modalBox_contentDiv input[value="Ok"]')
                .should('exist')
                .click();
            cy.wait(1000).then(() => {
                this.deleteIdProd.call(this, $idprods, index + 1);
            });
        }
    }
}
export default DifferentAccountInfo