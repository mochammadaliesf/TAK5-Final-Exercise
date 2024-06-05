// Importing Checkout POM
import checkoutPage from "../../support/pageObject/checkoutPage"
import AddToCart from "../../support/pageObject/AddToCart"

describe('Test Script for Checkout Page', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  })
})

// Test Script TC005
it('Checkout with compoulsary data (Shipping detail)', () => {
  
    // Calling Login command
    cy.login()
    //Proceed to Checkout page
    cy.proceedToCheckout()

    // Validating if the page is correct
    cy.wait(500)
    cy.url()
      .should('include', AddToCart.urlCheckout)

    // Insert the values into each fields
    cy.get(checkoutPage.companyField).type(checkoutPage.companyInput)
    cy.get(checkoutPage.addressField).type(checkoutPage.addressInput)
    cy.get(checkoutPage.cityField).type(checkoutPage.cityInput)
    cy.get(checkoutPage.stateField).select(checkoutPage.stateInput)
    cy.get(checkoutPage.zipField).type(checkoutPage.zipInput)
    cy.get(checkoutPage.countryField).select(checkoutPage.countryInput)
    cy.get(checkoutPage.phoneField).type(checkoutPage.phoneInput)
    cy.get(checkoutPage.shippingField).check()

    // Click onto the Next button
    cy.contains('button', checkoutPage.nextBtn).click()

    // Validating if the direction page is correct
    cy.wait(500)
    cy.contains('Payment Method').should('be.visible')
    cy.contains('button', checkoutPage.orderBtn).should('be.visible').click()

    // Validating the order is created
    cy.wait(500)
    cy.contains('Thank you for your purchase!').should('be.visible')

})

// Test Script TC006
it('Checkout with empty street address', () => {
  
  // Calling Login command
  cy.login()
  //Proceed to Checkout page
  cy.proceedToCheckout()

  // Validating if the page is correct
  cy.wait(500)
  cy.url()
    .should('include', AddToCart.urlCheckout)

  // Insert the values into each fields
  cy.get('.new-address-popup button[type="button"]').click()
  cy.get(checkoutPage.companyField).type(checkoutPage.companyInput)
  // cy.get(checkoutPage.addressField).type(checkoutPage.addressInput)
  cy.get(checkoutPage.cityField).type(checkoutPage.cityInput)
  cy.get(checkoutPage.stateField).select(checkoutPage.stateInput)
  cy.get(checkoutPage.zipField).type(checkoutPage.zipInput)
  cy.get(checkoutPage.countryField).select(checkoutPage.countryInput)
  cy.get(checkoutPage.phoneField).type(checkoutPage.phoneInput)
  // cy.get(checkoutPage.shippingField).check()

  // Click onto the Next button
  cy.contains('button', checkoutPage.shipBtn).click()

  cy.contains(checkoutPage.addressEmptyMsg).should('be.visible')

})

// Test Script TC007
it('Select Flat Rate shipping method', () => {
  
  // Calling Login command
  cy.login()
  //Proceed to Checkout page
  cy.proceedToCheckout()

  // Validating if the page is correct
  cy.wait(500)
  cy.url()
    .should('include', AddToCart.urlCheckout)

  // Insert the values into each fields
  cy.get(checkoutPage.shippingField).check()

  // Click onto the Next button
  cy.contains('button', checkoutPage.nextBtn).click()

  // Validating if the direction page is correct
  cy.wait(500)
  cy.contains('Payment Method').should('be.visible')
  cy.get('span.price[data-th="Shipping"]').should('have.text', '$0.00')

  cy.contains('button', checkoutPage.orderBtn).should('be.visible').click()

  // Validating the order is created
  cy.wait(500)
  cy.contains('Thank you for your purchase!').should('be.visible')

})