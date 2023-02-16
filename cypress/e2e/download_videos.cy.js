/// <reference types="cypress" />
var link = 'https://www.youtube.com/watch?v=uXVPaRKvc88&list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X&index=' 
describe('download videos', () => {
  
    it('download videos one by one', () => {
        for(let i = 401; i<406;i++){
            cy.visit('https://en.savefrom.net/383/')
            cy.get('div.tarea-wrap input').should('be.visible')
            cy.get('div.tarea-wrap input').type(link+i)
            cy.get('#sf_submit').click()
            cy.get('div.def-btn-box a',{timeout:30000}).should('be.visible')
            cy.get('div.def-btn-box a').click()
        }
    })
})
  

  