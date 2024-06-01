describe('Verify Edit Account Information', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type('cypress@email.com')
    cy.get('#pass').type('Asd123456!')
    cy.get('#send2').click()
    cy.visit('https://magento.softwaretestingboard.com/customer/account/')
  })
    
    it('Success - Edit First Name', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear()
    cy.get('#firstname').type('Fadila')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success')
    }) 
  
    it('Success - Edit Last Name', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#lastname').clear()
    cy.get('#lastname').type('Maulidia')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success')
    })

    it('Success - Edit First & Last Name', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#firstname').clear()
    cy.get('#firstname').type('Fadila')
    cy.get('#lastname').clear()
    cy.get('#lastname').type('Maulidia')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success')
    })
    
    it('Success - Change Email', () => {
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#change-email').click()
    cy.get('#email').clear()
    cy.get('#email').type('cypress@email.com')
    cy.get('#current-password').type('Asd123456!')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success')
    })

    it('Success - Change Password', () => {
    cy.get('.change-password').click()
    cy.get('#current-password').type('Asd123456!')
    cy.get('#password').type('Asd123456!')
    cy.get('#password-confirmation').type('Asd123456!')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success')
    })
    
    it('Success - Change Email & Password', () => {
    cy.get('.change-password').click()
    cy.get('#change-email').click()
    cy.get('#email').clear()
    cy.get('#email').type('cypress@email.com')
    cy.get('#current-password').type('Asd123456!')
    cy.get('#password').type('Asd123456!')
    cy.get('#password-confirmation').type('Asd123456!')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success')
    })

    it.only('Success - Change Name & Email', () => {
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear()
      cy.get('#firstname').type('Fadila')
      cy.get('#lastname').clear()
      cy.get('#lastname').type('Maulidia')
      cy.get('#change-email').click()
      cy.get('#email').clear()
      cy.get('#email').type('cypress@email.com')
      cy.get('#current-password').type('Asd123456!')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success')
      }) 

    it('Success - Change Name, Email & Password', () => {
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear()
      cy.get('#firstname').type('Fadila')
      cy.get('#lastname').clear()
      cy.get('#lastname').type('Maulidia')
      cy.get('#change-email').click()
      cy.get('#email').clear()
      cy.get('#email').type('cypress@email.com')
      cy.get('#change-password').click()
      cy.get('#current-password').type('Asd123456!')
      cy.get('#password').type('Asd123456!')
      cy.get('#password-confirmation').type('Asd123456!')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success')
      }) 
})