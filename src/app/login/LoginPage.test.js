import { render, fireEvent } from "@testing-library/react";
import Page from "./page";

describe("LoginPage component", () => {
  it("Log in with valid credantials", () => {
    const { getByLabelText, getByRole } = render(<Page />);

    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "password123" },
    });

    fireEvent.click(getByRole("button", { name: "Login" }));
  });
});
