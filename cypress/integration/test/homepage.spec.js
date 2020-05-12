/// <reference types="cypress" />
// This block is to make sure this .js file works
describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  })
})

cy.debug

// Uncaught in Promise error when going to the site
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
}) 

describe('homePage',function() {
  it('verify types of locators',function() {
      // cy.visit("https://www.hoopladigital.com/") // This opens the URL
      cy.visit("https://www-dev.private.hoopladigital.com/") // This opens the URL
      cy.wait(2000)
      // cy.url().should('include', 'www.hoopladigital.com') // verify the URL should include "www.hoopladigital.com'"
      cy.url().should('include', 'https://www-dev.private.hoopladigital.com/')

      // Verifying sections of the homepage
      cy.get('#section1').should('be.visible')  // Verifying section 1 of the page
      cy.get('#section2 > :nth-child(1)').should('be.visible')  // Verifying section 2 of the homepage
      cy.get('#section3 > :nth-child(1)').should('be.visible')  // Verifying section 3 of the homepage
      cy.get('.Ab3wznp9bo9_lJ8NbNBKj').should('be.visible')  // Verifying footer

      // Finding text on the page
      cy.get('.nav-logo > img').should('be.visible')
      cy.get('h1').should('be.visible')  // "Instantly borrow digital movies, music, eBooks and more, 24/7 with your library card."
      cy.get('.twelve').should('be.visible')  // "Signing up is free and easy."
      cy.get(':nth-child(1) > .sc-jqCOkK > .sc-jbKcbu').should('be.visible')  // Email text above the email field
      cy.get(':nth-child(2) > .sc-jqCOkK > .sc-jbKcbu').should('be.visible')  // Password text above the password field
      cy.get('#email').type("michaeldreesen90@gmail.com").should('be.visible')  // puts in email in email field
      cy.get('#password').type('password') // puts password in password field
      cy.get('.label-body').should('be.visible')  // remember me" text
      cy.get('.sc-kfGgVZ > :nth-child(2) > a').should('be.visible')  // forgot your password link
      cy.get('#section2 > :nth-child(1) > :nth-child(1)').should('be.visible')  // "Your public library at your fingertips."
      cy.get('#section2 > :nth-child(1) > :nth-child(2)').should('be.visible')  // "Anytime. Anywhere."

      /* hoopla is a groundbreaking digital media service offered by your local public library that allows you to borrow 
      movies, music, audiobooks, ebooks, comics and TV shows to enjoy on your computer, tablet, or phone – and even your TV! 
      With no waiting, titles can be streamed immediately, or downloaded to phones or tablets for offline enjoyment later. 
      We have hundreds of thousands of titles to choose from, with more being added daily. 
      hoopla is like having your public library at your fingertips. Anytime. Anywhere.*/
      cy.get('#section2 > :nth-child(1) > p').should('be.visible')  // for above See above ^

      cy.get('.sc-ksYbfQ').should('be.visible')  // This is for the "Browse Titles" button
      cy.get('#section3 > :nth-child(1) > .sc-iyvyFf').should('be.visible')  // "Web or Mobile"

      /* You can stream titles instantly through your desktop browser or our mobile app. 
      If you use our mobile app, you can also download titles to your device for offline playback later, where Wi-Fi may be unavailable. 
      Titles are automatically returned and removed from your device at the end of the lending period.*/
      cy.get('#section3 > :nth-child(1) > p').should('be.visible')  // see above ^

      cy.get('.sc-gzOgki > :nth-child(1) > a > img').should('be.visible')  // app store button
      cy.get('.sc-gzOgki > :nth-child(2) > a > img').should('be.visible')  // google play button
      cy.get('.sc-gzOgki > :nth-child(3) > a > img').should('be.visible')  // amazon button
      cy.get(':nth-child(4) > img').should('be.visible')  // google chromecast logo
      cy.get(':nth-child(5) > img').should('be.visible')  // appleTV logo
      cy.get(':nth-child(6) > img').should('be.visible')  // androidTV logo
      cy.get(':nth-child(7) > img').should('be.visible')  // fireTV logo
      cy.get(':nth-child(8) > img').should('be.visible')  // roku logo
    
      cy.get('label > input').should('be.visible')  // maing sure the "Remember Me" checkbox is still there
      cy.get('label > input').click().should('be.visible')  // checking the "Remember Me" checkbox
      cy.get('label > input').click().should('be.visible')  // unchecking the "Remember Me" checkbox

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
      

/*
      // Sigining in
      cy.get('#email').type("michaeldreesen90@gmail.com") // puts in email in email field
      cy.get('#password').type('password') // puts password in password field
      cy.get(':nth-child(3) > button').click() // Clicks the login button
      cy.wait(2000)
*/
    })
  })