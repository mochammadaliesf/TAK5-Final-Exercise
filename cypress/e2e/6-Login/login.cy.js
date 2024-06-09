import loginPage from "../../support/pageObject/loginPage"

describe('Login', () => {
    beforeEach(() => {
      cy.visit('/customer/account/login/')
    })
    it('Success Login', () => {
      cy.fixture('MyAccountData').then((Data) => {
        loginPage.inputEmail(Data.valid_email)
        loginPage.inputPass(Data.valid_password)
        loginPage.buttonLogin()
      })
    })
    it('Failed Login - Incorrect Password', () => {
      cy.fixture('MyAccountData').then((Data) => {
        loginPage.inputEmail(Data.valid_email)
        loginPage.inputPass(Data.invalid_password)
        loginPage.buttonLogin()
        loginPage.errorMsg(loginPage.msgError,'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
      })
    })
    it('Failed Login - Invalid Email', () => {
      cy.fixture('MyAccountData').then((Data) => {
        loginPage.inputEmail(Data.invalid_email)
        loginPage.inputPass(Data.invalid_password)
        loginPage.buttonLogin()
        loginPage.errorMsg(loginPage.emailError,'Please enter a valid email address (Ex: johndoe@domain.com)')
      })
    })
    it('Failed Login - Empty Data', () => {
        cy.get(loginPage.emailField).focus().clear()
        cy.get(loginPage.passField).focus().clear()
        cy.get(loginPage.loginButton).click()
        //loginPage.errorMail(loginPage.emailError,'This is a required field.')
        loginPage.errorMsg(loginPage.msgError,'A login and a password are required.')
    })
    it('Failed Login - Unregistered Account', () => {
      cy.fixture('MyAccountData').then((Data) => {
        loginPage.inputEmail(Data.unregistered_email)
        loginPage.inputPass(Data.valid_password)
        loginPage.buttonLogin()
        loginPage.errorMsg(loginPage.msgError,'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
        })
      })

  })