import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ManageEventDrawer from './ManageEventDrawer';
import '@testing-library/jest-dom';

describe('ManageEventDrawer', () => {
  it('renders with default title and closed dropdown', () => {
    render(<ManageEventDrawer>{<p>child</p>}</ManageEventDrawer>);

    expect(screen.getByText('title')).toBeInTheDocument();

    expect(screen.queryByTestId('mock-component')).not.toBeInTheDocument();
  });

  it('renders with custom title and open dropdown on button click', () => {
    render(
      <ManageEventDrawer title="Custom Title">{<p>child</p>}</ManageEventDrawer>
    );

    expect(screen.getByText('Custom Title')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Custom Title'));

    expect(screen.getByText('child')).toBeInTheDocument();
  });

  it('toggles the dropdown state on button click', () => {
    render(<ManageEventDrawer>{<p>child</p>}</ManageEventDrawer>);

    fireEvent.click(screen.getByText('title'));

    expect(screen.getByText('child')).toBeInTheDocument();

    fireEvent.click(screen.getByText('title'));

    expect(screen.queryByText('child')).not.toBeInTheDocument();
  });
});
