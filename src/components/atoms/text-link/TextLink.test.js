import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextLink from './TextLink';

describe('TextLink component', () => {
  it('Renders text link correctly', () => {
    render(<TextLink href="/">Text</TextLink>);
    const title = screen.getByText('Text');
    expect(title).toBeInTheDocument();
  });
});
