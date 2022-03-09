//Intelligent Code Completion
/// <reference types="Cypress" />

describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('https://fs-calc.herokuapp.com/')
  
      cy.get('#startNewCalculation').click()
  
      // Should be on a new URL which includes '/basicCalc'
      cy.url().should('include', '/basicCalc')
  
      // Get an input, type into it and verify that the value has been updated
      cy.get('#adults')
        .type('7')
        .should('have.value', '7')
        //remove
    })
  })