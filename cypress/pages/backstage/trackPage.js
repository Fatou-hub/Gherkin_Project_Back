import BackstagePage from "./backstagePage";

const backstagePage = new BackstagePage();

class TrackPage{

    elements = { 
        trackName : () => cy.xpath("//div[@class='MuiBox-root css-fhxiwe']//p[1]"),
        trackArtists : () => cy.xpath("//p[text()='Track']/following-sibling::p"),
        trackCover : () => cy.xpath("//img[contains(@class,'MuiCardMedia-root MuiCardMedia-media')]"),
        informationBtn : () => cy.xpath("(//div[contains(@class,'MuiPaper-root MuiPaper-elevation')]//div)[2]/button"),
        informationPopup : () => cy.xpath("(//div[@role='dialog'])[3]"),
        trackIsrcInInformationPopup : () => cy.xpath("//p[text()='ISRC']/following-sibling::p"),
        trackNbReleaseInInformationPopup : () => cy.xpath("//p[text()='Releases']/following-sibling::p"),
        closeInformationPopupBtn : () => cy.xpath("(//div[@role='dialog'])[3]//button[@aria-label='close']"),
        trackLastReleaseDate : () => cy.xpath("(//div[contains(@class,'MuiPaper-root MuiPaper-elevation')]//div)[3]/div[2]")
    }

    getTrackName(){
        return this.elements.trackName()
    }
    getTrackArtists(){
        return this.elements.trackArtists()
    }
    getTrackCover(){
        return this.elements.trackCover()
    }
    
    clickOnInformationBtn(){
        this.elements.informationBtn().click({force:true})
    }

    checkInformationPopupIsOpen(){
        this.elements.informationPopup()
    }

    getTrackNbReleaseInPopup(){
        var nbRelease
        this.clickOnInformationBtn()
        nbRelease = this.elements.trackNbReleaseInInformationPopup().invoke('text')
        this.elements.trackNbReleaseInInformationPopup().invoke('text').should('not.be.empty')
        this.elements.trackNbReleaseInInformationPopup().invoke('text').should('to.match', /^[0-9]*$/)
        this.elements.closeInformationPopupBtn().click()
        return nbRelease
    } 

    getTrackISRC(){
        var isrc
        this.clickOnInformationBtn()
        this.elements.trackIsrcInInformationPopup().invoke('text').should('not.be.empty')
        this.elements.closeInformationPopupBtn().click()
        return isrc
    } 

    inspectLastReleaseDate(){
        this.elements.trackLastReleaseDate().then(($el) => {
        backstagePage.checkReleasedDateFormat($el.text())
        })
    }

}
export default TrackPage