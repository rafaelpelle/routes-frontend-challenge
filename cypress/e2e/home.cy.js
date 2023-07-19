//////////////////////////////////////////////
//  cy.fillForm() is a custom command.      //
//  see more at cypress/support/commands.js //
//////////////////////////////////////////////

describe('Home page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should enable submit with valid data', () => {
    cy.contains('button', 'Submit').should('be.disabled');

    cy.fillForm();

    cy.contains('button', 'Submit').should('not.be.disabled');
  });

  it('should disable submit with invalid passengers', () => {
    cy.contains('button', 'Submit').should('be.disabled');

    cy.fillForm();

    cy.get('[data-testid="IndeterminateCheckBoxIcon"]').click();
    cy.contains('Select passengers').should('be.visible');
    cy.contains('button', 'Submit').should('be.disabled');

    cy.get('[data-testid="AddBoxIcon"]').click();
    cy.get('[data-testid="AddBoxIcon"]').click();
    cy.get('Select passengers').should('not.exist');
    cy.contains('button', 'Submit').should('not.be.disabled');
  });
});
