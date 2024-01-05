import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AccessibilityStatement, { generateMetadata } from './page';

describe('Accessibility statement', () => {
  beforeEach(() => {
    render(<AccessibilityStatement />);
  });

  it('renders the page', () => {
    const page = screen.getByTestId('toegankelijkheids-verklaring');
    expect(page).toBeInTheDocument();
  });

  it('generates correct metadata', () => {
    const metadata = generateMetadata();
    expect(metadata).toEqual({
      title: 'Accessibility statement - RouteYou',
      description: 'Accessibility statement of RouteYou.',
      keywords: 'RouteYou, accessibility, statement, accessibility statement',
    });
  });
});
