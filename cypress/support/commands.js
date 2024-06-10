import loginPage from "./pageObject/loginPage"
import AddToCart from "./pageObject/AddToCart"
import createAccount from "./pageObject/createAccount"

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

// Custom commands change field
Cypress.Commands.add("FieldInput", (field,x) => {
    cy.get(field)
    .should('be.visible')
    .clear()
    .type(x)
})

Cypress.Commands.add('ketik',(firstName, lastName, email, password, confirmPass) => {
  cy.get(createAccount.firstName).should('be.visible').type(firstName)
  cy.get(createAccount.lastName).should('be.visible').type(lastName)
  cy.get(createAccount.emailAddress).should('be.visible').type(email)
  cy.get(createAccount.pass).should('be.visible').type(password)
  cy.get(createAccount.passConfrim).should('be.visible').type(confirmPass)
  
})

Cypress.Commands.add('regist',() => {
  cy.get(createAccount.clickBtn).click()
})
