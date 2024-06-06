import AccInformation from "../../support/pageObject/AccInformation"

describe('Verify Edit Account Information', () => {
  beforeEach(() => {
    // Open URL
    cy.visit('')

    //Click Sign In
    cy.get(AccInformation.SignIn).click()
  
    // Login
    cy.login()
    cy.wait(1000)

    // go to My Account
    cy.get(AccInformation.Arrow).click()
    cy.get(AccInformation.MyAccount).click()

  })
    
  //TC001
    it('Success - Edit First Name', () => {
    cy.fixture("MyAccountData.json").then((Data) => {
    
    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Change First Name
    cy.FieldInput(AccInformation.firstName, Data.firstName)

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
  })  
  
  //TC002
    it('Success - Edit Last Name', () => {
    cy.fixture("MyAccountData.json").then((Data) => {

    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Change Last Name
    cy.FieldInput(AccInformation.lastName, Data.lastName)


    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
    })

  //TC003
    it('Success - Edit First & Last Name', () => {
    cy.fixture("MyAccountData.json").then((Data) => {

    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Change First Name
    cy.FieldInput(AccInformation.firstName, Data.firstName)

    // Change Last Name
    cy.FieldInput(AccInformation.lastName, Data.lastName)

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
  })
    
  //TC004  
    it('Success - Change Email', () => {
    cy.fixture("MyAccountData.json").then((Data) => {

    // Click Edit
    cy.get(AccInformation.editBtn).click()

    // Click Change Email Checkbox
    cy.get(AccInformation.CEmail).click()

    // Change Email
    cy.FieldInput(AccInformation.email, Data.valid_email)

    // Input Password
    cy.FieldInput(AccInformation.current_pass, Data.valid_password)

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
  })

  //TC005
    it('Success - Change Password', () => {
    cy.fixture("MyAccountData.json").then((Data) => {
    
    // Click Change Password
    cy.get(AccInformation.CPassBtn).click()

    // Input Current Password
    cy.FieldInput(AccInformation.current_pass,Data.valid_password)

    // Input New Password and Confirmation Password
    cy.FieldInput(AccInformation.password,Data.valid_password)
    cy.FieldInput(AccInformation.pass_con,Data.valid_password)

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
  })
    
  //TC006
    it('Success - Change Email & Password', () => {
    cy.fixture("MyAccountData.json").then((Data) => {
    
    // Click Change Password
    cy.get(AccInformation.CPassBtn).click()

    // Click Change Email Checkbox
    cy.get(AccInformation.CEmail).click()

    // Change Email
    cy.FieldInput(AccInformation.email, Data.valid_email)

    // Input Current Password
    cy.FieldInput(AccInformation.current_pass, Data.valid_password)

    // Input New Password and Confirmation Password
    cy.FieldInput(AccInformation.password,Data.valid_password)
    cy.FieldInput(AccInformation.pass_con,Data.valid_password)

    // Click Save
    cy.get(AccInformation.saveBtn).click()

    // Expected Result
    cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    })
  })

  //TC007
    it('Success - Change Name & Email', () => {
    cy.fixture("MyAccountData.json").then((Data) => {
    
      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Change First Name
      cy.FieldInput(AccInformation.firstName, Data.firstName)

      // Change Last Name
      cy.FieldInput(AccInformation.lastName, Data.lastName)

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Change Email
      cy.FieldInput(AccInformation.email, Data.valid_email)

      // Input Current Password
      cy.FieldInput(AccInformation.current_pass,Data.valid_password)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    }) 
  })

  //TC008
    it('Success - Change Name, Email & Password', () => {
     cy.fixture("MyAccountData.json").then((Data) => {

      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Change First Name
      cy.FieldInput(AccInformation.firstName, Data.firstName)

      // Change Last Name
      cy.FieldInput(AccInformation.lastName, Data.lastName)

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Change Email
      cy.FieldInput(AccInformation.email, Data.valid_email)

      // Click Change Password Checkbox
      cy.get(AccInformation.CPassword).click()

      // Input Current Password
      cy.FieldInput(AccInformation.current_pass,Data.valid_password)

      // Input New Password and Confirmation Password
      cy.FieldInput(AccInformation.password,Data.valid_password)
      cy.FieldInput(AccInformation.pass_con,Data.valid_password)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.msg_success).should('contain.text',AccInformation.success)
    }) 
  })

  //TC009
    it('Failed - Different Password Confirmation', () => {
    cy.fixture("MyAccountData.json").then((Data) => {
    
      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.FieldInput(AccInformation.current_pass,Data.valid_password)

      // Input New Password and Confirmation Password
      cy.FieldInput(AccInformation.password,Data.invalid_password)
      cy.FieldInput(AccInformation.pass_con,Data.valid_password)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.pass_con_error).should('contain.html',AccInformation.con_error_msg)
    })
  })

  //TC010
    it('Failed - Change with invalid Email', () => {
      cy.fixture("MyAccountData.json").then((Data) => {
    
      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Change Email
      cy.FieldInput(AccInformation.email, Data.invalid_email)
    
      // Input Current Password
      cy.FieldInput(AccInformation.current_pass,Data.valid_password)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.email_error).should('contain.text',AccInformation.email_invalid)
    })
  })
    
  //TC011
    it('Failed - Empty Email', () => {
      cy.fixture("MyAccountData.json").then((Data) => {
    
      // Click Edit
      cy.get(AccInformation.editBtn).click()

      // Click Change Email Checkbox
      cy.get(AccInformation.CEmail).click()

      // Remove Email
      cy.get(AccInformation.email).clear()

      // Input Current Password
      cy.FieldInput(AccInformation.current_pass,Data.valid_password)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.email_error).should('contain.text',AccInformation.mandatory_msg)
    })
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
      cy.fixture("MyAccountData.json").then((Data) => {
    
      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.FieldInput(AccInformation.current_pass,Data.valid_password)

      // Input New Password and Confirmation Password
      cy.get(AccInformation.password)
      cy.get(AccInformation.pass_con)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.pass_con_error).should('contain.html',AccInformation.mandatory_msg)
      cy.get(AccInformation.pass_error).should('contain.html',AccInformation.mandatory_msg)
    }) 
  })

  //TC015
    it('Failed - Empty Current Password Field', () => {
    cy.fixture("MyAccountData.json").then((Data) => {
      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.get(AccInformation.current_pass)

      // Input New Password and Confirmation Password
      cy.FieldInput(AccInformation.password,Data.valid_password)
      cy.FieldInput(AccInformation.pass_con,Data.valid_password)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.current_pass_error).should('contain.html',AccInformation.mandatory_msg)
      })
    }) 

  //TC016
    it('Failed - Invalid Password', () => {
    cy.fixture("MyAccountData.json").then((Data) => {
      // Click Change Password
      cy.get(AccInformation.CPassBtn).click()

      // Input Current Password
      cy.FieldInput(AccInformation.current_pass,Data.invalid_password)
      
      // Input New Password and Confirmation Password
      cy.FieldInput(AccInformation.password,Data.invalid_password)
      cy.FieldInput(AccInformation.pass_con,Data.invalid_password)

      // Click Save
      cy.get(AccInformation.saveBtn).click()

      // Expected Result
      cy.get(AccInformation.msg_error).should('contain.html',AccInformation.pass_invalid)
    })
    }) 
})