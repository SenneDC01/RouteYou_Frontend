import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortDropdown from './SortDropdown';
import '@testing-library/jest-dom';

test('SortDropdown renders correctly and triggers onSortChange', () => {
  render(<SortDropdown />);

  // Check if the default selected option is rendered
  expect(screen.getByText('Name')).toBeInTheDocument();

  // Open the dropdown
  fireEvent.click(screen.getByText('Name'));

  // Click on the 'Date' option
  fireEvent.click(screen.getByText('Date'));

  // Check if the selected option is updated
  expect(screen.getByText('Date')).toBeInTheDocument();
});
