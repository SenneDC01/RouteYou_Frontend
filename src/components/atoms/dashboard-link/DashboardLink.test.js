// src/atoms/ButtonRound.test.js
import React from "react";
import { findAllByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardLink from "./DashboardLink";

const mockPathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname() {
    return mockPathname();
  },
}));

describe("Dashboard link component", () => {
  it("renders bold text correctly", () => {
    render(<DashboardLink link="/test">Test</DashboardLink>);
    const element = screen.getByText("Test");
    expect(element).toBeInTheDocument();
  });

  it("has an active class", () => {
    mockPathname.mockImplementation(() => "/test");

    render(<DashboardLink link="/test">Test</DashboardLink>);
    const classes = screen.findByText("Text");
    expect(classes).toEqual(expect.stringContaining("active"));
  });
});
