const {When, Then, Before} = require("@badeball/cypress-cucumber-preprocessor");

Then(`I can navigate to the following path {string}`, (expectedPath) => {
  const targetUrl = `http://intranet-int.dmz.blvs.core${expectedPath}`;
  cy.visit({
    url: targetUrl,
    method: 'GET',
    log: true,
    retryOnStatusCodeFailure : true, 
    retryOnNetworkFailure: true   
  })
});