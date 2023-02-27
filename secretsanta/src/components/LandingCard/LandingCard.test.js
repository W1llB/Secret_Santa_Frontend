import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode } from "react-dom";
import userEvent from "@testing-library/user-event";
import LandingCard from "./LandingCard";
import React from "react";

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

describe("renders the expected content", () => {
  test("renders instructions", () => {
    render(<LandingCard />);

    const instructionHeading = screen.getByRole("heading", { level: 4 });
    expect(instructionHeading).toHaveTextContent(
      "Enter the names, details and email out random pairs!"
    );
  });
  test("Get started button calls function", () => {
    const incrementFormStage = jest.fn();
    render(<LandingCard incrementFormStage={incrementFormStage} />);

    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(incrementFormStage).toHaveBeenCalled();
  });
});
