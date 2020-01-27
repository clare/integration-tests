const url = require("url");

Cypress.Commands.add("createCamera", (cameraName, groupName) => {
  const urlParams = url.format({
    pathname: 'create/' + cameraName,
    query: {
      'group-name': groupName,
      'api-server' : Cypress.config('cacophony-api-server'),
    }
  });

  cy.request(Cypress.config('fakeCameraUrl') + urlParams);
});
