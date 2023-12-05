import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
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
                errorMessage="Dit veld is verplicht"
            />
        );

        const input = getByPlaceholderText('Test Placeholder');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('name', 'testName');
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveAttribute('value', '');
        expect(input).toHaveClass('inValid');
        
        fireEvent.change(input, { target: { value: 'test' } });
        expect(onChange).toHaveBeenCalled();
    });
});