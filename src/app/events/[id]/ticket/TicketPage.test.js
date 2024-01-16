import { render, screen, waitFor } from '@testing-library/react';
import TicketPage, { generateMetadata } from './page';
import * as EventService from '@/services/EventService';
import '@testing-library/jest-dom';

const ticketResponseData = {
  message: 'Here is your ticket',
  data: {
    name: 'City Light Run Aalst',
    author: 'Senna Uyttersprot',
    start_date: '2024-04-22 21:00:00',
    qr_code: 'QR-CODE_65a01b4f2713f.svg',
  },
  code: 200,
};

const eventResponseData = {
  message: 'Event has been fetched successfully',
  event: {
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
    routes: [[Object]],
  },
  code: 200,
};

describe('ticketpage', () => {
  let mockTicket;
  let mockEvent;

  beforeEach(() => {
    mockTicket = jest.spyOn(EventService, 'eventTicket');
    mockTicket.mockImplementation(() => Promise.resolve(ticketResponseData));

    mockEvent = jest.spyOn(EventService, 'eventDetail');
    mockEvent.mockImplementation(() => Promise.resolve(eventResponseData));
  });

  afterEach(() => {
    mockTicket.mockRestore();
    mockEvent.mockRestore();
  });

  it('displays the ticket of the event', async () => {
    render(await TicketPage({ params: { id: 1 } }));

    await waitFor(() => {
      expect(mockEvent).toHaveBeenCalled();
      expect(mockTicket).toHaveBeenCalled();
    });

    expect(
      await screen.findByText('City Light Run Aalst ticket')
    ).toBeInTheDocument();

    expect(
      await screen.findByText('Let the event coördinator scan your ticket')
    ).toBeInTheDocument();

    const img = await screen.findByAltText(
      'Ticket of City Light Run Aalst event'
    );
    expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('QR-CODE_65a01b4f2713f.svg')
    );
  });

  it('generates correct metadata', async () => {
    const metadata = await generateMetadata({ params: { id: 1 } });
    expect(metadata).toEqual({
      title: `Ticket City Light Run Aalst - RouteYou`,
      description: `Ticket: City Light Run Aalst - Your ticket for this great event on RouteYou.`,
      keywords: 'RouteYou, ticket, event, routes',
    });
  });
});
