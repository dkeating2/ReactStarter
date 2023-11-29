describe("template spec", () => {
  it("navigates between pages", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="NavData"]').click();
    cy.location("pathname").should("eq", "/data");
  });
});
