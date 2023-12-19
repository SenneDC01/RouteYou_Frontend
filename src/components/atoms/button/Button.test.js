import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import RouteSVGWhite from '@/utils/icons/RouteSVGWhite';

describe('Button component', () => {
  it('renders button with label', () => {
    render(<Button icon={<RouteSVGWhite />}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });
});
