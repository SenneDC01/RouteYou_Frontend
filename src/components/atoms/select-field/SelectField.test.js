import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectField from "./SelectField";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("SelectField component", () => {
  test("renders options and handles change", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <SelectField label="Select" options={options} onChange={onChangeMock} value="option2" />
    );

    options.forEach((option) => {
      const optionElement = getByLabelText(option.label);
      expect(optionElement).toBeInTheDocument();
    });

    const selectElement = getByLabelText("Select");
    expect(selectElement.value).toBe("option2");

    fireEvent.change(selectElement, { target: { value: "option3" } });
    expect(onChangeMock).toHaveBeenCalledWith("option3");
  });
});
