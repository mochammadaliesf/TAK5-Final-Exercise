import SearchProduct from "../../support/pageObject/SearchProduct"
import AddToCart from "../../support/pageObject/AddToCart"

describe('Search_Product', () => {
    beforeEach(() => {
      cy.visit('/customer/account/login/')
    })
    it('Success search (bag)', () => {
        cy.login()
        cy.get(SearchProduct.searchField).type('bag'),
        cy.get(SearchProduct.searchField).type('{enter}')
    })
    it('Failed search (driver)', () => {
        cy.login()
        cy.get(SearchProduct.searchField).type('driver'),
        cy.get(SearchProduct.searchField).type('{enter}'),
        cy.get(SearchProduct.msgShown).should('contain',SearchProduct.errorMsg)
    })
    it('Success search (bag) and add to cart', () => {
        cy.login()
        cy.get(SearchProduct.searchField).type('bag'),
        cy.get(SearchProduct.searchField).type('{enter}'),
        cy.visit(AddToCart.productUrl1)
        cy.get(AddToCart.btnAddToCart).click()
    })
})