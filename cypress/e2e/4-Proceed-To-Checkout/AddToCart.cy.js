import AddToCart from "../../support/pageObject/AddToCart"

describe('Test Script for Proceed to Checkout Module', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    })

    // Test script TC001
    it('Add product item to shopping cart', () => {

        cy.get('#email').type('budihartono12@gmail.com')
        cy.get('#pass').type('Budi123@')
        
        // Define login button
        const btnLogin = cy.get('#send2')
        btnLogin.click()

        cy.visit(AddToCart.productUrl)
        cy.get(AddToCart.btnAddToCart).click()

        // Expected Result
        cy.contains(AddToCart.addMsg).should('be.visible')
        
    })

    // Test Script TC002
    it('Remove item in the Shopping Cart', () => {

        cy.get('#email').type('budihartono12@gmail.com')
        cy.get('#pass').type('Budi123@')
        
        // Define login button
        const btnLogin = cy.get('#send2')
        btnLogin.click()

        cy.get(AddToCart.btnCart).click()
        cy.get(AddToCart.btnRemoveItem).click()
        cy.contains(AddToCart.btnConfirmRemove).should('be.visible').click()

        // Expected Result
        cy.get(AddToCart.cartInfo).should('be.visible')
        cy.contains(AddToCart.removeMsg).should('be.visible')


    })

    // Test Script TC003
    it('Update item qty below than 0', () => {

        cy.get('#email').type('budihartono12@gmail.com')
        cy.get('#pass').type('Budi123@')
        
        // Define login button
        const btnLogin = cy.get('#send2')
        btnLogin.click()

        cy.visit(AddToCart.productUrl)

        cy.get(AddToCart.qtyField).then(($input) => {
            $input.attr('value', '-5')
            $input.trigger('input')
        })
        cy.get(AddToCart.btnAddToCart).click()

        // Expected result
        cy.contains(AddToCart.invalidQtyMsg).should('be.visible')

    })

    // Test script TC004
    it.only('Proceed to checkout with 1 item', () => {

        cy.get('#email').type('budihartono12@gmail.com')
        cy.get('#pass').type('Budi123@')
        
        // Define login button
        const btnLogin = cy.get('#send2')
        btnLogin.click()

        // Open cart
        cy.get(AddToCart.btnCart2).click()
        cy.get('.empty.subtitle').should('be.visible').invoke('text').then(text => {
        if (text.includes('You have no items in your shopping cart.')) {
            // Go to product page and add to cart
            cy.visit(AddToCart.productUrl)
            cy.get(AddToCart.btnAddToCart).click()
            cy.wait(10000)
            // Go back to cart
            cy.get(AddToCart.btnCart2).click()
            // Proceed to Checkout
            cy.get(AddToCart.btnProceedCheckout).click()

            // Expected result
            cy.url().should('include', AddToCart.urlCheckout)                
            cy.contains(AddToCart.checkoutTitle).should('be.visible')
        } else {
            console.log('You have no product item in your cart')
            cy.get(AddToCart.btnCart2).click()
            // Proceed to Checkout
            cy.get(AddToCart.btnProceedCheckout).click()

            cy.url()
                .should('include', AddToCart.urlCheckout)
            cy.contains(AddToCart.checkoutTitle).should('be.visible')
        }
        })
    })
})