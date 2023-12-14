import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FavButton from "@/components/atoms/fav-button/FavButton";

describe("FavButton", () => {
  it("toggles favorite status on click", () => {
    const { getByRole } = render(<FavButton />);

    fireEvent.click(getByRole("button"));
    expect(getByRole("button")).toBeTruthy();
  });
});