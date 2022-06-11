describe("bank_account", () => {
  it("should be able to create and account", () => {
    //  login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // bank_account
    cy.findByRole("button", {
      name: /bank accounts/i,
    }).click();
    cy.findByRole("button", {
      name: /create/i,
    }).click();
    cy.findByPlaceholderText("Bank Name").clear().type("Nubank");
    cy.findByPlaceholderText("Routing Number").clear().type("986246878");
    cy.findByPlaceholderText("Account Number").clear().type("6325876215");

    cy.findByRole("button", {
      name: /save/i,
    }).click();
  });
});
