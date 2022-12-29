import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading", { level: 1 });
  expect(linkElement).toHaveTextContent("Secret Santa");
});
