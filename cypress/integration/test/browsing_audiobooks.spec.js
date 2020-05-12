/// <reference types="cypress" />
// This block is to make sure this .js file works
describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
  })
  
  // Uncaught in Promise error when going to the site
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) 
  
  describe('Audiobooks',function() {
    it('verify types of locators',function() {
        // cy.visit("https://www.hoopladigital.com/") // This opens the URL
        cy.visit("https://www-dev.private.hoopladigital.com/")
        cy.wait(2000)
        cy.url().should('include', 'https://www-dev.private.hoopladigital.com') // verify the URL should include "www.hoopladigital.com'"

        // Sigining in
        cy.get('#email').type("cytest@apple.com") // puts in email in email field
        cy.get('#password').type('password') // puts password in password field
        cy.get('.primary-button').click() // Clicks the login button
        cy.wait(8000)

        cy.visit("https://www-dev.private.hoopladigital.com/browse/audiobook/popular?page=1")
        cy.wait(8000)

       // finding all default elements on their my/hooppla page
      // Header
      cy.url().should('include', 'https://www-dev.private.hoopladigital.com/browse/audiobook/popular?page=1')
      // cy.get('.sc-itybZL').should('be.visible') // hoopla logo on top left
      /*
      cy.get(':nth-child(2) > .sc-gisBJw > .sc-fzsDOv').should('be.visible') // My Hoopla dropdown link
      cy.get(':nth-child(3) > .sc-gisBJw > .sc-hORach > span').should('be.visible') // Browse dropdown link
      cy.get('#navbar-search-scope').should('be.visible') // nav bar search scope
      cy.get('#navbar-search-input').should('be.visible') // nav bar search field
      cy.get('.sc-cqCuEk').should('be.visible') // Search icon in search field
      cy.get('.sc-jTzLTM > :nth-child(6)').should('be.visible') // Kids mode button
      cy.get('.sc-kasBVs').should('be.visible') // Settings button
      cy.get('.sc-iSDuPN > span').should('be.visible') // Advanced search link bottom right under the search field
      */

      // Looking for Recommended, Featrued, Popular, Categories links
        cy.get('.sc-htpNat').should('be.visible') // Audiobooks header
        cy.get('[aria-label="Click to view recommended audiobook titles"] > span').should('be.visible') // Recommended link
        cy.get('[aria-label="Click to view featured audiobook titles"] > span').should('be.visible') // Featured link
        cy.get('[aria-label="Click to view audiobook categories"] > span').should('be.visible') // Categories link
        cy.get('.sc-jWBwVP > span').should('be.visible') // Popular link (focused on)

        cy.get('.sc-jjgyjb > span').should('be.visible') // Sort By dropdown
        // 
  
    })
})