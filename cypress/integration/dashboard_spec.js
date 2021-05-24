describe('Details', () => {
  beforeEach(() => {
    cy.load()
  });
  it('Should show all movies', () => {
    cy.get('.card').should('be.visible')
    cy.get('.article').should('not.exist')
  })

  it('Should switch to movie details view', () => {
    cy.get('.card').click()
      .get('.card').should('not.exist')
      .get('.details').should('be.visible')
      .get('.details').contains('Money Plane')
  })

  it('Should be able to use the back arrow to navigate', () => {
    cy.get('.card').click()
      .go('back')
      .get('.card').should('be.visible')
      .get('.article').should('not.exist')
  })

});
