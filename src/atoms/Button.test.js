// src/atoms/Button.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button component", () => {
  it("renders button with label", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies styles correctly", () => {
    render(
      <Button
        label="Styled Button"
        backgroundColor="red"
        borderColor="blue"
        fontColor="white"
        width="100px"
        height="40px"
        fontFamily="italic"
        fontWeight="bold"
        fontSize="18px"
      />,
    );

    const buttonElement = screen.getByText("Styled Button");

    // Check styles
    expect(buttonElement).toHaveStyle({
      backgroundColor: "red",
      borderColor: "blue",
      color: "white",
      width: "100px",
      height: "40px",
    });

    // Check text styles
    const buttonTextElement = buttonElement.firstChild;
    expect(buttonTextElement).toHaveStyle({
      fontStyle: "italic",
      fontWeight: "bold",
      fontSize: "18px",
    });
  });

  // Add more tests as needed
});
