import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Privacyverklaring, { generateMetadata } from "./page";

describe("Privacyverklaring", () => {
  beforeEach(() => {
    render(<Privacyverklaring />);
  });

  it("renders the page", () => {
    const page = screen.getByTestId("privacy-verklaring");
    expect(page).toBeInTheDocument();
  });

  it('generates correct metadata', () => {
    const metadata = generateMetadata();
    expect(metadata).toEqual({
      title: "Privacyverklaring - RouteYou",
      description: "Privacyverklaring van RouteYou.",
      keywords: "RouteYou, privacy, verklaring, privacyverklaring",
    });
  });
});
