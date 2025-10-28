/// <reference types="cypress" />

context('Welcome Page', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('clicking start your order button', () => {
        // Click the start order button
        cy.get('#action-canvas').click()

        // User should land on the main course page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })
})
