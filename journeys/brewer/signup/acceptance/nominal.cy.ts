describe('Brewer signup nominal', function () {
  it('When a Brewer is not yet registered, and he goes to our website, then he could go to the Brewer registration form', function () {
    cy.visit('/')
    cy.get('a[data-cy=brewer-signup-link]').click()
    cy.url().should("contain", '/brewer-signup')
    cy.title().should("equal", 'Brew Me | Sign Up as Brewer')
  })
})
