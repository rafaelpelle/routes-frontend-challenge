/* eslint-disable cypress/no-unnecessary-waiting */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillForm', () => {
  cy.get('[data-cy=CityInput0]').type('Par');
  cy.wait(300);
  cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
  cy.wait(1000);

  cy.get('[data-cy=CityInput1]').type('Mars');
  cy.wait(300);
  cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
  cy.wait(1000);

  cy.contains('button', 'Add destination').click();
  cy.wait(1000);

  cy.get('[data-cy=CityInput2]').type('Lyo');
  cy.wait(300);
  cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
  cy.wait(1000);
});
