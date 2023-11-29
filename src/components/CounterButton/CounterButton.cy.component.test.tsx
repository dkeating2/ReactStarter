import { setupStore } from "../../store/store";
import CounterButton from "./CounterButton";

describe("CounterButton", () => {
  it("mounts with initial state", () => {
    cy.mount(<CounterButton />, {
      reduxStore: setupStore({ counter: { value: 0 } }),
    });
    cy.get("[data-testid=CurrentCount]").should(
      "have.text",
      "Current Count: 0"
    );
  });

  it("increments", () => {
    cy.mount(<CounterButton />, {
      reduxStore: setupStore({ counter: { value: 0 } }),
    });
    cy.get('[data-testid="IncrementButton"]').click();
    cy.get("[data-testid=CurrentCount]").should(
      "have.text",
      "Current Count: 1"
    );
  });

  it("decrements", () => {
    cy.mount(<CounterButton />, {
      reduxStore: setupStore({ counter: { value: 0 } }),
    });
    cy.get('[data-testid="DecrementButton"]').click();
    cy.get("[data-testid=CurrentCount]").should(
      "have.text",
      "Current Count: -1"
    );
  });

  it("increments by qty", () => {
    cy.mount(<CounterButton />, {
      reduxStore: setupStore({ counter: { value: 0 } }),
    });
    cy.get('[data-testid="IncrementByButton"]').click();
    cy.get("[data-testid=CurrentCount]").should(
      "have.text",
      "Current Count: 2"
    );
  });
});
