import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StatusDropdown from './StatusDropdown';
import '@testing-library/jest-dom';

test('Participants renders correctly and triggers onStatusChange', () => {
  render(<StatusDropdown />);

  // Check if the default selected option is rendered
  expect(screen.getByText('Interested')).toBeInTheDocument();

  // Open the dropdown
  fireEvent.click(screen.getByText('Interested'));

  // Click on the 'Signed Up' option
  fireEvent.click(screen.getByText('Signed Up'));

  // Check if the selected option is updated
  expect(screen.getByText('Signed Up')).toBeInTheDocument();

  // Click on the 'Canceled' option
  fireEvent.click(screen.getByText('Canceled'));

  // Check if the selected option is updated
  expect(screen.getByText('Canceled')).toBeInTheDocument();
});
