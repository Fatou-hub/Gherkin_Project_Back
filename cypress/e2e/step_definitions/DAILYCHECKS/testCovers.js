const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");
When(`I access to test covers page`, () => {
    cy.visit('http://covers.believedigital.com/tests/testImages.php', {
        headers: {
            'accept': 'application/json, text/plain, */*',
            // We must define the user agent to avoid 403 codes
            // https://scrapeops.io/web-scraping-playbook/403-forbidden-error-web-scraping/#use-fake-user-agents
            'user-agent': 'curl'
        },
        failOnStatus: false
    });
})

Then(`there are {int} covers in {string}`, (expectedNbCovers, expectedCategoryName) => {

    expectedSectionXpath = "//h2[(text() ='" + expectedCategoryName + "')]/parent::td/parent::tr/following-sibling::tr[1]"
    coversContainer = cy.xpath(expectedSectionXpath + "/td/center/img")
    nbCovers = coversContainer.its('length')
    nbCovers.should('eq', expectedNbCovers)

    cy.wrap(expectedCategoryName).as('CategoryName')
    cy.xpath(expectedSectionXpath).then(($container) => {
        cy.log($container.text())
        if ($container.text().includes("loading")){
            cy.xpath(expectedSectionXpath+"//*[contains(text(),'[ loading ]')]").its('length').then(($loadingCount) => { 
            cy.wrap($loadingCount).as('NbCoversInLoading')
        })
        }else{
            cy.wrap($loadingCount = 0).as('NbCoversInLoading')
        }
    })
})

Then(`all covers in this section are displayed`, () => {
    cy.get('@NbCoversInLoading').then((NbCoversInLoading) => {
        if(NbCoversInLoading > 0){
             // Condition à supprimer après MEP des correctifs et suppression des covers obsolètes
            cy.get('@CategoryName').then((categorieName) => {
                if (categorieName == "PENDING ALBUM WITHOUT TOKEN"
                ||categorieName == "STORE LOGOS (on covers)"
                || categorieName == "ECRM NEWSLETTER IMAGE" ){
                    cy.wrap(NbCoversInLoading).should('eq',1)
                }
               else {
                   throw new Error(NbCoversInLoading + " cover(s) still in status 'loading' in this section**")
               }
            })
        }   
    })
    
})