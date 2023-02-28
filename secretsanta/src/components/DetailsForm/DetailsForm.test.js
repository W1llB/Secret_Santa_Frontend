import { fireEvent, render, screen } from "@testing-library/react";
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

const setDetailsForm = jest.fn();
const detailsForm = {};

describe("form inputs call function", () => {
  test("checks Organiser name input takes input", () => {
    render(
      <DetailsForm setDetailsForm={setDetailsForm} detailsForm={detailsForm} />
    );
    let nameInput = screen.getByLabelText("Enter the organiser name:");

    userEvent.type(nameInput, "Bo");
    expect(nameInput).toHaveValue("Bo");
    expect(setDetailsForm).toHaveBeenNthCalledWith(1, { organiserName: "B" });
    expect(setDetailsForm).toHaveBeenNthCalledWith(2, { organiserName: "Bo" });
  });

  test("checks message field accepts user input & calls function", () => {
    render(
      <DetailsForm setDetailsForm={setDetailsForm} detailsForm={detailsForm} />
    );
    let messageInput = screen.getByRole("textbox", { name: /message/i });

    userEvent.type(messageInput, "ab");
    expect(messageInput).toHaveValue("ab");
    expect(setDetailsForm).toHaveBeenNthCalledWith(1, { message: "a" });
    expect(setDetailsForm).toHaveBeenNthCalledWith(2, { message: "ab" });
  });

  test("date input accepted & calls function", () => {
    const testValue = "2020-12-11";

    render(
      <DetailsForm setDetailsForm={setDetailsForm} detailsForm={detailsForm} />
    );
    const input = screen.getByLabelText("Add the Gift Exchange Date:");

    fireEvent.change(input, { target: { value: testValue } });

    expect(input).toHaveValue(testValue);
    expect(setDetailsForm).toHaveBeenNthCalledWith(1, { deadline: testValue });
  });
  test("budget field input calls funtion", () => {
    render(<DetailsForm setDetailsForm={setDetailsForm} />);
    let budgetInput = screen.getByRole("spinbutton", { name: /budget/i });

    userEvent.type(budgetInput, "12");
    expect(budgetInput).toHaveValue(12);
    expect(setDetailsForm).toHaveBeenNthCalledWith(1, { budget: "1" });
    expect(setDetailsForm).toHaveBeenNthCalledWith(2, { budget: "12" });
  });
});

describe("input validation working", () => {
  test("checks date field only accepts dates", () => {
    render(<DetailsForm />);
    let dateInput = screen.getByLabelText("Add the Gift Exchange Date:");

    userEvent.type(dateInput, "abc");
    expect(dateInput).toHaveValue("");
  });
  test("checks budget field only accepts numbers", () => {
    render(<DetailsForm />);
    let budgetInput = screen.getByRole("spinbutton", { name: /budget/i });

    userEvent.type(budgetInput, "abc");
    expect(budgetInput).toHaveValue(null);
  });
});
