import React from 'react';
import ManageEventPage from './page';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockEvent = {
  id: 1,
  name: 'City Light Run Aalst',
  description: 'ddddd',
  start_date: '2024-04-22 21:00:00',
  end_date: '2024-04-22 23:00:00',
  max_participants: 1016,
  price: '5.00',
  visibility: 'PRIVATE',
  image_url:
    'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/1/BCHry92ympg6ZQXwPSIziFIVPgQjivAVE4HHrjqf.webp',
  author: 'Senna Uyttersprot',
  relation: 'OWNER',
  routes: [
    {
      route_data: {
        id: 6833170,
        name: 'Stadsomloop Aalst - Rood',
        difficulty: 0.3,
        type: 'Looproute',
        maximum_ascent: '1.48631%',
        average_ascent: '0%',
        length: '1km',
        uri: 'https://www.routeyou.com/nl-be/route/view/6833170/looproute/StadsomloopAalst-Rood',
        begin_address: 'Aalst, Oost-Vlaanderen, Vlaanderen',
      },
    },
  ],
};

describe('ManageEventPage', () => {
  test('renders ManageEventPage with event details', () => {
    render(<ManageEventPage event={mockEvent} />);

    expect(screen.getByText(mockEvent.name)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.author)).toBeInTheDocument();
    expect(screen.getByText(mockEvent.description)).toBeInTheDocument();

    expect(
      screen.getByText(mockEvent.routes[0].route_data.type)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockEvent.routes[0].route_data.length)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockEvent.routes[0].route_data.maximum_ascent)
    ).toBeInTheDocument();
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
