describe('Details', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      movies: [{
        id: 694919,
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        title: "Money Plane",
        average_rating: 6.142857142857143,
        release_date: "2020-09-29"
      }]
    })
    cy.visit('http://localhost:3000');
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
