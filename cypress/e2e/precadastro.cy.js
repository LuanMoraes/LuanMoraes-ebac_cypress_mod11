///<reference types="cypress"/>
var faker = require('@faker-js/faker');

beforeEach(() => {
  cy.visit('minha-conta/')
  
});

describe('Funcionalidade de pre cadastro', () => {
  it('Registra uma conta e altera o primeiro e ultimo nome', () => {
    let nomeFaker = faker.faker.name.firstName()
    let sobrenomeFaker = faker.faker.name.lastName()
    let emailFaker = faker.faker.internet.email(nomeFaker)

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type('teste@teste.com')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nomeFaker)
    cy.get('#account_last_name').type(sobrenomeFaker)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
  })

  it.only('Deve completar o pré-cadastro com sucesso usando Comandos Customizados', () => {
    let nomeFaker = faker.faker.name.firstName()
    let sobrenomeFaker = faker.faker.name.lastName()
    let emailFaker = faker.faker.internet.email(nomeFaker)
    cy.preCadastro(emailFaker,'senha@teste!.com',nomeFaker,sobrenomeFaker)
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
  });
})