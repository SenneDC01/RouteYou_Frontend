import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectField from "./SelectField";
import "@testing-library/jest-dom";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("SelectField component", () => {
  it("renders options and handles change", () => {
    const formValues = { selectField: "option2" };
    const setFormValues = jest.fn();

    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const { getByRole } = render(
      <SelectField
        label="Select"
        name="selectField"
        options={options}
        onChange={handleChange}
        value={formValues.selectField}
      />
    );

    options.forEach((option) => {
      const optionElement = screen.getByText(option.label);
      expect(optionElement).toBeInTheDocument();
    });

    const selectElement = getByRole("combobox");
    expect(selectElement.value).toBe("option2");

    fireEvent.change(selectElement, {
      target: { name: "selectField", value: "option3" },
    });
    expect(setFormValues).toHaveBeenCalledWith({ selectField: "option3" });
  });

  it("renders options without value and with an error message", () => {
    const formValues = { selectField: "option2" };
    const setFormValues = jest.fn();

    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const { getByRole } = render(
      <SelectField
        label="Select"
        name="selectField"
        options={options}
        onChange={handleChange}
        errorMessage="This is an error message"
      />
    );
    
    const selectElement = getByRole("combobox");
    expect(selectElement.value).toBe("");
    
    const styles = window.getComputedStyle(selectElement);
    expect(styles.border).toBe("1px solid");

    const errorMessage = screen.getByText("This is an error message");
    expect(errorMessage).toBeInTheDocument();
  });
});
