class UserAccessPage{

    elements = { 
        addNewUserBtn : () => cy.xpath("//a[@href='/accountsettings/useraccess/editForm']"),
        usersTable : () => cy.get("#resume"),
        allUsersTablesRaws : () => cy.xpath("//*[@id='resume']/tbody//tr"),
        confirmationPopupDeleteUser : () => cy.xpath("//div[@class='popover-content']//a[1]"),
        successMessageBox : () => cy.get("#alert-box")
    }

    newUserFormElements = { 
        loginInput : () => cy.get("#accessform-clientLogin-0"),
        emailInput : () => cy.get("#accessform-clientEmail-0"),
        permissionLevelSelectList : () => cy.get("#accessform-userStatus-0"),
        checkUncheckLink : () => cy.get("#check-uncheck"),
        submitFormBtn : () => cy.get("#send-form"),
        allAddAllBtns : () => cy.xpath("//span[text()='add all']")
    }

    getUsersTable(){
        return this.elements.usersTable()
    }

    clickOnAddNewUserBtn(){
        this.elements.addNewUserBtn().click()
    }

    fillTheNewUserCreationForm(username){
        this.newUserFormElements.loginInput().type(username)
        this.newUserFormElements.emailInput().type("svc_centralqa@believe.com")
        this.newUserFormElements.permissionLevelSelectList().select("Advanced user")
        this.newUserFormElements.checkUncheckLink().click()
        this.clickOnAllAddAllBtn()
    }

    clickOnAllAddAllBtn(){
        this.newUserFormElements.allAddAllBtns().each(($btn) => {
            $btn.click()
        })
    }

    submitUserCreationForm(){
        this.newUserFormElements.submitFormBtn().click()
    }

    findSubUser(username){
        this.elements.allUsersTablesRaws().each(($row) => {
            if($row.text().includes(username)){
                cy.log($row.text())
                cy.wrap($row).as("newUserRow")
            }
        })
        if(!cy.get("@newUserRow")){
            throw new Error("The new user is not found")
        }
    }

    deleteNewUser(){
        cy.get("@newUserRow").find(".delete").click()
        this.elements.confirmationPopupDeleteUser().click()
    }

    checkSuccessMessage(){
        this.elements.successMessageBox().invoke("text").should('contains',"User svc_centralqa@believe.com has been deleted.")
    }

    newUsershouldBeNotVisibleInUsersTable(username){
        cy.xpath("//*[@id='resume']/tbody//tr//*[text()[contains(.,'" + username + "')]]").should('not.exist')
    }
}
export default UserAccessPage