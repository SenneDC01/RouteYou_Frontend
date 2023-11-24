// src/atoms/Button.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoldText from "./BoldText";

describe("BoldText component", () => {
  it("Renders bold text correctly", () => {
    render(<BoldText>Text</BoldText>);
    const element = screen.getByText("Text");
    expect(element).toBeInTheDocument();
  });
});
