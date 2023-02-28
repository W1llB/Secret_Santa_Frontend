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
  test("checks conditional rendering and full form submit", async () => {
    render(<App />);
    // landing card stage
    let startButton = screen.getByRole("button");
    let landingHeader = screen.getByRole("heading", { level: 4 });

    userEvent.click(startButton);

    expect(landingHeader).not.toBeInTheDocument();

    // Participant name form stage
    let personInputs = screen.getAllByRole("textbox");
    userEvent.type(personInputs[0], "test 1");
    userEvent.type(personInputs[1], "test 2");
    userEvent.type(personInputs[3], "test 3");

    let personSubmit = screen.getByRole("button", { name: /submit/i });
    let participantFormHeader = screen.getByRole("heading", { level: 3 });

    userEvent.click(personSubmit);

    expect(participantFormHeader).not.toBeInTheDocument();

    // details form stage
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
    // email form stage
    let emailInputs = screen.getAllByRole("textbox");
    let emailHeader = screen.getByRole("heading", { level: 3 });
    userEvent.type(emailInputs[0], "test@gmail.com");
    userEvent.type(emailInputs[1], "test@gmail.com");
    userEvent.type(emailInputs[2], "test@gmail.com");

    let emailSubmit = screen.getByRole("button");
    userEvent.click(emailSubmit);
    expect(emailHeader).not.toBeInTheDocument();
    // final success stage
    let successMessage = screen.getByRole("heading", { level: 3 });
    expect(successMessage).toHaveTextContent(
      "Your Santas have been sent their gift recipient!"
    );
  });
});
