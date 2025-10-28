/// <reference types="cypress" />

context('Desserts Page', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('clicking back button', () => {
        // User clicks the back button
        cy.get('#action-canvas').click()

        // User should land on the drinks page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('clicking dessert button with 1 selection', () => {
        // Click sides button
        cy.get('#action-canvas').click()

        // Correct quantity selected is displayed
        cy.url().should('eq', 'http://localhost:3000/dashboard');
    })

    it('attempting to click sides button with 2 selections', () => {
        // Click sides button
        cy.get('#action-canvas').click()
        cy.get('#action-canvas').click()

        // Error message should be displayed
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('clicking sides button with no selections', () => {
        // Click sides button
        cy.get('#action-canvas').click()

        // User should land on the dessert page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })
})
