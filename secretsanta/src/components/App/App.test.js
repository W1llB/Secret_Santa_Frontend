import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode } from "react-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import App from "./App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders learn react link", () => {
  render(<App />, container);
  const linkElement = screen.getByRole("heading", { level: 1 });
  expect(linkElement).toHaveTextContent("Secret Santa");
});

describe("Input form tests", () => {
  test("checks budget field only allows numbers", () => {
    render(<App />);
    let budgetInput = screen.getByLabelText("Budget (£):");

    userEvent.type(budgetInput, "10");

    expect(budgetInput).toHaveValue(10);
  });
});
