///<reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')


beforeEach(() => {
  cy.visit('minha-conta/')
});

describe('Funcionalidade de login', () => {
  it('Deve efetuar o login com email e senha validos', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, Jenkins (não é Jenkins? Sair)')
  })
  
  it('Deve mostrar mensagem de erro ao inserir usuário inválido e senha válida',()=>{
    cy.get('#username').type('alunoDoCurso')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Erro: o usuário alunoDoCurso não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
  })
  it('Deve mostrar mensagem de erro ao inserir e-mail inválido e senha inválida',()=>{
    cy.get('#username').type('aluno...@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
  })
  it('Deve mostrar mensagem de erro ao inserir usuário válido e senha inválida',()=>{
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('testando123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
  })

  it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
  });

  it('Deve fazer login com sucesso - Usando fixture', () => {
    //Tudo o que carregar do perfil será armazenado na variável dados abaixo.
    cy.fixture('perfil').then(dados =>{
    cy.get('#username').type(dados.usuario)
    cy.get('#password').type(dados.senha,{log:false})
    cy.get('.woocommerce-form > .button').click()
    })
  });

})