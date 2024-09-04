class BackstagePage{

    elements = { 
        //Backstage main menu
        menuToggle : () => cy.xpath("//div[@id='bs-left']//i[text()='chevron_right']"),
        menuAnalytics : () => cy.xpath("//div[@id='bs-left-menu']//div[text()='Analytics']"), 
        menuFinancial  : () => cy.xpath("//div[@id='bs-left-menu']//div[text()='Financial']"),
        catalogOptimizationMenuItem : () => cy.xpath("//div[@id='bs-left-menu']//div[text()='Catalog optimization ']"),
        shortFormVideosBtn : () => cy.xpath("//div[@id='bs-left-menu']//div[text()='Short-form videos']"),
        splitBtn : () => cy.xpath("//div[@id='bs-left-menu']//div[text()='Split  ']"),
        
        // User menu
        avatarIconMenu : () => cy.xpath("//li[@id='avatarIconMenu']//i"),
        logoutBtn : () => cy.xpath("//a[@href='?logout=1']"),
        usersAccessBtn : () => cy.xpath("//a[@href='accountsettings/useraccess']"),

        //Common for all Analytics pages
        radioGroupFilter : (filter) => cy.xpath("//*[contains(@role, 'radiogroup')]//*[text()='"+ filter + "']"),
        currentFilterDate : ( )=> cy.xpath("//span[contains(@class, 'Mui-checked') and contains(@class, ' MuiRadio-colorPrimary')][1]/following-sibling::*[1]").first(),
        
        // Common for all Backstage pages
        mainHeaderTitle : () => cy.get("#bs-main-header-title")
    }

    newReleaseModalElements = {
        // New release 
        modal: () => cy.get('#newReleaseModal'),
        body : () => cy.get('#newReleaseModalBody'),
        state : () => cy.get('#newReleaseModalState'),
        title : () => cy.get('#newReleaseModalTitle'),
        nextButton : () => cy.get('#newReleaseModalNextButton'),

        // 1/3 
        optionAudio : () => cy.get('#type_audio'),
        optionVideo : () => cy.get('#type_video'),
        optionRingtone : () => cy.get('#type_ringtone'),

        // 2/3
        optionAnyGenre : () => cy.get('#genre_nogenre'),
        optionGenreWestern : () => cy.get('#genre_western'),
        optionGenreJazz : () => cy.get('#genre_jazz'),
        
        // 3/3
        newReleaseInputTitle : () => cy.get('#newReleaseInputTitle'),
    }

    accessToExpectedLoginPage(){
        cy.visit(Cypress.env("backstageUrl"))
    }

    login(username){
        cy.origin('https://producer-18.test.believe.fr', () => {
        })
        cy.getCrendentials("backstage").then((datas) => {
        let account = datas.filter(account => account.idTypeUser == username)[0];
        cy.wrap(account).as("currentUser")
        cy.wait(1000)
        cy.get('#signInName', { timeout: 60000 }).should('be.visible');
        cy.get('#signInName').type(account.login)
        cy.get('#password').type(account.password)
        cy.contains('Login').click()
        /*
        cy.get(BACKSTAGE_SELECTORS.LOGIN.signInName).type(account.login);
        cy.get(BACKSTAGE_SELECTORS.LOGIN.password).type(account.password);
        cy.get(BACKSTAGE_SELECTORS.LOGIN.loginButton).click();
        */
        })
    }

    logout(){
        this.elements.avatarIconMenu().click({force:true})
        cy.wait(1500)
        this.elements.logoutBtn().click()
    }

    clickOnMainMenuItemByName(itemLocation){
        this.openMainMenuIfIsNotVisible()
        if (itemLocation.includes("/")){
            var labelGroup =  cy.xpath("//div[@id='bs-left-menu']//*[text()='" + itemLocation.split("/")[0] + "']")
            var expectedLink =  cy.xpath("//div[@id='bs-left-menu']//*[text()='" + itemLocation.split("/")[1] + "']")
            this.openLabelGroupIfIsNotVisible(expectedLink,labelGroup)
            expectedLink.click()

        } else {
            cy.xpath("//div[@id='bs-left-menu']//*[text()='" + itemLocation + "']").click()
        }
    }

    clickOnUserMenuItemByName(linkName){
        cy.get('body').click()
        this.elements.avatarIconMenu().click({force:true})
        cy.xpath("//*[@id='avatarContainer']/div//*[text()='" + linkName + "']").click()
    }

    pageHeaderTitleShouldBe(headerTitle){
        this.elements.mainHeaderTitle().invoke("text").then(($headerTitle) => {
            $headerTitle.replace("chevron_right"," >")
            assert.equal($headerTitle.replace("chevron_right"," >"),headerTitle)
        })
    }

    pageIsWellDisplay(){
        cy.get("#bs-left-menu") 
        cy.get("#bs-main") 
        cy.get("#bs-main-header") 
        cy.get("#bs-main-content-container") 
    }

    openMainMenuIfIsNotVisible(){
        this.elements.menuToggle().then(($el) => {
            if ($el.is(':visible')){
                this.elements.menuToggle().click()
            }
        });
    }

    openLabelGroupIfIsNotVisible(link,labelGroup){
        link.then(($el) => {
            if (!$el.is(':visible')){
                labelGroup.click()
            }
        });
    }

    newReleaseModalIsVisible(){
        this.newReleaseModalElements.modal().should('be.visible')
    }

    filterResultsByDayInAnalyticsPage(filter){
        this.elements.radioGroupFilter(filter + "D").click()
    }

    releaseCreationFormIsWellDisplay(){
        this.newReleaseModalElements.state().should('have.text',"1/3")
        this.newReleaseModalElements.title().should('have.text',"New release")
        this.newReleaseModalElements.optionAudio().should('be.visible')
        this.newReleaseModalElements.optionVideo().should('be.visible')
        this.newReleaseModalElements.optionVideo().should('be.visible')
        this.newReleaseModalElements.nextButton().click()

        this.newReleaseModalElements.state().should('have.text',"2/3")
        this.newReleaseModalElements.title().should('have.text',"New audio release")
        this.newReleaseModalElements.optionAnyGenre().should('be.visible')
        this.newReleaseModalElements.optionGenreWestern().should('be.visible')
        this.newReleaseModalElements.optionGenreJazz().should('be.visible')
        this.newReleaseModalElements.nextButton().click()

        this.newReleaseModalElements.state().should('have.text',"3/3")
        this.newReleaseModalElements.title().should('have.text',"New audio release")
        this.newReleaseModalElements.newReleaseInputTitle().should('be.visible')
    }

    goToCatalogOptimizationPage(){
        this.elements.menuToggle().click()
        this.elements.menuAnalytics().click()
        this.elements.catalogOptimizationMenuItem().click()
    }

    goToUsersAccessPage(){
        this.elements.avatarIconMenu().click()
        this.elements.usersAccessBtn().click()
    }

    goToShortFormVideosPage(){
        this.elements.menuToggle().click()
        this.elements.menuAnalytics().click()
        this.elements.shortFormVideosBtn().click()
    }

    goToSplitPage(){
        this.elements.menuToggle().click()
        this.elements.menuFinancial().click()
        this.elements.splitBtn().click()
    }

    checkDateFilterVisibility(){
        this.elements.radioGroupFilter("7D")
        this.elements.radioGroupFilter("28D")
        this.elements.radioGroupFilter("90D")
        this.elements.radioGroupFilter("365D")
    }

    checkReleasedDateFormat(el){
        var month = el.split(",")[0].split(" ")[0]
        var day = el.split(",")[0].split(" ")[1]
        var year = el.split(",")[1]
        var expecxtedMonth = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

        if(year < 1900 || year > 2100 || month == 0 || month > 12 || !expecxtedMonth.includes(month)){
            throw new Error('Invalid date format' + el)
        }
    }

}
export default BackstagePage