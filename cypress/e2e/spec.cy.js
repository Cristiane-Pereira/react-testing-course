describe("Todos", () => {
   it("visits the initial project page", () => {
    cy.visit("/");
    cy.contains("todos");
   });
})