import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormField from './FormField';

describe('InputField component', () => {
    it('renders input field correctly', () => {
        const onChange = jest.fn();
        const { getByPlaceholderText } = render(
            <FormField
                value=""
                label="Test Label"
                name="testName"
                placeholder="Test Placeholder"
                type="text"
                onChange={onChange}
            />
        );

        const input = getByPlaceholderText('Test Placeholder');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('name', 'testName');
        expect(input).toHaveAttribute('type', 'text');

        fireEvent.change(input, { target: { value: 'test' } });
        expect(onChange).toHaveBeenCalled();
    });
});