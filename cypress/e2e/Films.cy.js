describe ('App loads successfully', () => {
  it ('Visit the app', () => {
    cy.visit ('/');
  });
});

describe ('Tests for Ridley Scott', () => {
  it ('Data renders correctly for Ridley Scott', () => {
    cy.visit ('/');
    cy.get ('[id="input-box"]').type ("Ridley Scott").should ('have.value', "Ridley Scott");
    cy.get ('[id="input-form"]').submit();
    cy.get ('[id="best-rated-film"]').should('have.text', 'Gladiator');
    cy.get ('[id="longest-film"]').should('have.text', '194 mins');
    cy.get ('[id="average-rating"]').should('have.text', '6.9');
    cy.get ('[id="shortest-days"]').should('have.text', '29');
  });
});
