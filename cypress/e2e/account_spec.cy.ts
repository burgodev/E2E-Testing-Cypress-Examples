describe("account", () => {
  it("can save account data", () => {
    //  login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();
    // my account
    cy.findByRole("button", {
      name: /my account/i,
    }).click();
    cy.findByPlaceholderText("First Name").clear().type("Filipe");
    cy.findByPlaceholderText("Last Name").clear().type("Burgonovo");
    cy.findByPlaceholderText("Email").clear().type("filipeburgonovo@gmail.com");
    cy.findByPlaceholderText("Phone Number").clear().type("47 997055115");
    
    cy.findByRole("button", {
      name: /save/i,
    }).click();
  });
});
