/// <reference types="cypress" />
const faker = require('faker-br')

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Deve fazer cadastro com sucesso', () => {
        cy.cadastro('priscylla teste', '123456', faker.internet.email())
        cy.get('.large').should('contain', 'Dashboard')
    })
    it.only('Deve criar perfil', () => {
        cy.cadastro('priscylla teste', '123456', faker.internet.email())
        cy.criar_perfil('Bootcamp', 'https://conexaoqa.herokuapp.com/', 'Belo Horizonte', 'Cypress', '@priscyllamreis', 'eu sou qa!!')
        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')
    })

})
