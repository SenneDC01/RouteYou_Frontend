import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardContent from './DashboardContent';

describe('Dashboard content component', () => {
  it('renders correctly', () => {
    render(
      <DashboardContent
        title="My events"
        description="On this page you'll find your events."
      />
    );
    const title = screen.getByText('My events');
    const description = screen.getByText(
      "On this page you'll find your events."
    );
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
