class IntranetPage {

    elements = { 
        siteLogo : () => cy.get('#layout-ni-header-left'),
        dropdownMenuLink : () => cy.get("#dropdownMenuLink"),
        headerIconLogout : () => cy.get("#header-icon-logout")
    }

    loginIfNeeded(username) {
        cy.url().then((currentUrl) => {
            if (!currentUrl.includes('login')) {
                this.accessToLoginPage();
            }
            this.login(username);
        });
    }

    login(username){
        cy.getCrendentials("intranet").then((datas) => {
        let account = datas.filter(account => account.idTypeUser == username)[0];
        cy.wrap(account).as("currentUser");
        cy.log("Working env url for intranet : " + Cypress.env('intranetUrl'));
        cy.get('#login').should('be.visible').type(account.login);
        cy.get('#password').should('be.visible').type(account.password);
        cy.contains('Connect').click();
        cy.url().should('include', '/home.php');
        })
    }

    accessToLoginPage(){
        cy.clearAllCookies()
        cy.log("Working env url for intranet : " + Cypress.env('intranetUrl'))
        cy.visit(Cypress.env('intranetUrl'), {
            headers: {
                'accept': 'application/json, text/plain, */*',
                'CF-Access-Client-Id': Cypress.env('CF_id'),
                'CF-Access-Client-Secret': Cypress.env('CF_secret')
            },
            failOnStatusCode: false
        });
    }

    logout(){
        this.elements.dropdownMenuLink().click()
        this.elements.headerIconLogout().click()
    }

    goToHomepage() {
        cy.visit(Cypress.env('intranetUrl'));
    }

    clickOnMainLogo() {
        cy.get('body').click()
        this.elements.siteLogo().click();
    }

    clickOnIcon(expectedIconName){
        cy.xpath("//*[@data-original-title='" + expectedIconName + "']").click()
        cy.wait(1000)
    }
    clickOnItem(expectedItemName){
        cy.xpath("(//*[text()='" + expectedItemName + " '])[1]").click()
        cy.wait(1000)
    }

    filterResultsByletter(expectedLetter){
        cy.xpath("//a[text()='" + expectedLetter +"']").click()
        cy.wait(500)
    }
}
export default IntranetPage