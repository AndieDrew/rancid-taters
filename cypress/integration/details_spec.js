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
});
