const names = require("../commands/names");


describe('camera test', () => {
  const juliet = "juliet";
  const group = 'juliets-cameras';
  const camera = 'camera';

  before(() => {
    cy.registerNewUserAs(juliet);
  });
  
  beforeEach(() => {
    cy.apiSignInAs(juliet);
  });

  it('A thermal camera can join a group the user has created', () => {
    cy.contains("Create a group").click();
    cy.createGroup(group);

    // create a camera in the group
    cy.createCamera(camera, group);

    // check that user can see camera
    cy.visit('devices');
    cy.contains(camera);
  });


  it('A camera event can be triggered', () => {
    const eventType = "throttle";
    cy.cameraEvent(eventType);
    // for event-uploader to upload
    cy.wait(3 * 1000);
    cy.apiCheckEventUploaded(juliet, camera, eventType);
  });

  it('A camera can trigger and upload a new recording', () => {
    cy.cameraRecording();
    // for video to be uploaded
    cy.wait(3 * 1000);
    cy.apiCheckDeviceHasRecording(juliet, camera);
  });

  it('A user can see the recording', () => {
    cy.signInAs(juliet);
    cy.findRecordingForCameraInAllRecordings(camera);
  });
});
