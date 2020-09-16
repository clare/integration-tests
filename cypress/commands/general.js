
Cypress.Commands.add("getApiPath", () => {
  createRouteToParseApiServer('**/endUserAgreement/**');
  cy.visit('');
});

Cypress.Commands.add("checkOnPage", (pageAddress) => {
  cy.location({timeout: 60000}).should((location) => {expect(location.pathname).to.equal(pageAddress);});
});

function createRouteToParseApiServer(urlpath) {
  cy.server();
  cy.route({
    method: 'GET',
    url: urlpath,
    onRequest: (xhr) => {
      const myURL = new URL(xhr.xhr.url);
      Cypress.config('cacophony-api-server', myURL.origin);
    }
  }).as('authenticate');
}

/**
 * Get the api url, but only if it is the test api url.   If it is for the production server then throw
 * an error to stop the test.  
 */
function getTestApiUrl() {
  const serverUrl = Cypress.config('cacophony-api-server');

  if (serverUrl.includes('api.cacophony.org.nz')) {
    throw new Error("You are running the tests against the cacophony production server.   You shouldn't be trying to create new users, or devices on the actual server.");
  }

  return serverUrl;
}

function getApiUrl() {
  return Cypress.config('cacophony-api-server');
}

exports.getTestApiUrl = getTestApiUrl;
exports.getApiUrl = getApiUrl;
