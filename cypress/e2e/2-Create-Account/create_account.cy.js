describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })
  it('Create new account - success',() => {
    cy.get('#firstname').type('Budi')
    cy.get('#lastname').type('Hartono')
    cy.get('#email_address').type('budihartono12@gmail.com')
    cy.get('#password').type('Budi123@')
    cy.get('#password-confirmation').type('Budi123@')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
  })
})