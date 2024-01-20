import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import BadgeCard from './BadgeCard';

describe('BadgeCard Component', () => {
  const event = {
    id: 1,
    name: 'City Light Run Aalst',
    description: 'Loop langs de mooiste parels van Aalst',
    start_date: '2024-01-15 21:00:00',
    image_url:
      'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/1/citylightrunaalst.jpg',
    author: 'Senna Uyttersprot',
    interested: false,
    badge: null,
  };

  it('renders with default props', () => {
    render(<BadgeCard event={event} />);

    expect(screen.getByText('City Light Run Aalst')).toBeInTheDocument();
  });
});
