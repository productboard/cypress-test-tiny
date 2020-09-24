/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://pbtest.productboard.com');
    cy.get('[data-cy="LoginForm-EmailField"]').type('');
    cy.get('[data-cy="LoginForm-PasswordField"]').type('');
    cy.get('[data-cy="LoginForm-Login-Button"]').click();

    cy.get('[data-cy="AppHeader-Logo"]').should('be.visible', { timeout: 60000 });

    cy.get('[data-cy="NavigationMenu-Features"]').click();

    cy.get('[data-cy="FeaturesBoard-FeatureTitle-Cell"]').first().click();

    cy.get('[data-slate-editor="true"]').first().click();
  })
})
