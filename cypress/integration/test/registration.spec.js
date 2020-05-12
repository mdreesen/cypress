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

describe('Registration',function() {
  it('verify types of locators',function() {
      cy.visit("https://www-dev.private.hoopladigital.com/") // This opens the URL
      cy.wait(2000)


      // Inserts email and Password on the hoomepage
      cy.get('#email').should('be.visible').type("cytest@apple.com") // Puts in email
      cy.get('#password').should('be.visible').type("password") // Puts in password
      cy.get('.sc-cJSrbW').click() // Clicks on "Get Started Today" button

      // Inserts email, confirm email, password, confirm password on registry modal - "Your Info" modal
      cy.get('#YourInfo > :nth-child(1) > #email').type("newemail@apple.com") // Email
      cy.get('#emailVerification').type("newemail@apple.com") // confirm email
      cy.get(':nth-child(3) > #password').type("password") // password
      cy.get('#passwordVerification').type("password") // confirm password
      // cy.get('#modal_close').click() // closes modal
      cy.get(':nth-child(6) > [href="/terms"] > span').should('be.visible') // Terms and Conditions linkz
      cy.get(':nth-child(6) > [href="/privacy"] > span').should('be.visible') // Privacy Policy
      cy.get('[style="font-size: small;"] > a > span').should('be.visible') // login link
      cy.get(':nth-child(2) > .button-primary > span').click() // clicks on the "Agree" button


      // "Choose Your Library" modal
      // Type in library field to get libraries
      cy.get('#library').type("Nashville Public Library")
      .wait(3000)
      cy.get('._2KmB76do0y03qI-N6M9Ve3').should('be.visible')
      cy.get('._1MAPWT2deRNorZTS3IpD2b').should('be.visible')
      cy.get('#library').clear()

      cy.get('#library').type("Edmonton Public Library") // Inputs the library
      cy.wait(3000)
      cy.get('._2KmB76do0y03qI-N6M9Ve3').should('be.visible')
      cy.get('._1MAPWT2deRNorZTS3IpD2b').should('be.visible')
      cy.get('#library').clear()
      // cy.get('._2KmB76do0y03qI-N6M9Ve3').click() // Hopefully clicks on the library
      // cy.wait(2000)
      // cy.get(':nth-child(2) > .button-primary').click() // Clicks on the "Next" button to proceed
      // cy.get('#modal_close').click() // closes modal


      // "Library Card" modal
      // cy.get('#libraryCard').type("1234567890123456") // Inserts characters into the libraryCard field
      // cy.get('#modal_close').click() // Closes out modal
      // cy.wait(2000)
  })
})