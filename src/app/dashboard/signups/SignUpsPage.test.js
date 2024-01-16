import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Dashboard sing ups page component', () => {
  it('Test page renders correctly', async () => {
    render(<Page />);

    const title = screen.getAllByText('Sign Ups');
    const description = screen.getAllByText(
      'These are the events you have singed up for.'
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
