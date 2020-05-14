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

  describe('Music',function() {
      it('Verifys the music page',function() {

        // cy.visit("https://www.hoopladigital.com/") // This opens the URL
        cy.visit("https://www-dev.private.hoopladigital.com/")
        cy.wait(2000)
        cy.url().should('include', 'https://www-dev.private.hoopladigital.com') // verify the URL should include "www.hoopladigital.com'"

        // Sigining in
        cy.get('#email').type("cytest@apple.com") // puts in email in email field
        cy.get('#password').type('password') // puts password in password field
        cy.get('.primary-button').click() // Clicks the login button
        cy.wait(8000)

        cy.visit("https://www-dev.private.hoopladigital.com/browse/music/popular?page=1")
        cy.wait(8000)

        cy.url().should('contain', 'https://www-dev.private.hoopladigital.com/browse/music/popular?page=1')
        cy.wait(2000)

        // Looking for Recommended, Featrued, Popular, Categories links
        cy.get('.sc-htpNat').should('be.visible') // Moves header
        cy.get('[aria-label="Click to view recommended music titles"] > span').should('be.visible') // Recommended link
        cy.get('[aria-label="Click to view featured music titles"] > span').should('be.visible') // Featured link
        cy.get('[aria-label="Click to view music categories"] > span').should('be.visible') // Categories link
        cy.get('.sc-jWBwVP > span').should('be.visible') // Popular link (focused on) so this wont look like the others

        // Clicks on page views, also checks URL's
        cy.get('[aria-label="Click to view recommended music titles"] > span').click() // Clicks on Recommended
        cy.url().should('include', 'https://www-dev.private.hoopladigital.com/browse/music/recommended?page=1')
        cy.get('[aria-label="Click to view featured music titles"] > span').click() // Clicks on Featured
        cy.url().should('include', 'https://www-dev.private.hoopladigital.com/browse/music/featured?page=1')
        cy.get('[aria-label="Click to view popular music titles"] > span').click() // Clicks on Popular
        cy.url().should('include', 'https://www-dev.private.hoopladigital.com/browse/music/popular?page=1')
        cy.get('[aria-label="Click to view music categories"] > span').click() // Clicks on Categories
        cy.url().should('include', 'https://www-dev.private.hoopladigital.com/browse/music/categories?page=1')

        // Sort dropdown on popular page
        cy.get('[aria-label="Click to view popular music titles"] > span').click() // Clicks on Popular
        cy.wait(2000)
        // cy.get(.sc-jtRfpW > span').should('be.visible') // Sort By dropdown
        cy.get('#sort-select').should('be.visible') // makes sure the "sort" dropdown is shown
        cy.get('#sort-select').select('Relevance') // Selects "Relevance" from sort dropdown
        cy.get('#sort-select').select('Popularity') // Selects "Relevance" from sort dropdown
        cy.get('#sort-select').select('A-Z') // Selects "A-Z" from sort dropdown
        cy.get('#sort-select').select('Z-A') // Selects "Z-A" from sort dropdown
        cy.get('#sort-select').select('User Rating') // Selects "User Rating from sort dropdown
        cy.get('#sort-select').select('Date Added') // Selects "Date Added" from sort dropdown
        cy.get('#sort-select').select('Release Date') // Selects "Release Date" from sort dropdown
        
        // Checking and unchecking the Childrens titles only checkbox on popular page
        cy.get('#children').check()
        cy.get('#children').uncheck()

        // Showing dropdown on popular page
        cy.get('#availability-select').should('be.visible') // Showing dropdown is visible
        cy.get('#availability-select').select('All Titles In Catalog') // clicks all titles in catalog
        cy.get('.sc-dQneQk > path').click() // closes the bubble
        cy.get('#availability-select').select('Available Now') // clicks Available now
        cy.get('.sc-dQneQk > path').click() // closes the bubble
        cy.get('#availability-select').select('Coming Soon') // clicks on coming soon
        cy.get('.sc-dQneQk > path').click() // closes the bubble
        cy.get('#availability-select').select('Recommend To Library') // clicks on recommend to Library
        cy.get('.sc-dQneQk > path').click() // closes the bubble

        // Search filters
       cy.get(':nth-child(1) > .sc-cmUVTD').click() // Borrow type
       cy.get(':nth-child(2) > .sc-cmUVTD').click() // format type
       cy.get(':nth-child(3) > .sc-cmUVTD').click() // User Rating
       cy.get(':nth-child(4) > .sc-cmUVTD').click() // Release Date
       cy.get(':nth-child(5) > .sc-cmUVTD').click() // Date Added
       cy.get(':nth-child(6) > .sc-cmUVTD').click() // language
       cy.get('.sc-jXxWxW > :nth-child(7)').click() // children's titles only

       // Featured page
       cy.visit("https://www-dev.private.hoopladigital.com/browse/music/featured?page=1")
               // Click on the featured page and checking the contents
       // cy.get('[aria-label="Click to view featured audiobook titles"] > span').click()
       cy.url().should('include', 'https://www-dev.private.hoopladigital.com/browse/music/featured?page=1')
       cy.wait(5000)

       // Checking and unchecking the Childrens titles only checkbox on featured page
       cy.get('#children').check()
       cy.get('#children').uncheck()

       // cy.visit("https://www-dev.private.hoopladigital.com/browse/music/featured?page=1")
       // cy.get('.sc-jjgyjb > span').should('be.visible') // Sort By dropdown
       cy.wait(2000)
       // cy.get('.sc-dCzMmV > span').should('be.visible') // Checks the Sort dropdown is shown
       cy.get('#sort-select').should('be.visible') // makes sure the "sort" dropdown is shown
       cy.get('#sort-select').select('Relevance') // Selects "Relevance" from sort dropdown
       cy.get('#sort-select').select('Popularity') // Selects "Relevance" from sort dropdown
       cy.get('#sort-select').select('A-Z') // Selects "A-Z" from sort dropdown
       cy.get('#sort-select').select('Z-A') // Selects "Z-A" from sort dropdown
       cy.get('#sort-select').select('User Rating') // Selects "User Rating from sort dropdown
       cy.get('#sort-select').select('Date Added') // Selects "Date Added" from sort dropdown
       cy.get('#sort-select').select('Release Date') // Selects "Release Date" from sort dropdown

        // Showing dropdown on featured page
        cy.get('#availability-select').should('be.visible') // Showing dropdown is visible
        cy.get('#availability-select').select('All Titles In Catalog') // clicks all titles in catalog
        cy.get('.sc-dQneQk > path').click() // closes the bubble
        cy.get('#availability-select').select('Available Now') // clicks Available now
        cy.get('.sc-dQneQk > path').click() // closes the bubble
        cy.get('#availability-select').select('Coming Soon') // clicks on coming soon
        cy.get('.sc-dQneQk > path').click() // closes the bubble
        cy.get('#availability-select').select('Recommend To Library') // clicks on recommend to Library
        cy.get('.sc-dQneQk > path').click() // closes the bubble

        // Search filters on featured page
       cy.get(':nth-child(1) > .sc-cmUVTD').click() // Borrow type
       cy.get(':nth-child(2) > .sc-cmUVTD').click() // format type
       cy.get(':nth-child(3) > .sc-cmUVTD').click() // User Rating
       cy.get(':nth-child(4) > .sc-cmUVTD').click() // Release Date
       cy.get(':nth-child(5) > .sc-cmUVTD').click() // Date Added
       cy.get(':nth-child(6) > .sc-cmUVTD').click() // language
       cy.get('.sc-jXxWxW > :nth-child(7)').click() // children's titles only

       // Recommended page
       cy.visit("https://www-dev.private.hoopladigital.com/browse/music/recommended?page=1")
       cy.wait(8000)
       // Checking the showing dropdown on the Recommendation page
       // Note, this page does not have bubbles that appear to close out.
       // cy.get('.sc-eFLDUo > span').should('be.visible') // checks the "Showing:" Text
       cy.get('.sc-eFLDUo > span').should('be.visible') // checks the "Showing:" Text
       cy.get('#availability-select').should('be.visible') // Checks the "Showing" dropdown
       cy.get('#availability-select').select('All Titles In Catalog') // clicks all titles in catalog
       cy.get('#availability-select').select('Available Now') // clicks Available now
       cy.get('#availability-select').select('Coming Soon') // clicks on coming soon
       cy.wait(4000)
       cy.get('#availability-select').select('All Titles In Catalog') // clicks all titles in catalog
       cy.wait(2000)
       cy.get('.sc-ksYbfQ').click() // Clicks on the "Recommendation Settings" below the page
       cy.url().should('include', 'https://www-dev.private.hoopladigital.com/my/settings/recommendations') // Checks the Recommendation URL
      })
  })