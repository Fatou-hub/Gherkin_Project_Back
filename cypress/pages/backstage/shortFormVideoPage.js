import BackstagePage from "./backstagePage"
const backstagePage = new BackstagePage()

class ShortFormVideoPage {

    elements = {
        dspLastUpdateWidget: (dspName) => cy.xpath("//div[contains(@class,'MuiChip-filledDefault')]//*[contains(text(),'"+dspName+"')]",{timeout:25000})
    }

    shortFormVideoTable = {
        //Short Form Track Table
        tableColumnName: (index) => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/thead/tr/th[" + index + "]"),
        firstTrack: () => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/tbody/tr[1]"),
        allTracksContent: () => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/tbody/tr/td[1]"),
        allLastReleaseDateContent: () => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/tbody/tr/td[2]",{timeout: 25000}),
        allCreationsContent: () => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/tbody/tr/td[3]"),
        allTerritoriesContent: () => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/tbody/tr/td[4]"),
        allViewsContent: () => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/tbody/tr/td[5]"),
        allAudioStreamsContent: () => cy.xpath("//div[contains(@class, 'MuiTableContainer')]//table/tbody/tr/td[6]"),
        tablePaginationDiv: () => cy.xpath("//p[contains(@class, 'MuiTablePagination-displayedRows')]"),
        shortFormVideoTableRaw : (index) => cy.xpath("//table[contains(@class,'MuiTable-root')]/tbody/tr["+ index +"]/td/div/a/div/div",{timeout: 25000})
    }

    checkTableColumnName(index, expectedName) {
        this.shortFormVideoTable.tableColumnName(index).invoke('text').should('eq', expectedName)
    }

    waitFirstTrackAppearInShortFormVideoTrackTable() {
        var el = this.shortFormVideoTable.shortFormVideoTableRaw(1)
        el.find('img',{timeout:30000,includeShadowDom:true}).should('exist')
    }

    clickOnFirstTrackAppearInShortFormVideoTrackTable() {
        var el = this.shortFormVideoTable.shortFormVideoTableRaw(1)
        el.find('img',{timeout:30000,includeShadowDom:true}).should('exist').click()
    }

    checkDspLastUpdateWidgetVisibility(dspName){
        this.elements.dspLastUpdateWidget(dspName).then(($el) => {
            cy.log($el)
        })
        
    }

    checkTrackTableInfos() {
        this.waitFirstTrackAppearInShortFormVideoTrackTable()
        this.shortFormVideoTable.allTracksContent().filter(":lt(3)").then(($allTracks) => {
        if ($allTracks.length < 1) {
            fail("At least one track must be present to continue this test")
        }
        else {
            cy.wrap($allTracks).as('allTracks').then(() => {
            cy.get("@allTracks").each(($el) => {
                cy.wrap($el).invoke('text').should('exist');
                cy.wrap($el).find('span').invoke('text').should('exist');
                cy.wrap($el).find('img').should('have.attr', 'src')
            })
        })
            backstagePage.elements.currentFilterDate().then(($actualFilter) => { cy.wrap($actualFilter).as("actualDateFilter") })
            this.shortFormVideoTable.allCreationsContent().filter(":lt(3)").then(($allCreations) => {
                cy.wrap($allCreations).as('allCreations').then(() => {
                    cy.get("@allCreations").each(($el) => {
                        cy.wrap($el).invoke('text').should('exist');
                        cy.get("@actualDateFilter").then(($actualFilter) => {
                            cy.wrap($el).invoke('text').should('contains', '%')
                            cy.wrap($el).invoke('text').should('contains', 'vs. last ' + $actualFilter.text().toLocaleLowerCase())
                        })
                    })
                })
            })
            this.shortFormVideoTable.allLastReleaseDateContent().filter(":lt(3)").then(($allLastReleaseDate) => {
                cy.wrap($allLastReleaseDate).as('allLastReleaseDate').then(() => {
                    cy.get("@allLastReleaseDate").each(($el) => {
                        backstagePage.checkReleasedDateFormat($el.text())
                    })
                })
            })
            this.shortFormVideoTable.allTerritoriesContent().filter(":lt(3)").then(($allTerritories) => {
                cy.wrap($allTerritories).as('allTerritories').then(() => {
                    cy.get("@allTerritories").each(($el) => {
                        cy.wrap($el).find("svg");
                    })
                })
            })
            this.shortFormVideoTable.allViewsContent().filter(":lt(3)").then(($allViews) => {
                cy.wrap($allViews).as('allViews').then(() => {
                    cy.get("@allViews").each(($el) => {
                        cy.wrap($el).invoke('text').should('exist');
                        cy.get("@actualDateFilter").then(($actualFilter) => {
                            cy.wrap($el).invoke('text').should('contains', '%')
                            cy.wrap($el).invoke('text').should('contains', 'vs. last ' + $actualFilter.text().toLocaleLowerCase())
                        })
                    })
                })
            })
            this.shortFormVideoTable.allAudioStreamsContent().filter(":lt(3)").then(($allAudioStreams) => {
                cy.wrap($allAudioStreams).as('allAudioStreams').then(() => {
                    cy.get("@allViews").each(($el) => {
                        cy.wrap($el).invoke('text').should('exist');
                        cy.get("@actualDateFilter").then(($actualFilter) => {
                            cy.wrap($el).invoke('text').should('contains', '%')
                            cy.wrap($el).invoke('text').should('contains', 'vs. last ' + $actualFilter.text().toLocaleLowerCase())
                        })
                    })
                })
            })
        }
    })
}}
export default ShortFormVideoPage