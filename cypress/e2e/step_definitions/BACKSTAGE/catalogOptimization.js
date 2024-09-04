const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");
const { default: BackstagePage } = require("../../../pages/backstage/backstagePage");
const { default: CatalogOptimizationPage } = require("../../../pages/backstage/catalogOptimizationPage");
const { default: TrackPage } = require("../../../pages/backstage/trackPage");
require("@cypress/xpath")

const backstagePage = new BackstagePage();
const catalogOptimizationPage = new CatalogOptimizationPage();
const trackPage = new TrackPage();

Given(`a producer with BSD access`, () => {
    backstagePage.accessToExpectedLoginPage()
    backstagePage.login("PETITBISCUIT_PRODUCER")
})

When(`the first column corresponds to tracks in track table`, () => {
    assert(catalogOptimizationPage.getTracksTableColumnNameByIndex(1),"TRACKS")
})

When(`the second column corresponds to first released in track table`, () => {
    assert(catalogOptimizationPage.getTracksTableColumnNameByIndex(2),"FIRST RELEASED")
})

When(`each line represents a valid Spotify ISRC`, () => {
    catalogOptimizationPage.verifyAllSpotifyISRCTitlesAndCovers()
})

When(`I click on the first track in catalog optimization page`, () => {
    catalogOptimizationPage.selectFirstTrack()
})

When(`he can see the ISRC track name`, () => {
    trackPage.getTrackName()
})

When(`he can see the ISRC version`, () => {
    trackPage.getTrackISRC()
})

When(`he can see the ISRC nb release`, () => {
    trackPage.getTrackNbReleaseInPopup().should('have.length', 1)
})

When(`he can see the oldest cover`, () => {
    trackPage.getTrackCover().should('attr', 'src')
})

When(`I click on the Information button on track page`, () => {
    trackPage.clickOnInformationBtn()
})

Then(`a popup opens on the track page`, () => {
    trackPage.checkInformationPopupIsOpen()
})

Then(`the information about X Releases is displayed`, () => {
    trackPage.getTrackNbReleaseInPopup()
})

Then(`the Last release date is displayed`, () => {
    trackPage.inspectLastReleaseDate()
})