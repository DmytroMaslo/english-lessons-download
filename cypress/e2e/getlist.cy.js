/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://www.youtube.com/playlist?list=PLD6SPjEPomaustGSgYNsn3V62BTQeH85X')
  })

  it('displays two todo items by default', () => {
    cy.get('#spinner-container+#contents #spinner-container+#contents').should('be.visible');
    cy.scrollTo('bottom')
    cy.get('#spinner-container+#contents #spinner-container+#contents').find('a').should('have.length.above', 400)
    cy.scrollTo('bottom')
    /*
    cy.get('#spinner-container+#contents #spinner-container+#contents').find('a').should('have.length.above', 700)
    cy.scrollTo('bottom')
    cy.get('#spinner-container+#contents #spinner-container+#contents').find('a').should('have.length.above', 1000)
    cy.scrollTo('bottom')
    cy.get('#spinner-container+#contents #spinner-container+#contents').find('a').should('have.length.above', 1300)
    cy.scrollTo('bottom')
    cy.get('#spinner-container+#contents #spinner-container+#contents').find('a').should('have.length.above', 1600)
    cy.scrollTo('bottom')
    */
    cy.get('h3 #video-title').each(($el) => {
        cy.writeFile('links.txt', 'Hello World', { flag: 'a+' })
      }
    )
  })

})
