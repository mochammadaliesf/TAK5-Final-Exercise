import loginPage from "./pageObject/loginPage"
import AddToCart from "./pageObject/AddToCart"

// Custom commands login
Cypress.Commands.add("login", () => {
  cy.fixture("loginCredentials.json").then((credentials) => {
    cy.get(loginPage.emailField).type(credentials.email)
    cy.get(loginPage.passField).type(credentials.password)
    cy.get(loginPage.loginButton).click()
  })
})

// Proceed to checkout
Cypress.Commands.add('proceedToCheckout', () => {
    // Go back to cart
    cy.wait(10000)
    cy.get(AddToCart.btnCart2).click()
    // Proceed to Checkout
    cy.get(AddToCart.btnProceedCheckout).click()
})