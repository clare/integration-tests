

Cypress.Commands.add("signInAs", (username, password) => {
  createRouteToParseApiServer();

  cy.get("[placeholder='Username or Email Address']").type(username);
  cy.get("[placeholder='Password']").type(password);
  cy.contains("Sign in").click();
});

function createRouteToParseApiServer() {
  cy.server();
  cy.route({
    method: 'POST',
    url: 'authenticate_user',
    onRequest: (xhr) => {
      let fullUrl = xhr.xhr.url;
      let baseUrl = fullUrl.substr(0, fullUrl.indexOf('/authenticate'));
      Cypress.config('cacophony-server', baseUrl);
    }
  }).as('authenticate');
};

