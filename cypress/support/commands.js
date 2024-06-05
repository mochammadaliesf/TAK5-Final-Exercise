import loginPage from "./pageObject/loginPage"
import AddToCart from "./pageObject/AddToCart"

// Custom commands login
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get(loginPage.emailField).type(loginPage.inputEmail)
    cy.get(loginPage.passField).type(loginPage.inputPass)
    cy.get(loginPage.loginButton).click()
  })

// Proceed to checkout
Cypress.Commands.add('proceedToCheckout', () => {
    // Go back to cart
    cy.wait(10000)
    cy.get(AddToCart.btnCart2).click()
    // Proceed to Checkout
    cy.get(AddToCart.btnProceedCheckout).click()
})