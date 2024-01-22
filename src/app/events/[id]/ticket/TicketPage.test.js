import { render, screen, waitFor } from '@testing-library/react';
import TicketPage, { generateMetadata } from './page';
import * as EventService from '@/services/EventService';
import '@testing-library/jest-dom';

const ticketResponseData = {
  message: 'Here is your ticket',
  data: {
    id: 1,
    name: 'City Light Run Aalst',
    description: 'Loop langs de mooiste parels van Aalst',
    start_date: '2024-04-22 21:00:00',
    image_url:
      'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/1/citylightrunaalst.jpg',
    author: 'Senna Uyttersprot',
    routes: [
      {
        route_data: {},
      },
    ],
    qr_code:
      'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/1/QR-CODE_65a968644b6f7.svg',
  },
  code: 200,
};

describe('ticketpage', () => {
  let mockTicket;

  beforeEach(() => {
    mockTicket = jest.spyOn(EventService, 'eventTicket');
    mockTicket.mockImplementation(() => Promise.resolve(ticketResponseData));
  });

  afterEach(() => {
    mockTicket.mockRestore();
  });

  it('displays the ticket of the event', async () => {
    render(await TicketPage({ params: { id: 1 } }));

    await waitFor(() => {
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
      expect.stringContaining(
        'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/1/QR-CODE_65a968644b6f7.svg'
      )
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
