import {When,Then} from "@badeball/cypress-cucumber-preprocessor";
import SplitPage from "../../../pages/backstage/splitPage";

const splitPage = new SplitPage();

// access to split page confirmation

Then("I access to split page", () => {
    cy.visit(Cypress.env("splitPageUrl"))
    cy.wait(3000)
});


// steps definition for create a split feature
When("I click on the START SETTING SPLITS button", () => {
    splitPage.clickOnStartSettingSplits()
});

When("I select checkbox of the second release", () => {
    splitPage.selectCheckBoxElement()
});

When("I click on the SET SPLIT button", () => {
    splitPage.clickOnSetSplitBtn()
});

// When("I deselect all tracks selected by default", () => {
//     splitPage.clickOnCheckBoxElementToDeselectAllTracks()
// });

// When("I select the first track", () => {
//     splitPage.clickOnfirstTracktoSelect()
// });

When("I click on the next button on the split page", () => {
    splitPage.clickOnSelectTrackNextBtn()
});

When("I choose the first collaborator from the collaborators list", () => {
    splitPage.clickOnFirstCollabSelectedCheckbox()
});

When("I set {int} for the first collaborator", (collabShare) => {
    splitPage.checkValueSettedForFirstCollabCheckbox(collabShare)
});

When("I choose the second collaborator from the collaborators list", () => {
    splitPage.clickOnSecondCollabSelectedCheckbox()
});

When("I set {int} for the second collaborator", (collabShare2) => {
    splitPage.checkValueSettedForSecondCollabCheckbox(collabShare2)
});

When("I click on the confirm button", () => {
    splitPage.clickOnConfirmSplitBtn()
});

Then("I have well selected my collaborators", () => {
    splitPage.mysplitShouldBeSetted()
});

Then("I click on the Apply button to create my split successfully", () => {
    splitPage.clickOnValidSplitBtn()
});

Then("I should see appear a success modal window for my created split", () => {
    splitPage.checkSplitSavedSuccessModalWindow()
});

Then("I close split creation success modal", () => {
    splitPage.closeSplitSavedSuccessModalWindow()
});

//step definition to delete a split
When("I am on the split tab", () => {
    splitPage.splitTabIsVisible()
});

When("the split table is visible", () => {
    splitPage.splitTableOfReleaseIsVisible()
});

When("I click on the bin icon to delete a release", () => {
    splitPage.clickOnSplitGarbageIconToDelete()
});

// When("a modal window should be opened to confirm", () => {
//     splitPage.
// });

When("", () => {

});
    //steps regarding the 3 widgets for a producer with no plit created
    
When("I click on the widget {int}", (index) => {
    splitPage.clickOnModalLink(index)
});

Then("a modal window should be visible", () => {
    splitPage.ModalWindowIsVisible()
});

When(" I click on the GOT IT button", () => {
    splitPage.clickOnGotItBtnModalWindow()
});

Then("the modal window should not be visible", () => {
    splitPage.ModalWindowIsNotVisible()
});

