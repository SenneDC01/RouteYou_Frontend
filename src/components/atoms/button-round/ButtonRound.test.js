// src/atoms/ButtonRound.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./ButtonRound";
import ArrowRightSVG from "@/utils/icons/ArrowRightSVG";

describe("Button component", () => {
  it("renders button with icon", () => {
    render(<Button icon={<ArrowRightSVG />} />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });
});
