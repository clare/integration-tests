
const crypto = require("crypto");

context('New User', () => {
  const uniqueId =  crypto.randomBytes(2).toString('hex');
  const username = "integrationtester"  +  uniqueId;
  const password = 'p' + username;
  const group = 'test' + uniqueId;
  const camera = 'fake-' + group;

  beforeEach(() => {
    cy.visit('');
  });

  it('A new user can create an account, and a group', () => {
    cy.registerNewUserAs(username, password);

    cy.contains("Create a group").click();
    cy.createGroup(group);

    // create a camera in the group
    cy.createCamera(camera, group);

    // check that user can see camera
    cy.visit('devices');
    cy.contains(camera);
  });
});
