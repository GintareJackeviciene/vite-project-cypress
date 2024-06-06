describe("Registration Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("displays Registration Form heading", () => {
    const element1 = cy.contains("h2", "Registration Form");
    element1.should("be.visible");
  });

  it("displays the form with empty fields", () => {
    cy.contains("label", "Username:").should("be.visible");
    cy.get('[name="username"]').should("be.visible").and("have.value", "");

    cy.contains("label", "Email:").should("be.visible");
    cy.get('[name="email"]').should("be.visible").and("have.value", "");

    cy.contains("label", "Password:").should("be.visible");
    cy.get('[name="password"]').should("be.visible").and("have.value", "");

    cy.contains("label", "Date of Birth:").should("be.visible");
    cy.get('[name="dob"]').should("be.visible").and("have.value", "");
  });

  it("displays submit button", () => {
    const element = cy.contains("button", /Submit/i);
    element.should("be.visible");
  });

  it("customer is able to fill Registration form", () => {
    cy.get('[name="username"]').type("vardas");
    cy.get('[name="email"]').type("testas@testa.com");
    cy.get('[name="password"]').type("123456");
    cy.get("[data-cy=dob-input]").type("1985-01-09");
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Age: 39").should("be.visible");
  });

  it("should not be able to fill form with empty username", () => {
    cy.get('[name="email"]').type("testas@testa.com");
    cy.get('[name="password"]').type("123456");
    cy.get("[data-cy=dob-input]").type("1985-01-09");
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Username is required").should("be.visible");
  });

  it("should not be able to fill form with empty email", () => {
    cy.get('[name="username"]').type("vardas");
    cy.get('[name="password"]').type("123456");
    cy.get("[data-cy=dob-input]").type("1985-01-09");
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Email is required").should("be.visible");
  });

  it("should not be able to fill form with empty password", () => {
    cy.get('[name="username"]').type("vardas");
    cy.get('[name="email"]').type("testas@testa.com");
    cy.get("[data-cy=dob-input]").type("1985-01-09");
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Password is required").should("be.visible");
  });

  it("should not be able to fill form with empty Date of Birth:", () => {
    cy.get('[name="username"]').type("vardas");
    cy.get('[name="email"]').type("testas@testa.com");
    cy.get('[name="password"]').type("123456");
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Date of Birth is required").should("be.visible");
  });
});
