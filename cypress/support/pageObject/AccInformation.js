class AccInformation{
    editBtn = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'
    saveBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    CPassBtn = '.change-password'
    CEmail = '#change-email'
    CPassword = '#change-password'
    firstName = '#firstname'
    lastName = '#lastname'
    email = '#email'
    current_pass = '#current-password'
    password = '#password'
    pass_con = '#password-confirmation'
    msg_success = '.message-success'
    success = 'You saved the account information'
    msg_error = '.message-error'
    pass_con_error = '#password-confirmation-error'
    mandatory_msg = 'This is a required field.'
    pass_invalid = "The password doesn't match this account. Verify the password and try again."
    con_error_msg = 'Please enter the same value again.'
    email_invalid = 'Please enter a valid email address.'
    pass_error = '#password-error'
    current_pass_error = '#current-password-error'
    email_error = '#email-error'
    firstName_error = '#firstname-error'
    lastName_error = '#lastname-error'


}

export default new AccInformation()