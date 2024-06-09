class loginPage {
    emailField = "#email"
    passField = "#pass"
    loginButton = "#send2"
    msgError = '.message-error > div'
    emailError = '#email-error'

    inputEmail(email) {
        cy.get(this.emailField).type(email)
    }
    inputPass(pass) {
        cy.get(this.passField).type(pass)
    }
    buttonLogin(){
        cy.get(this.loginButton).click()
    }
    errorMsg(error,message){
        cy.get(error).should('contain.text',message)
    }
    // errorMail(message){
    //     cy.get(this.emailerror).should('contain.text',message)
    // }
}

export default new loginPage()