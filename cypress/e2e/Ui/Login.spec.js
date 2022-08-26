/// <reference types="cypress" />

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('login')
    });
    it('Deve fazer login com sucesso', () => {
        cy.login('priscyllamara@teste.com','123456')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Priscylla Mara')
    })
    it('Validar mensagem de erro quando inserir login ou senha invalidos', () => {
        cy.login('priscyllaaa@teste.com','123456')
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
    })
})