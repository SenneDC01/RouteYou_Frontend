// src/atoms/ButtonRound.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardNav from "./DashboardNav";

describe("Dashboard nav component", () => {
  it("uses a nav", () => {
    render(<DashboardNav />);
    const element = screen.getByRole("navigation");
    expect(element).toBeInTheDocument();
  });

  it("uses an unordered list", () => {
    render(<DashboardNav />);
    const element = screen.getByRole("list");
    expect(element).toBeInTheDocument();
  });
});
