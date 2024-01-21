import { render, fireEvent, getByDisplayValue } from '@testing-library/react';
import EditEvent from './EditEvent';
import * as EventService from '@/services/EventService';
import { act } from 'react-test-renderer';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Create Events Page component', () => {
  let mockCreate;
  const event = {
    id: 1,
    name: 'City Light Run Aalst',
    description: 'Loop langs de mooiste parels van Aalst',
    start_date: '2024-04-22 21:00:00',
    max_participants: 1000,
    price: '5.00',
    visibility: 'PUBLIC',
    image_url:
      'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/1/citylightrunaalst.jpg',
    author: 'Senna Uyttersprot',
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

  beforeEach(() => {
    mockCreate = jest.spyOn(EventService, 'editEvent');
    mockCreate.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    mockCreate.mockRestore();
  });

  test('Edit with incorrect information.', async () => {
    const { getByLabelText, getByRole } = render(<EditEvent event={event} />);
    const description = '';
    const visibility = 'none';
    const maxParticipants = 2;

    await act(async () => {
      fireEvent.change(getByLabelText('Description'), {
        target: { value: description },
      });
      fireEvent.change(getByLabelText('Visibility'), {
        target: { value: visibility },
      });
      fireEvent.change(getByLabelText('Max Participants'), {
        target: { value: maxParticipants },
      });
      fireEvent.click(getByDisplayValue('Edit Event'));
    });

    expect(mockCreate).not.toHaveBeenCalled();
  });

  test('Create with correct', async () => {
    const { getByLabelText, getByRole } = render(<EditEvent event={event} />);
    const description = 'Dit is de nieuwe description van het evenement';
    const visibility = 'PUBLIC';
    const maxParticipants = 1200;

    await act(async () => {
      fireEvent.change(getByLabelText('Description'), {
        target: { value: description },
      });
      fireEvent.change(getByLabelText('Visibility'), {
        target: { value: visibility },
      });
      fireEvent.change(getByLabelText('Max Participants'), {
        target: { value: maxParticipants },
      });
      fireEvent.click(getByDisplayValue('Edit Event'));
    });

    expect(mockCreate).not.toHaveBeenCalled();
  });
});
