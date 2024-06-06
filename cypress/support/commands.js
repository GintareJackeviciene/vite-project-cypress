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

Cypress.Commands.add("goTo", () => {
  cy.visit("http://localhost:5173/");
});
Cypress.Commands.add("login", (username, email, password, birth) => {
  cy.get('[name="username"]').type(username);
  cy.get('[name="email"]').type(email);
  cy.get('[name="password"]').type(password);
  cy.get("[data-cy=dob-input]").type(birth);
  cy.get("button")
    .contains(/Submit/i)
    .click();
});
