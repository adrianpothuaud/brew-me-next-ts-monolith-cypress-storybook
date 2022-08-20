import GuestFirstScreen from "./GuestFirstScreen"

describe("GuestFirstScreen", function() {
  it("has a link to client signup", function() {
    cy.mount(<GuestFirstScreen />)
    cy.get("a[data-cy=client-signup-link]").should('be.visible')
  })
  it("has a link to client login", function() {
    cy.mount(<GuestFirstScreen />)
    cy.get("a[data-cy=client-login-link]").should('be.visible')
  })
  it("has a link to brewer signup", function() {
    cy.mount(<GuestFirstScreen />)
    cy.get("a[data-cy=brewer-signup-link]").should('be.visible')
  })
  it("has a link to brewer login", function() {
    cy.mount(<GuestFirstScreen />)
    cy.get("a[data-cy=brewer-login-link]").should('be.visible')
  })
})
