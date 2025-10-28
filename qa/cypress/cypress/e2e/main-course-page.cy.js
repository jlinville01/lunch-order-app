/// <reference types="cypress" />

context('Main Course Page', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('clicking back button', () => {
        // User clicks the back button
        cy.get('#action-canvas').click()

        // User should land on the welcome page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('clicking sides button without selection', () => {
        // Click sides button
        cy.get('#action-canvas').click()

        // Error message should be displayed
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('clicking sides button with a selection', () => {
        // Select main course
        cy.get('#action-canvas').click()

        // Click sides button
        cy.get('#action-canvas').click()

        // User should land on the sides page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })
})
