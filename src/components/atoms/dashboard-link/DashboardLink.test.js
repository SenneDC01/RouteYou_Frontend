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
  it("renders dashboard link correctly", () => {
    render(<DashboardLink link="test">Test</DashboardLink>);
    const element = screen.getAllByText("Test");
    expect(element[0]).toBeInTheDocument();
  });

  it("has an active class", () => {
    mockPathname.mockImplementation(() => "/test");

    render(<DashboardLink link="/test">Test</DashboardLink>);
    const classes = screen.getByRole("listitem").className;
    expect(classes).toEqual(expect.stringContaining("active"));
  });

  it("doesn't have an active class", () => {
    mockPathname.mockImplementation(() => "/events");

    render(<DashboardLink link="/test">Test</DashboardLink>);
    const classes = screen.getByRole("listitem").className;
    expect(classes).toEqual(expect.not.stringContaining("active"));
  });
});
