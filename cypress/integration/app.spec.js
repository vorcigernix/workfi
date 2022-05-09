/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
  
      // Find a link with an href attribute containing "page2" and click it
      cy.get('a[href*="page2"]').click()
  
      // The new url should include "/page2"
      cy.url().should('include', '/page2')
  
      // The new page should contain an h1 with "Page2"
      cy.get('h1').contains('Page2')
    })
  })