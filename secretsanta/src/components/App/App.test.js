import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode } from "react-dom";
import userEvent from "@testing-library/user-event";

import React from "react";
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

describe("card conditional rendering", () => {
  test("Landing card is unmounted on Get Started click", () => {
    render(<App />);

    const button = screen.getByRole("button");
    userEvent.click(button);
    const landingDescription = screen.queryByText(
      "Before you get started, make sure you have your Secret Santa emails handy!"
    );
    expect(landingDescription).not.toBeInTheDocument();
  });
});

describe("when details form completed, submit button works", () => {
  test("form missing date input won't submit", () => {
    render(<App />);
    let startButton = screen.getByRole("button");
    let messageInput = screen.getByRole("textbox", { name: /message/i });
    let nameInput = screen.getByLabelText("Enter the organiser name:");
    let budgetInput = screen.getByRole("spinbutton", { name: /budget/i });
    let submitButton = screen.getByRole("button");
    let detailsFormHeader = screen.getByRole("heading", { level: 3 });

    userEvent.click(startButton);
    userEvent.type(messageInput, "ab");
    userEvent.type(nameInput, "Bo");
    userEvent.type(budgetInput, "12");

    userEvent.click(submitButton);
    expect(detailsFormHeader).toBeInTheDocument();
  });
  test("completed form will submit", () => {
    render(<App />);

    let startButton = screen.getByRole("button");
    userEvent.click(startButton);

    let personInput = screen.getAllByRole("textbox");
    userEvent.type(personInput[0], "test 1");
    userEvent.type(personInput[1], "test 2");
    userEvent.type(personInput[3], "test 3");

    let personSubmit = screen.getByRole("button", { name: /submit/i });
    userEvent.click(personSubmit);

    let messageInput = screen.getByRole("textbox", { name: /message/i });
    let nameInput = screen.getByLabelText("Enter the organiser name:");
    let budgetInput = screen.getByRole("spinbutton", { name: /budget/i });
    let dateInput = screen.getByLabelText("Add the Gift Exchange Date:");
    let submitButton = screen.getByRole("button");
    let detailsFormHeader = screen.getByRole("heading", { level: 3 });

    userEvent.type(messageInput, "ab");
    userEvent.type(nameInput, "Bo");
    userEvent.type(budgetInput, "12");
    fireEvent.change(dateInput, { target: { value: "2023/02/27" } });

    userEvent.click(submitButton);
    expect(detailsFormHeader).not.toBeInTheDocument();
  });
});
