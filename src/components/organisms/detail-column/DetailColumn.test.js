// src/atoms/Button.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailColumn from "./DetailColumn";

describe("DetailColumn component", () => {
  it("Renders the detail column of an event correctly", () => {
    const event = {};
    render(
      <DetailColumn data-testid="detail_column" event={event}></DetailColumn>
    );
    const element = screen.getByTestId("detail_column");
    expect(element).toBeInTheDocument();
  });
});