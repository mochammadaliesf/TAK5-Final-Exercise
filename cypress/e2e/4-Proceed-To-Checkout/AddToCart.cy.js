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

        cy.contains('Welcome, Budi Hartono!').should('be.visible')
        
        // Visit the product item
        cy.visit('https://magento.softwaretestingboard.com/gear.html')
        const product = cy.contains('Fusion Backpack')
        product.click()

        // Add the item to shopping cart
        const btnAddToCart = cy.get('#product-addtocart-button').should('be.visible')
        btnAddToCart.click()

        // Validation
        const successMsg = cy.contains('You added Fusion Backpack to your shopping cart.')
    })

    // Test Script TC002
    it('Remove item in the Shopping Cart', () => {

        cy.get('#email').type('budihartono12@gmail.com')
        cy.get('#pass').type('Budi123@')
        
        // Define login button
        const btnLogin = cy.get('#send2')
        btnLogin.click()
        
        // Click cart icon
        const btnCart = cy.get('.counter-number').should('be.visible')
        btnCart.click()

        const btnRemove = cy.get('.product > .secondary > .action').click()

        const btnConfirm = cy.contains('OK').click ()

        cy.get('.block-minicart').should('be.visible')
        cy.contains('You have no items in your shopping cart.').should('be.visible')
    })

    // Test Script TC003
    it('Update item qty below than 0', () => {

        cy.get('#email').type('budihartono12@gmail.com')
        cy.get('#pass').type('Budi123@')
        
        // Define login button
        const btnLogin = cy.get('#send2')
        btnLogin.click()

        cy.visit('https://magento.softwaretestingboard.com/gear.html')
        const product = cy.contains('Fusion Backpack')
        product.click()

        cy.get('#qty').then(($input) => {
            $input.attr('value', '-5')
            $input.trigger('input')
        })

        // Add the item to shopping cart
        const btnAddToCart = cy.get('#product-addtocart-button').should('be.visible')
        btnAddToCart.click()

        // Validation
        cy.contains('Please enter a quantity greater than 0.').should('be.visible')
    })

    // Test script TC004
    it.only('Proceed to checkout with 1 item', () => {

        cy.get('#email').type('budihartono12@gmail.com')
        cy.get('#pass').type('Budi123@')
        
        // Define login button
        const btnLogin = cy.get('#send2')
        btnLogin.click()

        cy.contains('Welcome, Budi Hartono!').should('be.visible')
        
        // Visit the product item
        const btnCart = cy.get('.showcart')
        btnCart.click()

        // Proceed to Checkout
        cy.get('#top-cart-btn-checkout').should('be.visible').and('be.enabled').click()

        // Validation
        cy.url().should('include', '/checkout/#shipping')
        cy.contains('Shipping Address').should('be.visible')
    })
})