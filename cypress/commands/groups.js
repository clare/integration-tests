Cypress.Commands.add("createGroup", (group) => {
  // check already on the groups page
  cy.location({timeout: 60000}).should((location) => {expect(location.pathname).to.equal('/groups');});
  cy.contains("Your groups");
  cy.contains("Create group").click();
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000);  // not ideal but popup is causing problems.  To fix later
  cy.contains("Group name").parent().type(group);
  cy.contains("Group name").parent().type('{enter}');
  // check new group is created properly
  cy.location({timeout: 60000}).should((location) => {expect(location.pathname).contains(group);});
  cy.contains(group);
});
