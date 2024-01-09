import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ManageEventDropDown from './ManageEventDropDown';
import '@testing-library/jest-dom';

const MockComponent = () => (
  <div data-testid="mock-component">Mock Content</div>
);

describe('ManageEventDropDown', () => {
  it('renders with default title and closed dropdown', () => {
    render(<ManageEventDropDown comp={MockComponent} />);

    expect(screen.getByText('title')).toBeInTheDocument();

    expect(screen.queryByTestId('mock-component')).not.toBeInTheDocument();
  });

  it('renders with custom title and open dropdown on button click', () => {
    render(<ManageEventDropDown comp={MockComponent} title="Custom Title" />);

    expect(screen.getByText('Custom Title')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Custom Title'));

    expect(screen.getByTestId('mock-component')).toBeInTheDocument();
  });

  it('toggles the dropdown state on button click', () => {
    render(<ManageEventDropDown comp={MockComponent} />);

    fireEvent.click(screen.getByText('title'));

    expect(screen.getByTestId('mock-component')).toBeInTheDocument();

    fireEvent.click(screen.getByText('title'));

    expect(screen.queryByTestId('mock-component')).not.toBeInTheDocument();
  });
});
