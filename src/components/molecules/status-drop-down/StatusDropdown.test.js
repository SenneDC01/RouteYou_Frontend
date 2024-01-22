import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StatusDropdown from './StatusDropdown';
import '@testing-library/jest-dom';

test('StatusDropdown renders correctly and triggers onStatusChange', () => {
  render(<StatusDropdown status="INTERESTED" />);

  expect(screen.getByText('Interested')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Interested'));

  fireEvent.click(screen.getByText('Signed Up'));

  expect(screen.getByText('Signed Up')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Present'));

  expect(screen.getByText('Present')).toBeInTheDocument();
});
