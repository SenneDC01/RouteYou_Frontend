import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  beforeEach(() => {
    render(<Banner />);
  });

  it('renders the banner image', () => {
    const bannerImage = screen.getByAltText('');
    expect(bannerImage).toBeInTheDocument();
  });

  it('renders the title', () => {
    const title = screen.getByText('Plan the most beautiful routes & events');
    expect(title).toBeInTheDocument();
  });

  it('renders the buttons', () => {
    const routesButton = screen.getByTestId('button-group');
    expect(routesButton).toBeInTheDocument();
  });
});
