import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import EvaluationReport, { generateMetadata } from './page';

describe('Evaluation report', () => {
  beforeEach(() => {
    render(<EvaluationReport />);
  });

  it('renders the page', () => {
    const page = screen.getByTestId('evaluatierapport');
    expect(page).toBeInTheDocument();
  });

  it('generates correct metadata', () => {
    const metadata = generateMetadata();
    expect(metadata).toEqual({
      title: 'Evaluation report - RouteYou',
      description: 'Evaluation report of RouteYou.',
      keywords:
        'RouteYou, evaluation, report, evaluation report, WCAG, accessibility',
    });
  });
});
