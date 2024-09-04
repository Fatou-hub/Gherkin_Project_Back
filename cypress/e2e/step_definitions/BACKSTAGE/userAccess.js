const { When, Then} = require("@badeball/cypress-cucumber-preprocessor");
const { default: UserAccessPage } = require("../../../pages/backstage/userAccessPage");

const userAccessPage = new UserAccessPage;

var username = "CypressTestUser" + Math.floor(Math.random() * (100 - 1) + 1);

When(`I click on "Add a new user" button`, () => {
    userAccessPage.clickOnAddNewUserBtn()
})

When(`I fill the new user informations form`, () => {
    userAccessPage.fillTheNewUserCreationForm(username)
})

When(`I submit the new sub user creation form`, () => {
    userAccessPage.submitUserCreationForm()
})

Then(`I am redirected to 'User Access' page`, () => {
    cy.title().should('equal','User Access')
    userAccessPage.getUsersTable()
})

Then(`the new user is visible in the users table`, () => {
    userAccessPage.findSubUser(username)
})

When(`I delete the new user by clicking on his 'Delete' button`, () => {
    userAccessPage.deleteNewUser()
})

Then(`I should see a success message appear regarding the deletion of my new user`, () => {
    userAccessPage.checkSuccessMessage()
})

Then(`I should no longer see the new user in the user table`, () => {
    userAccessPage.newUsershouldBeNotVisibleInUsersTable(username)
})
