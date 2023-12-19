import { render, screen } from '@testing-library/react';
import EventCard from './EventCard';
import '@testing-library/jest-dom';
import bannerImage from '@/utils/images/banner.jpg';

describe('EventCard', () => {
  const mockEvent = {
    id: 1,
    name: 'City Light Run Aalst',
    description: 'Loop langs de mooiste parels van Aalst',
    start_date: '2024-04-22 21:00:00',
    max_participants: 1000,
    price: '5.00',
    visibility: 'PUBLIC',
    image_url: bannerImage,
    author: 'Senna Uyttersprot',
    routes: [
      {
        route_data: {
          id: 6833170,
          duration: '1.2km',
          startAddress: 'Aalst, Oost-Vlaanderen, Vlaanderen',
          type: 'Looproute',
          difficulty: 0.3,
        },
      },
    ],
  };

  const longDescriptionEvent = { ...mockEvent, description: 'a'.repeat(200) };

  const mockEventWithNoRoutes = { ...mockEvent, routes: null };

  it('renders the event card with short description', () => {
    render(<EventCard event={mockEvent} />);
    expect(screen.getByText(mockEvent.name)).toBeInTheDocument();
  });

  it('renders the event card with long description', () => {
    render(<EventCard event={longDescriptionEvent} />);
    expect(screen.getByText(mockEvent.name)).toBeInTheDocument();
  });

  it('renders the event card without routes', () => {
    render(<EventCard event={mockEventWithNoRoutes} />);
    expect(screen.getByText(mockEvent.name)).toBeInTheDocument();
  });
});
