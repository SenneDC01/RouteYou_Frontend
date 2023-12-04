// FavButton.test.js
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavButton from "@/components/atoms/fav-button/FavButton";

describe("FavButton", () => {
  it("toggles favorite status on click", () => {
    // Mock console.log to capture logs
    const consoleLogSpy = jest.spyOn(console, "log");
    consoleLogSpy.mockImplementation(() => {});

    const { getByRole } = render(<FavButton />);

    // Initially, isFavorite should be false
    expect(consoleLogSpy).not.toHaveBeenCalledWith("fav");

    // Click the button to toggle the favorite status
    fireEvent.click(getByRole("button"));

    // After clicking, isFavorite should be true, and "fav" should be logged to the console
    expect(consoleLogSpy).toHaveBeenCalledWith("fav");
    expect(getByRole("button")).toHaveAttribute("aria-pressed", "true"); // Assuming you use aria-pressed attribute for accessibility

    // Click the button again to toggle back
    fireEvent.click(getByRole("button"));

    // After the second click, isFavorite should be false, and "fav" should be logged to the console again
    expect(consoleLogSpy).toHaveBeenCalledWith("fav");
    expect(getByRole("button")).toHaveAttribute("aria-pressed", "false");

    // Clean up the mock
    consoleLogSpy.mockRestore();
  });
});
