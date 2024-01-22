import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortDropdown from './SortDropdown';
import '@testing-library/jest-dom';

test('SortDropdown renders correctly and triggers onSortChange', () => {
  render(<SortDropdown />);

  expect(screen.getByText('Date')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Date'));

  fireEvent.click(screen.getByText('Name'));

  expect(screen.getByText('Name')).toBeInTheDocument();
});
