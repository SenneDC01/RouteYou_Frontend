// src/atoms/ButtonRound.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonLink from "./ButtonLink";

describe("Button component", () => {
  it("renders button link with label", () => {
    render(<ButtonLink>Click me</ButtonLink>);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });
});
