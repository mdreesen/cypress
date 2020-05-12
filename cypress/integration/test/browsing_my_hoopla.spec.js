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

describe('myHooplaPage',function() {
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

      // Logging into cypress test account, finding all default elements on their my/hooppla page
      // Header
      cy.url().should('include', 'https://www-dev.private.hoopladigital.com/my/hoopla')
      cy.get('.sc-etwtAo').should('be.visible') // hoopla logo on top left
      cy.get(':nth-child(2) > .sc-gisBJw > .sc-iGPElx > span').should('be.visible') // My Hoopla dropdown link
      cy.get(':nth-child(3) > .sc-gisBJw > .sc-iGPElx > span').should('be.visible') // Browse dropdown link
      cy.get('#navbar-search-scope').should('be.visible') // nav bar search scope
      cy.get('#navbar-search-input').should('be.visible') // nav bar search field
      cy.get('.sc-cqCuEk').should('be.visible') // Search icon in search field
      cy.get('.sc-jTzLTM > :nth-child(6)').should('be.visible') // Kids mode button
      cy.get('.sc-kasBVs').should('be.visible') // Settings button
      cy.get('.sc-iSDuPN > span').should('be.visible') // Advanced search link bottom right under the search field

      // Page body
      // NOTE, titles change so I did not try to find titles on their page
      cy.get('[data-index="1"] > :nth-child(1) > ._1ptgLwszCPeXr1INFT2a-E').should('be.visible') // Left card on carousel
      cy.get('.slick-active > :nth-child(1) > ._1ptgLwszCPeXr1INFT2a-E').should('be.visible') // Middle card on carousel
      cy.get('[data-index="3"] > :nth-child(1) > ._1ptgLwszCPeXr1INFT2a-E') // Right card on carousel
      cy.get('.sc-htpNat > span').should('be.visible') // My Hoopla header
      cy.get(':nth-child(3) > .zh0DtYNJLtWbqznJKPecQ > ._3PJdj8ts-m-nlpYOBwubj8 > span').should('be.visible') // Currently borrowed header
      cy.get('.sc-eMigcr > #Capa_1 > path').should('be.visible') // Instant Icon
      cy.get('#Capa_1 > :nth-child(1) > g > path').should('be.visible') // Flex Icon
      cy.get(':nth-child(1) > .sc-dTdPqK > .sc-itybZL').should('be.visible') // instant text
      cy.get('.sc-hTgGLG').should('be.visible') // Instant information icon
      cy.get(':nth-child(2) > .sc-dTdPqK > .sc-itybZL').should('be.visible') // Flex text
      cy.get('.sc-bKcCCv').should('be.visible') // Flex information icon
      cy.get(':nth-child(3) > ._3PiN1u2dq9_EDM5Sl1Vob6 > .sc-htoDjs > span').should('be.visible') // Dont have anything borrowed empty state text "You don't have anything currently borrowed. If you did, it would be shown here."      "
      cy.get(':nth-child(4) > .zh0DtYNJLtWbqznJKPecQ > ._3PJdj8ts-m-nlpYOBwubj8 > span').should('be.visible') // Recommended header
      cy.get(':nth-child(4) > ._3PiN1u2dq9_EDM5Sl1Vob6 > .sc-htoDjs > :nth-child(1)').should('be.visible') // "Based on what you've previously borrowed and what's popular."
      cy.get('[style="font-weight: 500;"] > a > span').should('be.visible') // "Click here to see more recommendations" link
      cy.get('[style="margin-bottom: 80px;"] > .zh0DtYNJLtWbqznJKPecQ > ._3PJdj8ts-m-nlpYOBwubj8 > span').should('be.visible') // Favorites header
      cy.get('[style="margin-bottom: 80px;"] > :nth-child(2) > :nth-child(1) > span').should('be.visible') // "Titles, series, and people you're interested in for later."
      cy.get('[style="margin-bottom: 80px;"] > :nth-child(2) > :nth-child(2) > span').should('be.visible') // "You currently do not have any favorites. Browse or search for titles to get started, then click the  icon to add an artist, author, series, or titles to your favorites."

      // Footer on homepage
      cy.get(':nth-child(1) > .sc-gxMtzJ > span').should('be.visible')  // help link
      cy.get(':nth-child(2) > .sc-gxMtzJ > span').should('be.visible')  // About link
      cy.get('.sc-dqBHgY > span') // Contact Us link
      cy.get(':nth-child(4) > .sc-gxMtzJ > span').should('be.visible')  // Privacy Policy
      cy.get(':nth-child(5) > .sc-gxMtzJ > span').should('be.visible')  // Terms and conditions
      cy.get('[href="https://www.facebook.com/hoopladigital"]').should('be.visible')  // Facebook link
      cy.get('[href="https://www.twitter.com/hoopladigital"]').should('be.visible')  // Twitter link
      cy.get('[href="https://www.instagram.com/hoopladigital"]').should('be.visible')  // Instigram link
      cy.get('[href="https://www.youtube.com/user/hoopladigital"]').should('be.visible') // Youtube link
    })
  })