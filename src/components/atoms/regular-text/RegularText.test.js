// src/atoms/ButtonRound.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RegularText from "./RegularText";

describe("RegularText component", () => {
  it("Renders regular text correctly", () => {
    render(<RegularText>Text</RegularText>);
    const title = screen.getByText("Text");
    expect(title).toBeInTheDocument();
  });
});
