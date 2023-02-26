import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { unmountComponentAtNode } from "react-dom";
import userEvent from "@testing-library/user-event";

import React from "react";
import DetailsForm from "./DetailsForm";

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

describe("Input form tests", () => {
  const setDetailsForm = jest.fn();
  const detailsForm = {};
  test("checks Organiser name input takes input", () => {
    render(
      <DetailsForm setDetailsForm={setDetailsForm} detailsForm={detailsForm} />
    );
    let nameInput = screen.getByLabelText("Enter the organiser name:");

    userEvent.type(nameInput, "Testman");
    expect(nameInput).toHaveValue("Testman");
  });
  test("checks date field only accepts dates", () => {
    render(
      <DetailsForm setDetailsForm={setDetailsForm} detailsForm={detailsForm} />
    );
    let dateInput = screen.getByLabelText("Add the Gift Exchange Date:");

    userEvent.type(dateInput, "abc");
    expect(dateInput).toHaveValue("");
  });
  test("checks budget field only accepts numbers", () => {
    render(
      <DetailsForm setDetailsForm={setDetailsForm} detailsForm={detailsForm} />
    );
    let budgetInput = screen.getByRole("spinbutton", { name: /budget/i });

    userEvent.type(budgetInput, "abc");
    expect(budgetInput).toHaveValue(null);
  });
  test("checks message field accepts user input", () => {
    render(
      <DetailsForm setDetailsForm={setDetailsForm} detailsForm={detailsForm} />
    );
    let messageInput = screen.getByRole("textbox", { name: /message/i });

    userEvent.type(messageInput, "abc");
    expect(messageInput).toHaveValue("abc");
  });
});
