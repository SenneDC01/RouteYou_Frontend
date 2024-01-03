import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateTimePicker from './DateTimePicker';

describe('Date Time Picker component', () => {
  it('renders Date Time Picker correctly', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <DateTimePicker
        value=""
        label="Test Label"
        name="testName"
        onChange={onChange}
        errorMessage="Dit veld is verplicht"
      />
    );

    const input = getByLabelText('Test Label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'testName');
    expect(input).toHaveClass('inValid');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
