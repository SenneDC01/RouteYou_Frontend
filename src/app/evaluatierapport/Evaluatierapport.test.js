import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Evaluatierapport, { generateMetadata } from './page';

describe('Privacyverklaring', () => {
  beforeEach(() => {
    render(<Evaluatierapport />);
  });

  it('renders the page', () => {
    const page = screen.getByTestId('evaluatierapport');
    expect(page).toBeInTheDocument();
  });

  it('generates correct metadata', () => {
    const metadata = generateMetadata();
    expect(metadata).toEqual({
      title: 'Evaluatierapport - RouteYou',
      description: 'Evaluatierapport van RouteYou.',
      keywords:
        'RouteYou, evaluatie, rapport, evaluatierapport, WCAG, toegankelijkheid',
    });
  });
});
