// src/atoms/ButtonRound.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ViewMore from "./ViewMore";

describe("ViewMore component", () => {
  it("Renders view more correctly", () => {
    render(<ViewMore>Text</ViewMore>);
    const title = screen.getByText("Text");
    expect(title).toBeInTheDocument();
  });
});
