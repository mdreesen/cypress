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

  describe('Locating Elements',function() {
    it('verify types of locators',function() {
        cy.visit("https://www.hoopladigital.com/") // This opens the URL
        cy.wait(2000)


        // Inserts email and Password on the hoomepage
        cy.get('#email').type("Michaeldreesen90@gmail.com") // Puts in email
        cy.get('#password').type("password") // Puts in password
        cy.get('.sc-cJSrbW').click() // Clicks on "Get Started Today" button


        // Inserts email, confirm email, password, confirm password on registry modal - "Your Info" modal
        cy.get('#YourInfo > :nth-child(1) > #email').type("newemail@apple.com") // Email
        cy.get('#emailVerification').type("newemail@apple.com") // confirm email
        cy.get(':nth-child(3) > #password').type("password") // password
        cy.get('#passwordVerification').type("password") // confirm password
        // cy.get('#modal_close').click() // closes modal
        cy.get(':nth-child(2) > .button-primary > span').click() // clicks on the "Agree" button


        // "Choose Your Library" modal
        cy.get('#library').type("ImagineIF Libraries") // Inputs the library
        cy.wait(2000)
        cy.get('._2KmB76do0y03qI-N6M9Ve3').click() // Hopefully clicks on the library
        cy.wait(2000)
        cy.get(':nth-child(2) > .button-primary').click() // Clicks on the "Next" button to proceed
        // cy.get('#modal_close').click() // closes modal


        // "Library Card" modal
        cy.get('#libraryCard').type("1234567890123456") // Inserts characters into the libraryCard field
        cy.get('#modal_close').click() // Closes out modal
        cy.wait(2000)


        // Click on the log in button
        // cy.get('.gAijJc').click() // clicks on login button
        cy.get('.sc-dliRfk').click() // clicks on hoopla logo
        cy.wait(2000)
        cy.get(':nth-child(3) > button').click() // Clicks on the login button on the homepage
        cy.wait(4000)


        //Logged in view on "My Hoopla" page
        // Clicking through the kind links in the browse dropdown
        cy.get(':nth-child(3) > .sc-gisBJw > .sc-qrIAp').click() //clicks on "Browse" dropdown
        cy.wait(4000)
        cy.get('#BkgtIm5JcU > :nth-child(1) > a').click() // Clicks on "Audiobooks" link in Browse dropedown
        cy.wait(4000)
        cy.get(':nth-child(3) > .sc-gisBJw > .sc-qrIAp').click() // Should open the browse dropdown modal
        cy.wait(2000)
        cy.get('#BJg8bWffqU > :nth-child(2) > a').click() // Clicks on "Movies" link in the browse dropdown]
        cy.wait(2000)

    })
  })