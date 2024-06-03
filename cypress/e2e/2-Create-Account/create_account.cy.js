import createAccount from "../../support/pageObject/createAccount"

describe('Customer new account', () => {
  beforeEach(() => {
    cy.visit('/customer/account/create/')
  })
  //TC01
    it('Create new account - success',() => {
    cy.get(createAccount.firstName).type('Budi')
    cy.get(createAccount.lastName).type('Hartono')
    cy.get(createAccount.emailAddress).type('budihartono12@gmail.com')
    cy.get(createAccount.pass).type('Budi123@')
    cy.get(createAccount.passConfrim).type('Budi123@')
    cy.get(createAccount.clickBtn).click()
  })
  //TC02
    it('without input mandatory fields - Failed',() => {
    cy.get(createAccount.clickBtn).click()
    cy.get(createAccount.errormsg).should('contain.text','This is a required field.')
  })
  //TC03
    it('Email invalid - Failed',() => {
      cy.get(createAccount.firstName).type('Budi')
      cy.get(createAccount.lastName).type('Hartono')
      cy.get(createAccount.emailAddress).type('budihartono')
      cy.get(createAccount.pass).type('Budi123@')
      cy.get(createAccount.passConfrim).type('Budi123@')
      cy.get(createAccount.clickBtn).click()
    cy.get(createAccount.errormsgTc03).should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
  })
  //TC04
    it('Email already registered - Failed',() => {
      cy.get(createAccount.firstName).type('Budi')
      cy.get(createAccount.lastName).type('Hartono')
      cy.get(createAccount.emailAddress).type('budihartono12@gmail.com')
      cy.get(createAccount.pass).type('Budi123@')
      cy.get(createAccount.passConfrim).type('Budi123@')
      cy.get(createAccount.clickBtn).click()
    cy.get(createAccount.errormsgTc04).should('contain.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
  })
  //TC05
    it('Input "Password, confirm password" with numeric & special character - Failed',() => {
      cy.get(createAccount.firstName).type('Budi')
      cy.get(createAccount.lastName).type('Hartono')
      cy.get(createAccount.emailAddress).type('budihartono12@gmail.com')
      cy.get(createAccount.pass).type('12345678@')
      cy.get(createAccount.passConfrim).type('12345678@')
      cy.get(createAccount.clickBtn).click()
    cy.get(createAccount.errormsgTc05).should('contain.text','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
  })
  //TC06
    it('Confirm Password different from password  - Failed',() => {
      cy.get(createAccount.firstName).type('Budi')
      cy.get(createAccount.lastName).type('Hartono')
      cy.get(createAccount.emailAddress).type('budihartono12@gmail.com')
      cy.get(createAccount.pass).type('Budi123@')
      cy.get(createAccount.passConfrim).type('Budi1234@')
      cy.get(createAccount.clickBtn).click()
    cy.get(createAccount.errormsgTc06).should('contain.html','Please enter the same value again.')
  })
})