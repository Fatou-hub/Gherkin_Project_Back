import {
    RELEASE_PAGE_SELECTORS,
} from '../../config/selectors/intranet/releasePageSelectors';

class ReleasePage {
    accessToReleasePage(idAlbum){
        let releasePageUrl = Cypress.env('intranetUrl') + "/metadata/albums-viewAlbum.php";
        let queryParams = "?idAlbum=" + idAlbum + "&type=album";
        let url = releasePageUrl + queryParams;
        cy.visit(url);
        cy.url().should('include', queryParams);
    }

    ensureDeliveryActionEltsAreVisible(){
        let buttonSelectors = RELEASE_PAGE_SELECTORS.MAKE_DELIVERY_BUTTONS
        cy.get(buttonSelectors["Make insert delivery"].actionDelivery).should('exist').should('be.visible');
        cy.get(buttonSelectors["Make update delivery"].actionDelivery).should('exist').should('be.visible');
        cy.get(buttonSelectors["Make takedown delivery"].actionDelivery).should('exist').should('be.visible');
    }

    makeDeliveryOnStore(actionSelector, idPlatform){
        cy.log('Delivery action is: ' + actionSelector);
        this.makeDelivery(actionSelector);
        this.makeDeliverySelectStore(idPlatform);
        this.submitDelivery();
    }

    makeDelivery(actionSelector){
        let buttonSelector = RELEASE_PAGE_SELECTORS.MAKE_DELIVERY_BUTTONS[actionSelector];
        cy.get(buttonSelector.actionDelivery).should('be.visible').click();
        cy.get(RELEASE_PAGE_SELECTORS.ALBUM_POPIN).should('be.visible');
        cy.get(RELEASE_PAGE_SELECTORS.ALBUM_POPIN).get('fieldset').get('legend').should('contain', RELEASE_PAGE_SELECTORS.DELIVERY_TYPE);
        cy.get(RELEASE_PAGE_SELECTORS.ALBUM_POPIN).get('fieldset').get('legend').should('contain', RELEASE_PAGE_SELECTORS.DELIVERY_INFORMATION);
        cy.get(RELEASE_PAGE_SELECTORS.ALBUM_POPIN_DELIVERY_TYPE).should('be.visible').should('contain', buttonSelector.actionName);
        cy.get(RELEASE_PAGE_SELECTORS.SUBMIT_DELIVERY_BUTTON).should('exist').should('be.enabled');
    }

    makeDeliverySelectStore(idPlatform){
        let checkboxSelector = RELEASE_PAGE_SELECTORS.TO_DELIVER_CHECKBOX.replace('<idPlatform>', idPlatform);
        cy.get(checkboxSelector).check();
    }

    makeDeliveryUnselectStore(idPlatform){
        let checkboxSelector = RELEASE_PAGE_SELECTORS.TO_DELIVER_CHECKBOX.replace('<idPlatform>', idPlatform);
        cy.get(checkboxSelector).uncheck();
    }

    submitDelivery(){
        cy.get(RELEASE_PAGE_SELECTORS.SUBMIT_DELIVERY_BUTTON).click();
        cy.get(RELEASE_PAGE_SELECTORS.ALBUM_POPIN).get('fieldset').get('legend', { timeout: 10000 }).should('contain', RELEASE_PAGE_SELECTORS.DELIVERY_REPORT);
    }

    checkDeliveryReport(message, storeName){
        cy.get(RELEASE_PAGE_SELECTORS.DELIVERY_REPORT_TABLE.headerStoreIdentifier).should('be.visible').should('contain', RELEASE_PAGE_SELECTORS.DELIVERY_REPORT_TABLE.headerStoreTitle);
        cy.get(RELEASE_PAGE_SELECTORS.DELIVERY_REPORT_TABLE.headerReportIdentifier).should('be.visible').should('contain', RELEASE_PAGE_SELECTORS.DELIVERY_REPORT_TABLE.headerReportTitle);
        cy.get(RELEASE_PAGE_SELECTORS.DELIVERY_REPORT_TABLE.cellStoreIdentifier).should('be.visible').should('contain', storeName);
        cy.get(RELEASE_PAGE_SELECTORS.DELIVERY_REPORT_TABLE.cellMessageIdentifier).should('be.visible').should('contain', message);
        cy.get(RELEASE_PAGE_SELECTORS.ALBUM_POPIN_BG).click({ force: true });
    }

    checkDeliveriesToDo(idPlatform){
        cy.get(RELEASE_PAGE_SELECTORS.DELIVERIES_TO_GO_TAB.identifier).should('exist').should('be.visible').should('contain', RELEASE_PAGE_SELECTORS.DELIVERIES_TO_GO_TAB.title);
        cy.get(RELEASE_PAGE_SELECTORS.DELIVERIES_TO_GO_TAB.identifier).click();
        let deleteDlvButton = RELEASE_PAGE_SELECTORS.CANCEL_DELIVERY_BUTTON.replace('<idPlatform>', idPlatform);
        cy.get(deleteDlvButton).should('exist').should('be.enabled');
    }

    cleanDeliveriesToDo(idPlatform){
        let deleteDlvButton = RELEASE_PAGE_SELECTORS.CANCEL_DELIVERY_BUTTON.replace('<idPlatform>', idPlatform);
        cy.get('body').then(($ele) => {
            if ($ele.find(deleteDlvButton).length > 0) {
                cy.get(deleteDlvButton).should('exist').should('be.enabled').click();
            } else {
                cy.log("deleteDlvButton not found!");
            }
        })
        cy.get(deleteDlvButton).should('not.exist');
    }
}
export default ReleasePage
