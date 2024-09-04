const {Given, When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

When(`I am on {string} tab`, (expectedTabName) => {
    cy.xpath("//li[@class='button current']").then(($btn) => { return $btn.text()}).as('currentTabName')
    cy.get("@currentTabName").then((tabName) => {
        if(!tabName.includes(expectedTabName)){
            throw new Error("Somethings is wrong with current URL")
        }
    })
});

Then(`there are {int} status OK`, (expectedNbStatus) => {
    let nbStats= 0;
    allStats = cy.xpath("//*[@id='view']/div/div/div[2]/div/table/tbody/tr/td/span")
    allStats.children().each(($el) => {
        cy.log(parseFloat($el.text().replace(',','.')))
        if(parseFloat($el.text().replace(',','.')) < parseFloat('0.2'))
            throw new Error("Wrong status code. Find code '" + $el.text() + "'")
        nbStats++
    }).then(() => {
        if( cy.wrap(nbStats) < expectedNbStatus - 15 ){
            throw new Error("Not enough status")
        }
    })
});

When(`I click on {string} in Riemann menu`, (expectedTabName) => {
    cy.wait(1000).xpath("//li[text() = '" + expectedTabName + "']").click()
});

Then(`the 'waiting deliveries' is less than {int}k`, (maxErrorAccepted) => {
    cy.checkRiemannStatValue("//*[@id='view']/div/div/div[1]/div[1]/div[3]/div[1]/div/div","waiting deliveries",maxErrorAccepted)
});

Then(`the 'ready to deliver' is less than {int}k`, (maxErrorAccepted) => {
    cy.checkRiemannStatValue("//*[@id='view']/div/div/div[1]/div[1]/div[3]/div[2]/div/div/div","ready to deliver", maxErrorAccepted)
});

Then(`the 'last errors' is less than {int}k`, (maxErrorAccepted) => {
    cy.checkRiemannStatValue("/html/body/div[2]/div/div/div[1]/div[3]/div[3]/div[1]/div/div", "last errors (12h)",maxErrorAccepted)
});

Then(`the 'Track to encode' is less than {int}k`, (maxErrorAccepted) => {
    cy.checkRiemannStatValue("//*[@id='view']/div/div/div/div[1]/div[2]/div[2]/div[2]/div[2]/div/div", "last errors (12h)",maxErrorAccepted)
});