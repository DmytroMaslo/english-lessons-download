/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.youtube.com/playlist?list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X')
  })

  it('displays two todo items by default', () => {
    cy.get('#spinner-container+#contents #spinner-container+#contents',{timeout:30000}).should('be.visible')
  })

})
