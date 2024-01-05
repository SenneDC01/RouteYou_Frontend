import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyDeclaration, { generateMetadata } from './page';

describe('Privacy declaration', () => {
  beforeEach(() => {
    render(<PrivacyDeclaration />);
  });

  it('renders the page', () => {
    const page = screen.getByTestId('privacy-verklaring');
    expect(page).toBeInTheDocument();
  });

  it('generates correct metadata', () => {
    const metadata = generateMetadata();
    expect(metadata).toEqual({
      title: 'Privacy declaration - RouteYou',
      description: 'Privacy declaration of RouteYou.',
      keywords: 'RouteYou, privacy, declaration, privacy declaration',
    });
  });
});
