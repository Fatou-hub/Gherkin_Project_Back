import BackstagePage from "./backstagePage";

const backstagePage = new BackstagePage()
class CatalogOptimizationPage{

    elements = { 
        tablePaginationDiv : () => cy.xpath("//p[contains(@class, 'MuiTablePagination-displayedRows')]"),
        trackTableColumnTRACKS : () => cy.xpath("//tbody/tr/td[1]"),
        tackTableColumnFIREST_RELEASED : () => cy.xpath("//tbody/tr/td[2]"),
    }

    verifyAllSpotifyISRCTitlesAndCovers(){
        // Below: We check all tracks titles and covers
        this.elements.tablePaginationDiv()
        
        this.elements.trackTableColumnTRACKS().then(($allTracks_Column_TRACKS) => { 
            if($allTracks_Column_TRACKS.length < 1){
                fail("At least one track must be present to continue this test")
            }
            cy.wrap($allTracks_Column_TRACKS).as('AllTracks_Column_TRACKS')
            cy.get("@AllTracks_Column_TRACKS").each(($el) => {
            cy.wrap($el).invoke('text').should('exist');
            //Artist names do not appear in test environments for the moement
            //cy.wrap($el).find('span').invoke('text').should('exist');
            cy.wrap($el).find('img').should('have.attr', 'src')
            })
        })
        // Check all tracks first released date
        this.elements.tackTableColumnFIREST_RELEASED().then(($allTracks_Column_FIRST_RELEASED) => { 
            cy.wrap($allTracks_Column_FIRST_RELEASED).as('AllTracks_Column_FIRST_RELEASED')
            cy.get("@AllTracks_Column_FIRST_RELEASED").each(($el) => {
                backstagePage.checkReleasedDateFormat($el.text())
                console.log($el.text())
            })
        })
    }

    getTracksTableColumnNameByIndex(index){
        return cy.xpath("//th[contains(@class,'MuiTableCell-root MuiTableCell-head')][" + index + "]").invoke('text')
    }

    selectFirstTrack(){
        //TODO: Find a better solution to work around this behavior. We have difficulty targeting the first result in the list which takes a long time to load
        cy.wait(10000)
        cy.get(".MuiTablePagination-root",{timeout:10000})
        this.elements.trackTableColumnTRACKS().then(($allTracks_Column_TRACKS) => { 
            cy.wrap($allTracks_Column_TRACKS).as('AllTracks_Column_TRACKS')
            cy.get("@AllTracks_Column_TRACKS").first().click()
        })
    }

}
export default CatalogOptimizationPage