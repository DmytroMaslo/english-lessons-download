/// <reference types="cypress" />
import links from '../../links1'
describe('download videos', () => {
    beforeEach(() => {
      cy.visit('https://en.savefrom.net/383/')

    })
  
    it('download videos one by one', () => {
        cy.get('div.tarea-wrap input').type()

    })
})
  

  