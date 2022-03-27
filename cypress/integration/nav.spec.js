describe("Nav menus", () => {
  context("720px res", () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    describe("When you visit home", () => {
      it("Should navigate to home page", () => {
        cy.visit("/");
      });

      describe("nav", () => {
        it("Should navigate to Explore Page", () => {
          cy.get("[data-cy=nav-item]").contains("Explore").click();
          cy.url().should("include", "/explore");
        });
      });
    });
  });

  context("iphone-5 resolution", () => {
    beforeEach(() => {
      /**
       * Run these tests as if in a desktop browser,
       * with a 720p monitor
       */
      cy.viewport("iphone-5");
    });

    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("/");
      });

      describe("Mmenu", () => {
        it("Should open the mmenu", () => {
          cy.get("[data-cy=mmenu-btn]").click();
        });

        describe("nav", () => {
          it("Should navigate to Explore page", () => {
            cy.get("[data-cy=nav-item]").contains("Explore").click();
            cy.url().should("include", "/explore");
          });
        });
      });
    });
  });
});
