require("url");

Cypress.Commands.add("signInAs", (username, password) => {
  createRouteToParseApiServer('authenticate_user');

  cy.get("[placeholder='Username or Email Address']").type(username);
  cy.get("[placeholder='Password']").type(password);
  cy.contains("Sign in").click();
});


Cypress.Commands.add("registerNewUserAs", (username, password) => {
  createRouteToParseApiServer('**/Users');

  cy.contains("Register here").click();
  cy.contains("Username").siblings().find("input").type(username);
  cy.contains("Email").siblings().type(username + "@fake.address.com");
  cy.contains("Password").siblings().type(password);
  cy.contains("Retype password").siblings().type(password);
  cy.contains("I agree to the terms").click();
  cy.get("button").contains("Register").click();
  cy.location({timeout: 60000}).should((location) => {expect(location.pathname).to.equal('/');});

  cy.contains("It looks like you're new here");
});

function createRouteToParseApiServer(urlpath) {
  cy.server();
  cy.route({
    method: 'POST',
    url: urlpath,
    onRequest: (xhr) => {
      const myURL = new URL(xhr.xhr.url);
      Cypress.config('cacophony-api-server', myURL.origin);
    }
  }).as('authenticate');
}
