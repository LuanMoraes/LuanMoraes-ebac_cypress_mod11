///<reference types="cypress" />
beforeEach(() => {
  cy.visit('produtos/')
});

describe('Adicao de um produto ao carrinho', () => {
  it('Selecionar produto de uma lista', () => {
    cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
  })
  it('Deve adicionar um produto ao carrinho',()=>{
    var quantidade = 10;
    cy.get(':nth-child(7) > .page-numbers').click()
    cy.get('[class="product-block grid"]').contains('Taurus Elements Shell').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Yellow').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain',quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade +' × “Taurus Elements Shell” foram adicionados no seu carrinho.')
  })
})