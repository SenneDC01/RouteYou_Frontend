import React from 'react';
import ManageEventPage from './page';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockEvent = {
  name: 'Sample Event',
  author: 'John Doe',
  start_date: '2024-01-15',
  description: 'This is a sample event description.',
  type: 'Cycling',
  distance: 50,
  time: '10:00 AM',
  image_url: 'sample-image.jpg',
};

describe('ManageEventPage', () => {
  test('renders ManageEventPage with event details', () => {
    render(<ManageEventPage event={mockEvent} />);

    expect(screen.getByText('Sample Event')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(
      screen.getByText('This is a sample event description.')
    ).toBeInTheDocument();
    expect(screen.getByAltText('Route image')).toBeInTheDocument();

    expect(screen.getByText('Cycling')).toBeInTheDocument();
    expect(screen.getByText('50km')).toBeInTheDocument();
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
  });

  test('renders right columns', () => {
    render(<ManageEventPage event={mockEvent} />);

    expect(screen.getByText('Manage your event')).toBeInTheDocument();

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Participants')).toBeInTheDocument();
    expect(screen.getByText('Posts')).toBeInTheDocument();
    expect(screen.getByText('Pictures')).toBeInTheDocument();
  });

  test('simulates user interaction with ManageEventDropDown', async () => {
    render(<ManageEventPage event={mockEvent} />);

    userEvent.click(screen.getByText('Participants'));

    await waitFor(() => {
      expect(screen.getByText('Participants')).toBeInTheDocument();
    });
  });
});
