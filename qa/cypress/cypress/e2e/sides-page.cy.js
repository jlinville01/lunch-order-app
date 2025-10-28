/// <reference types="cypress" />

context('Sides Page', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('clicking back button', () => {
        // User clicks the back button
        cy.get('#action-canvas').click()

        // User should land on the main course page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('attempting to select more than two sides', () => {
        // Select 3 sides
        cy.get('#action-canvas').click()
        cy.get('#action-canvas').click()
        cy.get('#action-canvas').click()

        // Error message should be displayed
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('clicking sides button with no selections', () => {
        // Click sides button
        cy.get('#action-canvas').click()

        // User should land on the drinks page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('clicking sides button with 1 selection', () => {
        // Click sides button
        cy.get('#action-canvas').click()

        // User should land on the drinks page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })

    it('clicking sides button with 2 selections', () => {
        // Click sides button
        cy.get('#action-canvas').click()
        cy.get('#action-canvas').click()

        // User should land on the drinks page
        cy.url().should('eq', 'http://localhost:3000/dashboard');
        cy.get('.action-input-hidden').should('be.visible')
    })
})
