describe("Registration Form", () => {
  const username = "vardas";
  const email = "testas@testa.com";
  const password = "123456";
  const birth = "1985-01-09";
  const expectedAge = "39";

  beforeEach(() => {
    cy.goTo();
    cy.contains(/Registration Form/i);
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
    cy.login(username, email, password, birth);
    cy.contains(expectedAge).should("be.visible");
  });

  it("should not be able to fill form with empty username", () => {
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get("[data-cy=dob-input]").type(birth);
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Username is required").should("be.visible");
  });

  it("should not be able to fill form with empty email", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="password"]').type(password);
    cy.get("[data-cy=dob-input]").type(birth);
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Email is required").should("be.visible");
  });

  it("should not be able to fill form with empty password", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="email"]').type(email);
    cy.get("[data-cy=dob-input]").type(birth);
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Password is required").should("be.visible");
  });

  it("should not be able to fill form with empty Date of Birth:", () => {
    cy.get('[name="username"]').type(username);
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Date of Birth is required").should("be.visible");
  });
});
