const names = require("../names");
const general = require("../general");

Cypress.Commands.add("apiCreateCamera", (cameraName, group) => {
  const devicesUrl = general.getTestApiUrl() + '/api/v1/devices';
  const password = 'p' + names.getTestName(cameraName);

  const data = {
    devicename : names.getTestName(cameraName),
    password : password,
    group: names.getTestName(group),
  };

  cy.request('POST', devicesUrl, data);
});

