// ***********************************************************
// This example support/index.js is processed and
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
import '../commands/general';
import '../commands/thermalcamera';
import '../commands/api/users';
import '../commands/api/camera';
import '../commands/browsegui/user';
import '../commands/browsegui/groups';

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(function () {
  cy.log('Global test before: Getting api server path');
  cy.getApiPath();
});