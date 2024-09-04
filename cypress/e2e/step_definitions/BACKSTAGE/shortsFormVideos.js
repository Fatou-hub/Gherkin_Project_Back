import {When,Then} from "@badeball/cypress-cucumber-preprocessor";
import ShortFormVideoPage from "../../../pages/backstage/shortFormVideoPage";
import BackstagePage from "../../../pages/backstage/backstagePage";

const shortFormVideoPage = new ShortFormVideoPage();
const backstagePage = new BackstagePage()

Then("the column {int} corresponds to {string} field in track table", (index, expectedName) => {
    shortFormVideoPage.checkTableColumnName(index,expectedName)
});

Then("the data displayed in the table is consistent", () => {
    shortFormVideoPage.checkTrackTableInfos()
});

When("I click on on the first row of the track table", () => {
    shortFormVideoPage.clickOnFirstTrackAppearInShortFormVideoTrackTable()
});

Then("the {string} last upadte widget is well display", (dspName) => {
    shortFormVideoPage.checkDspLastUpdateWidgetVisibility(dspName)
});

