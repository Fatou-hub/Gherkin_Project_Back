import { should } from "chai";
import BackstagePage from "./backstagePage";

class SplitPage {

    elements = {
        mainHeaderTitleForSplit: () => cy.get("#split-royalites-banner"),
        startSettingSplitsBtn: () => cy.get("#set-splits")
    }

    modalForUserWithoutSplit = { 
         modalMessage: () => cy.get("//div[@id='split-royalites-banner']/div[1]/div[1]/div[1]"),
         modalLink: (index) => cy.xpath("(//div[@id='split-royalites-banner']//div[@class='card-split'])["+index+"]"),
         modalWindow: () => cy.xpath("(//div[@id='document']//div)[1]"),
         btnInsideModalWindow: () => cy.xpath("//button[text()[normalize-space()='got it']]")
 
    }

    splitRoyaltiesCreation = {
        checkBoxElement: () => cy.xpath("(//label[@class='label-split-checkbox'])[2]", {timeout: 20000}),
        setSplitBtn : () => cy.get("#btn-set-split", {timeout: 10000}),
        checkBoxElementToBeDeselected : () => cy.get("//input[@checked='checked']"),
        firstTracktoSelect : () => cy.xpath("//tbody[@id='track-selector-body']/tr[1]/td[1]/label[1]/input[1]"),
        selectTrackNextBtn: () => cy.get("#next"),
        selectTrackNextBtn2: () => cy.get("button#next-step.next-step"),
        selectFirstCollabCheckbox : () => cy.xpath("(//tbody[@id='collab-selector-body']//tr//td//label)[1]"),
        selectSecondCollabCheckbox : () => cy.xpath("(//tbody[@id='collab-selector-body']//tr//td//label)[2]"),
        valueSettedforFirstCollabCheckbox : (collabShare) => cy.xpath("(//tbody[@id='collab-selector-body']//tr[1]//input[@id='rate-input']['"+collabShare+"'])"),
        valueSettedforSecondCollabCheckbox : (collabShare2) => cy.xpath("(//tbody[@id='collab-selector-body']//tr[2]//input[@id='rate-input']['"+collabShare2+"'])"),
        confirmSplit : () => cy.get("#collabs-confirm", {timeout: 10000}),
        validatedTracksSuccessMessage : () => cy.get("#success-message"),
        splitContributorSelectorModalWindowValidated : () => cy.get("#contributor-selector", {timeout: 10000}),
        validSplitConfirmationBtn : () =>  cy.get("#validate-splits", {timeout: 10000}),
        splitSavedSuccessModalLabel : () => cy.get("#modalSuccessLabel", {timeout: 10000}),
        closeSplitSavedSuccessModalWindowBtn : () => cy.get("#close-success-modal")
    }

    splitRoyaltiesDelete = {
        splitTab : () => cy.get("#splits-tab-link"),
        splitTableOfSplitAlreadyCreated : () => cy.get("#splitroyalties-all-splits-table_wrapper", {timeout: 10000}),
        splitGarbageIconToDelete : () => cy.xpath("//table[@id='splitroyalties-all-splits-table']/tbody[1]/tr[1]/td[6]/button[1]/i[1]", {timeout: 5000}),
        splitModalWindowToDelete : () => cy.xpath("//div[@class='modal-content-validation'][1]")
    }

    tabs = {
        tab: (tabName) => cy.xpath("//div[contains(@class,'MuiChip-filledDefault')]//*[contains(text(),'"+tabName+"')]",{timeout:25000}) 
    }

    //functions created for accessing to split page
    splitJourneyIsDisplayed(){
        this.elements.mainHeaderTitleForSplit().should("exist").should("be.visible")
    }

    clickOnStartSettingSplits(){
        this.elements.startSettingSplitsBtn().click()
    }

    // functions created for the creation of split

    selectCheckBoxElement(){
        this.splitRoyaltiesCreation.checkBoxElement().click()
    }

    clickOnSetSplitBtn(){
        this.splitRoyaltiesCreation.setSplitBtn().click()
    }

    clickOnCheckBoxElementToDeselectAllTracks(){
        this.splitRoyaltiesCreation.checkBoxElementToBeDeselected().uncheck()
    }

    clickOnfirstTracktoSelect(){
        this.splitRoyaltiesCreation.firstTracktoSelect().check()
    }

    clickOnSelectTrackNextBtn(){
        cy.wait(5000)
        this.splitRoyaltiesCreation.selectTrackNextBtn().should("be.visible")
        this.splitRoyaltiesCreation.selectTrackNextBtn2().invoke('css', 'display', 'inline')
        this.splitRoyaltiesCreation.selectTrackNextBtn2().click()
        cy.wait(5000)
    }

    clickOnFirstCollabSelectedCheckbox(){
        this.splitRoyaltiesCreation.selectFirstCollabCheckbox().click()
    }

    checkValueSettedForFirstCollabCheckbox(collabShare){
        cy.wait(10000)
        this.splitRoyaltiesCreation.valueSettedforFirstCollabCheckbox(toString(collabShare)).type(collabShare)
    }

    clickOnSecondCollabSelectedCheckbox(){
        this.splitRoyaltiesCreation.selectSecondCollabCheckbox().click()
    }

    checkValueSettedForSecondCollabCheckbox(collabShare2){
        cy.wait(10000)
        this.splitRoyaltiesCreation.valueSettedforSecondCollabCheckbox(toString(collabShare2)).type(collabShare2)
    }

    clickOnConfirmSplitBtn(){
        this.splitRoyaltiesCreation.confirmSplit().click()
    }

    mysplitShouldBeSetted(){
        this.splitRoyaltiesCreation.splitContributorSelectorModalWindowValidated().should('be.visible')
    }

    clickOnValidSplitBtn(){
        this.splitRoyaltiesCreation.validSplitConfirmationBtn().click()
    }

    checkSplitSavedSuccessModalWindow(){
        this.splitRoyaltiesCreation.splitSavedSuccessModalLabel()
    }

    closeSplitSavedSuccessModalWindow(){
        this.splitRoyaltiesCreation.closeSplitSavedSuccessModalWindowBtn().click()
    }

    // functions to delete a split
    splitTabIsVisible(){
        this.splitRoyaltiesDelete.splitTab().should('be.visible')
        this.splitRoyaltiesDelete.splitTab().click()
    }

    splitTableOfReleaseIsVisible(){
        cy.wait(5000)
        this.splitRoyaltiesDelete.splitTableOfSplitAlreadyCreated().should('be.visible') 
    }

    clickOnSplitGarbageIconToDelete(){
        this.splitRoyaltiesDelete.splitGarbageIconToDelete().should('exist').should('be.visible').click()

    }

    modalWindowToDeleteASplitIsVisible(){
        this.splitRoyaltiesDelete.splitModalWindowToDelete().should("be.visible")
    }

    //checking of the three blocks
    clickOnModalLink(index){
        this.modalForUserWithoutSplit.modalLink(toString(index)).click()
    }

    ModalWindowIsVisible(){
        this.modalForUserWithoutSplit.modalWindow().should('be.visible');
    }

    clickOnGotItBtnModalWindow(){
        this.modalForUserWithoutSplit.btnInsideModalWindow().click()
    }

    ModalWindowIsNotVisible(){
        this.modalForUserWithoutSplit.modalWindow().should('not.be.visible')
    }

    // à checker d'ou vient modal() ???
    UnsplitUserModalIsVisible(){
        this.modalForUserWithoutSplit.modal().should('be.visible')
    }
}

export default SplitPage;
