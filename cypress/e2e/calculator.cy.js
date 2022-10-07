describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should update running total display when buttons are pressed", () => {
    cy.get("#number6").click();
    cy.get("#number6").click();
    cy.get(".display").should("contain", "66");
  });

  it("should display result of arithmetical operations", () => {
    cy.get("#number7").click();
    cy.get("#operator-add").click();
    cy.get("#number8").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "15");
  });

  it("should chain multiple operations", () => {
    cy.get("#number7").click();
    cy.get("#operator-add").click();
    cy.get("#number8").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "30");
  });

  it("should display negative numbers with a -", () => {
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-3");
  });

  it("should display decimals with a .", () => {
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number3").click();
    cy.get(".display").should("contain", "0.3");
  });

  it("should mulitply two decimal numbers together", () => {
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number5").click();
    cy.get("#operator-multiply").click();
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.25");
  });

  it("should display very large numbers correctly", () => {
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator-multiply").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#number9").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "9.99999999899e+21");
  });

  it('should display "error" when dividing by 0', () => {
    cy.get("#number6").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "error");
  });
});
