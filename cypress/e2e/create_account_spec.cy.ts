describe("create_account", () => {
  it("should be able to create an account", () => {
    cy.visit("/");
    cy.findByRole("link", {
      name: /don't have an account\? sign up/i,
    }).click();
    cy.findByRole("textbox", {
      name: /first name/i,
    }).type("Filipe");
    cy.findByRole("textbox", {
      name: /last name/i,
    }).type("Burgonovo");
    cy.findByRole("textbox", {
      name: /username/i,
    }).type("Burgo");

    // cy.findByLabelText(/Password/i).should("exist");
    cy.get("signup-confirmPassword").type("1234");

    // cy.findByPlaceholderText("Confirm Password").type("1234");
    // cy.findByRole("button", { name: /Sign Up/i }).click();
  });
});
