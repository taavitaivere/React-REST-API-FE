describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/', { timeout: 10000 });
    cy.wait(300)
    cy.get('[name="create"]').click()
    cy.get('input[name=name]').type('John Doe');
    cy.get('input[name=email]').type('test@example')
    cy.get('input[name=avatar]').type('testPilt')
    cy.get('form > .btn').click()
    cy.get('[name="create"]').click()
    cy.get('input[name=name]').type('John Doe');
    cy.get('input[name=email]').type('test@example')
    cy.get('input[name=avatar]').type('testPilt')
    cy.get('form > .btn').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-primary').click()
    cy.get('input[name=name]').clear().type('Uus Joe');
    cy.get('input[name=email]').clear().type('uusTest@example')
    cy.get('input[name=avatar]').clear().type('UUS Pilt')
    cy.get('form > .btn').click()
    cy.get('[name="create"]').click()
    cy.get('[name="list"]').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-danger').click()
  })
})
