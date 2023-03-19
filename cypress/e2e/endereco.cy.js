///<reference types="cypress"/>
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados=>{
        cy.login(dados.usuario, dados.senha)
    })
});

describe('Funcionalidade Enderecos - Faturamento e Entrega', () => {
    it('Deve realizar o cadastro do faturamento com sucesso', () => {
    //cadastro de endereco
        enderecoPage.editarEnderecoFaturamento('Luan','Moraes','EBAC','Brasil','Av.Brasil','3100','São Paulo','São Paulo','02001000','30024000','luan@teste.com')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
    it.only('Deve realizar o cadastro do faturamento com sucesso - Usando arquivo de dados', () => {
        //cadastro de endereco
            enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
            cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
        });
});