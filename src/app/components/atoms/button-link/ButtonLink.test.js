// src/atoms/Button.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./ButtonLink";

describe("Button component", () => {
  it("renders button with label", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });
});
