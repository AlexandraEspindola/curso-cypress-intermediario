/// <reference types="Cypress" />   


describe('login', () => {
    it('successfully', () =>{
        cy.login()

        cy.get('.qa-user-avatar').should('exist')
    })
})
