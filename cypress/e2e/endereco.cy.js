///<reference types="cypress"/>
import enderecoPage from "../support/page-objects/endereco.page";

beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados=>{
        cy.login(dados.usuario, dados.senha)
    })
});

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
    it.only('Deve realizar o cadastro do faturamento com sucesso', () => {
    //cadastro de endereco
        enderecoPage.editarEnderecoFaturamento('Luan','Moraes','EBAC','Brasil','Av.Brasil','3100','São Paulo','São Paulo','02001000','30024000','luan@teste.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
});