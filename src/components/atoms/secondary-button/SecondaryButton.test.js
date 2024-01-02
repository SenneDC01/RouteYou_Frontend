import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SecondaryButton from './SecondaryButton';
import AddSVG from '@/utils/icons/AddSVG';

describe('Secondary Button component', () => {
  it('renders button with label and icon', () => {
    render(<SecondaryButton icon={<AddSVG />}>Click me</SecondaryButton>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button with label and type', () => {
    render(<SecondaryButton type="submit">Click me</SecondaryButton>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });
});
