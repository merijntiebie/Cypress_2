const login = () => {
  cy.visit("https://reiswijzer-t.ns.nl/p/login");
  cy.wait(1000);
  cy.get(".mx-name-loginIdTextBox1").type("AdminNS");
  cy.get(".mx-name-passwordTextBox2").type("C1aE2OusN$L+7ViL657562)+");
  cy.get(".btn-default").click();
};

const maximizeBrowserWidth = () => {
  cy.viewport(1920, 1080);
};

const navigateToFeedbackRequestOverview = () => {
  cy.get(".mx-name-menuBar1-2").click({ force: true });
};

describe("Given a user navigates to the feedback request overview", () => {
  beforeEach(() => {
    login();
    maximizeBrowserWidth();
  });

  it("he should be able to delete the first feedback request", () => {
    navigateToFeedbackRequestOverview();
    cy.get(".mx-name-index-0").click();
    cy.get(".btn-danger").click();
    cy.wait(1000);
    cy.get(".btn-primary").click();
    cy.get(".btn-primary", { timeout: 10000 }).should("be.visible");
    cy.get(".btn-primary").click();
  });
});
