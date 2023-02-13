/// <reference types="cypress" />
var link = 'https://www.youtube.com/watch?v=uXVPaRKvc88&list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X&index=' 
describe('download videos', () => {
    beforeEach(() => {
      cy.visit('https://en.savefrom.net/383/')

    })
  
    it('download videos one by one', () => {
        for(let i = 400; i<405;i++){
            cy.get('div.tarea-wrap input').type(link+i)
            cy.get('#sf_submit').click()
            cy.get('div.def-btn-box a',{timeout:30000}).should('be.visible')
            cy.get('div.def-btn-box a').click()
            cy.get('div.tarea-wrap input').clear()
        }
        

    })
})
  

  