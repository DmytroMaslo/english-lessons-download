/// <reference types="cypress" />
import links from '../../links1'
describe('download videos', () => {
    beforeEach(() => {
      cy.visit('https://en.savefrom.net/383/')

    })
  
    it('download videos one by one', () => {
        let countElements = links.length;
        cy.get('div.tarea-wrap input').type()
        cy.get('div.def-btn-box a',{timeout:30000}).should('be.visible')

    })
})
  

  