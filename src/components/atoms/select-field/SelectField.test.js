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
    const formValues = { selectField: 'option2' };
    const setFormValues = jest.fn();

    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const { getByRole, getByText } = render(
      <SelectField label="Select" name="selectField" options={options} onChange={handleChange} value={formValues.selectField} />
    );

    const selectElement = getByRole('combobox');
    expect(selectElement.value).toBe('option2');

    fireEvent.change(selectElement,  { target: { name: 'selectField', value: "option3" } });
    expect(setFormValues).toHaveBeenCalledWith({ selectField: 'option3' });    
  });
});
