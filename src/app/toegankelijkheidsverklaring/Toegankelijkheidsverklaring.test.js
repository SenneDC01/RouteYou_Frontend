import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Toegankelijkheidsverklaring, { generateMetadata } from './page';

describe('Toegankelijkheidsverklaring', () => {
  beforeEach(() => {
    render(<Toegankelijkheidsverklaring />);
  });

  it('renders the page', () => {
    const page = screen.getByTestId('toegankelijkheids-verklaring');
    expect(page).toBeInTheDocument();
  });

  it('generates correct metadata', () => {
    const metadata = generateMetadata();
    expect(metadata).toEqual({
      title: 'Toegankelijkheidsverklaring - RouteYou',
      description: 'Toegankelijkheidsverklaring van RouteYou.',
      keywords:
        'RouteYou, toegankelijkheid, verklaring, toegankelijkheidsverklaring',
    });
  });
});
