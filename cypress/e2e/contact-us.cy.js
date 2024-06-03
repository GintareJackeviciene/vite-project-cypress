describe("Contact us display", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("displays contact us heading", () => {
    const element1 = cy.contains("h1", "Contact Us");
    element1.should("be.visible");
  });

  it("displays the form wiht emty fields", () => {
    cy.contains("label", "Name:").should("be.visible");
    cy.get("#name").should("be.visible").and("have.value", "");

    cy.contains("label", "Email:").should("be.visible");
    cy.get("#email").should("be.visible").and("have.value", "");

    cy.contains("label", "Subject:").should("be.visible");
    cy.get("#subject").should("be.visible").and("have.value", "");

    cy.contains("label", "Message:").should("be.visible");
    cy.get("#message").should("be.visible").and("have.value", "");
  });

  it("displays submit button", () => {
    const element = cy.contains("button", /Submit/i);
    element.should("be.visible");
  });
});

describe("contact us functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("customer is able to fill contact us form", () => {
    cy.get("#name").type("vardas");

    cy.get("#email").type("testas@testa.com");

    cy.get("#subject").type("tema");

    cy.get("#message").type("labai viskas idomu");

    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains(
      "Thank you for your message! We will get back to you soon."
    ).should("be.visible");
  });

  it("user does not fill email and gets validation error", () => {
    cy.get("#name").type("vardas");

    cy.get("#email").type(" ");

    cy.get("#subject").type("tema");

    cy.get("#message").type("labai viskas idomu");

    cy.get("button")
      .contains(/Submit/i)
      .click();
    cy.contains("Email is required").should("be.visible");
  });
});
