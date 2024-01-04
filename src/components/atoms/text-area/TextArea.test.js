import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextArea from './TextArea';

describe('InputField component', () => {
  it('renders input field correctly', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <TextArea
        value=""
        label="Test Label"
        name="testName"
        placeholder="Test Placeholder"
        type="text"
        onChange={onChange}
        errorMessage="Dit veld is verplicht"
      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'testName');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('value', '');
    expect(input).toHaveClass('invalid');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
