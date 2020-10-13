Cypress.Commands.add("findRecordingForCameraInAllRecordings", (cameraName) => {
    cy.visit('recordings');
    cy.get('.recording-device').contains(cameraName).click();
});
  