import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import CompletedEventsPage from './page';
import * as EventService from '@/services/EventService';
import { generateMetadata } from './layout';

const completedEventsData = {
  current_page: 1,
  data: [
    {
      id: 1,
      name: 'City Light Run Aalst',
      description: 'Loop langs de mooiste parels van Aalst',
      start_date: '2024-01-15 21:00:00',
      image_url:
        'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/1/citylightrunaalst.jpg',
      author: 'Senna Uyttersprot',
      interested: false,
      badge: null,
    },
  ],
  first_page_url: 'http://localhost:8080/api/events/finished?page=1',
  from: 1,
  last_page: 1,
  last_page_url: 'http://localhost:8080/api/events/finished?page=1',
  links: [
    {
      url: null,
      label: '&laquo; Previous',
      active: false,
    },
    {
      url: 'http://localhost:8080/api/events/finished?page=1',
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
  path: 'http://localhost:8080/api/events/finished',
  per_page: 10,
  prev_page_url: null,
  to: 1,
  total: 1,
};

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
      replace: mockPush,
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/api/events';
  },
}));

describe('CompletedEventsPage', () => {
  it('displays completed events when available', async () => {
    const mockFinished = jest.spyOn(EventService, 'completedEvents');
    mockFinished.mockImplementation(() => Promise.resolve(completedEventsData));

    render(<CompletedEventsPage />);
    await waitFor(() => {
      expect(mockFinished).toHaveBeenCalled();
    });

    expect(screen.getByText('City Light Run Aalst')).toBeInTheDocument();

    mockFinished.mockRestore();
  });

  it('displays message when no completed events', async () => {
    completedEventsData.data = [];
    const mockFinished = jest.spyOn(EventService, 'completedEvents');
    mockFinished.mockImplementation(() => Promise.resolve({ data: [] }));

    render(<CompletedEventsPage />);
    await waitFor(() => {
      expect(mockFinished).toHaveBeenCalled();
    });

    expect(
      screen.getByText(
        "You haven't completed an event yet, keep moving and participate in events."
      )
    ).toBeInTheDocument();

    mockFinished.mockRestore();
  });

  it('generates correct metadata', async () => {
    const metadata = await generateMetadata();
    expect(metadata).toEqual({
      title: `Completed Events - RouteYou`,
      description: `Completed Events - My completed events on RouteYou.`,
      keywords: 'RouteYou, event, routes, completed',
    });
  });
});
