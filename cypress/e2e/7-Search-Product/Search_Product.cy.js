import SearchProduct from "../../support/pageObject/SearchProduct"

describe('Search_Product', () => {
    beforeEach(() => {
      cy.visit('/customer/account/login/')
    })
    it.only('Success search (bag)', () => {
        cy.login()
        cy.contain(SearchProduct.searchField).type('bag'),
        cy.get(SearchProduct.searchField).type('{enter}')
    })

    it('Failed search (driver)', () => {
        cy.login()
        cy.get(SearchProduct.searchField).type('driver'),
        cy.get(SearchProduct.searchField).type('{enter}'),
        cy.get(SearchProduct.msgShown).should('contain',SearchProduct.errorMsg)
    })
})