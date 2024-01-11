import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ManageEventPage from './page';
import '@testing-library/jest-dom';
import * as EventService from '@/services/EventService';

const publicEventsResponse = {
  message: 'Events have been fetched successfully',
  events: {
    current_page: 1,
    data: [
      {
        id: 1,
        name: 'City Light Run Aalst',
        description: 'Loop langs de mooiste parels van Aalst',
        start_date: '2024-04-22 21:00:00',
        image_url:
          'http://localhost:8080/storage/images/no-profile-picture.png',
        author: 'Senna Uyttersprot',
        interested: false,
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
      },
    ],
    first_page_url: 'http://localhost:8080/api/events?page=1',
    from: 1,
    last_page: 1,
    last_page_url: 'http://localhost:8080/api/events?page=1',
    links: [
      {
        url: null,
        label: '&laquo; Previous',
        active: false,
      },
      {
        url: 'http://localhost:8080/api/events?page=1',
        label: '1',
        active: true,
      },
      {
        url: null,
        label: 'Next &raquo;',
        active: false,
      },
    ],
    next_page_url: null,
    path: 'http://localhost:8080/api/events',
    per_page: 10,
    prev_page_url: null,
    to: 1,
    total: 1,
  },
};

describe('ManageEventPage', () => {
  let mockPublicEvents;

  beforeEach(() => {
    mockPublicEvents = jest.spyOn(EventService, 'publicEvents');
    mockPublicEvents.mockImplementation(() =>
      Promise.resolve({ ...publicEventsResponse, code: 200 })
    );
  });

  afterEach(() => {
    mockPublicEvents.mockRestore();
  });

  it('renders event details correctly', async () => {
    const { getByTestId } = render(<ManageEventPage />);

    await waitFor(() => expect(mockPublicEvents).toHaveBeenCalled());

    // Adjust the following assertions based on your actual component structure
    expect(getByTestId('event-name')).toHaveTextContent('City Light Run Aalst');
    expect(getByTestId('event-description')).toHaveTextContent(
      'Loop langs de mooiste parels van Aalst'
    );
  });

  it('renders correctly without event', () => {
    // Render the component without providing an event prop
    const { getByTestId } = render(<ManageEventPage />);

    // Assert that the element with data-testid "name-column" exists
    expect(getByTestId('leftColumn')).toBeInTheDocument();

    // Assert that the text 'No Name' is present in the left column
    // expect(getByTestId('leftColumn')).toHaveTextContent('Name');

    // Assert that the text 'Participants' is present in the right column
    // expect(getByTestId('participants-column')).toBeInTheDocument();
  });
});
