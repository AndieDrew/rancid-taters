describe('Details', () => {
  beforeEach(() => {
    cy.load()
    cy.get('.card').click();
});

  it('Should be able to return to main menu', () => {
    cy.get('.card').should('not.exist')
      .get('.details').should('be.visible')
      .get('.details').contains('Money Plane')
      .get('button').click()
      .get('.card').should('be.visible')
      .get('.details').should('not.exist')
  })

  it('Should be able to use the forward arrow to navigate', () => {
    cy.go('back')
      .go('forward')
      .get('.card').should('not.exist')
      .get('.article').should('be.visable')
      .get('.details').contains('Money Plane')
  })

  it('Should be able refresh on the details page and still see details', () => {
    cy.get('.card').should('not.exist')
      .get('.article').should('be.visable')
      .get('.details').contains('Money Plane')
  })


});
