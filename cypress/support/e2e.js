// ***********************************************************
// support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
/* eslint-disable import/no-extraneous-dependencies */
import './commands';
import 'cypress-each';
import { hideBackgroundRequests } from './cypressUtils';
import 'cypress-plugin-xhr-toggle';

hideBackgroundRequests();

require('@cypress/xpath');
require('@shelex/cypress-allure-plugin');
require('cypress-plugin-xhr-toggle');

// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {
  // Blocks POST requests to Datadog RUM with a stubbed response
  cy.intercept('POST', 'https://browser-intake-datadoghq.eu/api/v2/rum*', {
    statusCode: 503,
    body: 'Stubbed response',
  }).as('blockDatadogRum');

  // Blocks GET requests to retrieve the script from the Datadog agent
  cy.intercept('GET', 'https://www.datadoghq-browser-agent.com/*', {
    statusCode: 503,
    body: 'Stubbed response',
  }).as('blockDatadogAgent');

  // Blocks requests to Zendesk
  cy.intercept('GET', /^https?:\/\/(.+\.)?zendesk\.com\//, {
    statusCode: 503,
    body: 'Stubbed response',
  }).as('blockZendesk');

  // Specifically blocks POST requests to believedigital.zendesk.com
  cy.intercept('POST', 'https://believedigital.zendesk.com/**', {
    statusCode: 503,
    body: 'Stubbed response',
  }).as('blockZendeskSpecific');

  // Uses middleware to intercept and destroy requests to
  // Datadog RUM without stubbing them
  cy.intercept(
    {
      url: /https:\/\/browser-intake-datadoghq\.eu\/api\/v2\/rum.*/,
      middleware: true,
    },
    (req) => {
      req.destroy();
    },
  ).as('destroyDatadogRum');
});
