import AccInformation from "../../support/pageObject/AccInformation"

describe('Verify Edit Account Information', () => {
  beforeEach(() => {
    // Open URL
    cy.visit('https://magento.softwaretestingboard.com/')

    //Click Sign In
    cy.get('.panel > .header > .authorization-link > a').click()
  
    // Login
    cy.get(AccInformation.email).type('cypress@email.com')
    cy.get('#pass').type('Asd123456!')
    cy.get('#send2').click()
    cy.wait(10000)

    // go to My Account
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()

  })
    
  //TC001
    it('Success - Edit First Name', () => {
    
    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Change First Name
    cy.get(AccInformation.firstName).clear()
    cy.get(AccInformation.firstName).type('Fadila')

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    }) 
  
  //TC002
    it('Success - Edit Last Name', () => {

    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Change Last Name
    cy.get(AccInformation.lastName).clear()
    cy.get(AccInformation.lastName).type('Maulidia')

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })

  //TC003
    it('Success - Edit First & Last Name', () => {

    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Change First Name
    cy.get(AccInformation.firstName).clear()
    cy.get(AccInformation.firstName).type('Fadila')

    // Change Last Name
    cy.get(AccInformation.lastName).clear()
    cy.get(AccInformation.lastName).type('Maulidia')

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
    
  //TC004  
    it('Success - Change Email', () => {

    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Click Change Email Checkbox
    cy.get(AccInformation.CEmail).click()

    // Change Email
    cy.get(AccInformation.email).clear()
    cy.get(AccInformation.email).type('cypress@email.com')

    // Input Password
    cy.get(AccInformation.current_pass).type('Asd123456!')

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })

  //TC005
    it('Success - Change Password', () => {
    
    // Click Change Password
    cy.get(AccInformation.CPassBtn).click()

    // Input Current Password
    cy.get(AccInformation.current_pass).type('Asd123456!')

    // Input New Password and Confirmation Password
    cy.get(AccInformation.password).type('Asd123456!')
    cy.get(AccInformation.pass_con).type('Asd123456!')

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
    
  //TC006
    it('Success - Change Email & Password', () => {

    // Click Change Password
    cy.get(AccInformation.CPassBtn).click()

    // Click Change Email Checkbox
    cy.get(AccInformation.CEmail).click()

    // Change Email
    cy.get(AccInformation.email).clear()
    cy.get(AccInformation.email).type('cypress@email.com')

    // Input Current Password
    cy.get(AccInformation.current_pass).type('Asd123456!')

    // Input New Password and Confirmation Password
    cy.get(AccInformation.password).type('Asd123456!')
    cy.get(AccInformation.pass_con).type('Asd123456!')

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })

  //TC007
    it('Success - Change Name & Email', () => {

      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Change First Name
      cy.get(AccInformation.firstName).clear()
      cy.get(AccInformation.firstName).type('Fadila')

      // Change Last Name
      cy.get(AccInformation.lastName).clear()
      cy.get(AccInformation.lastName).type('Maulidia')

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Change Email
      cy.get(AccInformation.email).clear()
      cy.get(AccInformation.email).type('cypress@email.com')

      // Input Current Password
      cy.get(AccInformation.current_pass).type('Asd123456!')

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    }) 

  //TC008
    it('Success - Change Name, Email & Password', () => {

      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Change First Name
      cy.get(AccInformation.firstName).clear()
      cy.get(AccInformation.firstName).type('Fadila')

      // Change Last Name
      cy.get(AccInformation.lastName).clear()
      cy.get(AccInformation.lastName).type('Maulidia')

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Change Email
      cy.get(AccInformation.email).clear()
      cy.get(AccInformation.email).type('cypress@email.com')

      // Click Change Password Checkbox
      cy.get(AccInformation.CPassword).click()

      // Input Current Password
      cy.get(AccInformation.current_pass).type('Asd123456!')

      // Input New Password and Confirmation Password
      cy.get(AccInformation.password).type('Asd123456!')
      cy.get(AccInformation.pass_con).type('Asd123456!')

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    }) 

  //TC009
    it('Failed - Different Password Confirmation', () => {

      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.get(AccInformation.current_pass).type('Asd123456!')

      // Input New Password and Confirmation Password
      cy.get(AccInformation.password).type('Asd123456!!')
      cy.get(AccInformation.pass_con).type('Asd123456!')

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.pass_con_error).should('contain.html',AccInformation.con_error_msg)
    })  

  //TC010
    it('Failed - Change with invalid Email', () => {

      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Change Email
      cy.get(AccInformation.email).clear()
      cy.get(AccInformation.email).type('cypress.email.com')

      // Input Current Password
      cy.get(AccInformation.current_pass).type('Asd123456!')

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.email_error).should('contain.text',AccInformation.email_invalid)
    })
    
  //TC011
    it('Failed - Empty Email', () => {

      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Change Email
      cy.get(AccInformation.email).clear()

      // Input Current Password
      cy.get(AccInformation.current_pass).type('Asd123456!')

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.email_error).should('contain.text',AccInformation.mandatory_msg)
    }) 
  
  //TC012
    it('Failed - Empty First Name', () => {

      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Remove First Name
      cy.get(AccInformation.firstName).clear()

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.firstName_error).should('contain.text',AccInformation.mandatory_msg)
    }) 

  //TC013
    it('Failed - Empty Last Name', () => {

      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Remove Last Name
      cy.get(AccInformation.lastName).clear()

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.lastName_error).should('contain.text',AccInformation.mandatory_msg)
    })

  //TC014
    it('Failed - Empty New Password Field', () => {

      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.get(AccInformation.current_pass).type('Asd123456!')

      // Input New Password and Confirmation Password
      cy.get(AccInformation.password)
      cy.get(AccInformation.pass_con)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.pass_con_error).should('contain.html',AccInformation.mandatory_msg)
      cy.get(AccInformation.pass_error).should('contain.html',AccInformation.mandatory_msg)
    }) 

  //TC015
    it('Failed - Empty Current Password Field', () => {

      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.get(AccInformation.current_pass)

      // Input New Password and Confirmation Password
      cy.get(AccInformation.password).type('Asd123456!')
      cy.get(AccInformation.pass_con).type('Asd123456!')

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.current_pass_error).should('contain.html',AccInformation.mandatory_msg)
    }) 

  //TC016
    it('Failed - Invalid Password', () => {

      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.get(AccInformation.current_pass).type('Asd123456!!')
      
      // Input New Password and Confirmation Password
      cy.get(AccInformation.password).type('Asd123456!!')
      cy.get(AccInformation.pass_con).type('Asd123456!!')

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.msg_error).should('contain.html',AccInformation.pass_invalid)
    }) 
})