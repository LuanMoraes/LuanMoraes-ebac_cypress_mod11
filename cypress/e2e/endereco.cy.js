///<reference types="cypress"/>

beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados=>{
        cy.login(dados.usuario, dados.senha)
    })
});

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
    it('Deve realizar o cadastro do faturamento com sucesso', () => {
    //cadastro de endereco
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a')

    });
});