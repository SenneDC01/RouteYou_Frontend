// src/atoms/Button.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BigTitle from "./BigTitle";

describe("BigTitle component", () => {
  it("Renders Big Title correctly", () => {
    render(<BigTitle>Text</BigTitle>);
    const title = screen.getByText("Text");
    expect(title).toBeInTheDocument();
  });
});
