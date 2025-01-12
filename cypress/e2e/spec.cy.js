describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("admin-ui-2-zeta.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214679@mhs.dinus.ac.id")
      .should("have.value", "111202214679@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");

    cy.get("header");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("admin-ui-2-zeta.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  });

  it("should allow user to logout", () => {
    cy.viewport(550, 750);
    cy.visit("admin-ui-2-zeta.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214679@mhs.dinus.ac.id")
      .should("have.value", "111202214679@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");

    cy.get("header");

    cy.get(".hidden").contains("Logout").click({ force: true });
  });
});
