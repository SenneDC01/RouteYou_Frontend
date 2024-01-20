import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import * as EventService from '@/services/EventService';
import { generateMetadata } from './layout';
import Page from './page';

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

describe('Dashboard my events page component', () => {
  let mockEventsService;

  beforeEach(() => {
    mockEventsService = jest.spyOn(EventService, 'createdEvents');
    mockEventsService.mockImplementation(() => Promise.resolve({ data: [] }));
  });

  afterEach(() => {
    mockEventsService.mockRestore();
  });

  it('renders without crashing', async () => {
    render(<Page />);

    await waitFor(() => expect(mockEventsService).toHaveBeenCalled());

    expect(screen.getByText('Create your first event')).toBeInTheDocument();
    expect(
      screen.getByText('Here you will be able to see the events you organize.')
    ).toBeInTheDocument();
  });

  it('generates correct metadata', async () => {
    const metadata = await generateMetadata();
    expect(metadata).toEqual({
      title: `My Events - RouteYou`,
      description: `My Events - My created events on RouteYou.`,
      keywords: 'RouteYou, event, routes, created',
    });
  });
});
