import loginPage from "./pageObject/loginPage"

// Custom commands login
Cypress.Commands.add('login', (email, password) => {
    cy.get(loginPage.emailField).type(loginPage.inputEmail)
    cy.get(loginPage.passField).type(loginPage.inputPass)
    cy.get(loginPage.loginButton).click()
  })