import React from 'react';
import { render, screen } from '@testing-library/react';
import Posts from './Posts';
import '@testing-library/jest-dom';

const mockPosts = {
  message: 'Here are the images of the event',
  posts: [
    {
      current_page: 1,
      data: {
        id: 1,
        event_id: 1,
        title: 'Ontdek Aalst',
        message: 'Wil je Aalst en haar gebouwen eens vanbinnen zien?',
        created_at: '2024-04-22 21:00:00',
        updated_at: '2024-04-22 21:00:00',
        images: [
          {
            id: 1,
            event_id: 1,
            post_id: 1,
            image_url: 'image1.jpg',
          },
          {
            id: 2,
            event_id: 1,
            post_id: 1,
            image_url: 'image2.jpg',
          },
          {
            id: 3,
            event_id: 1,
            post_id: 1,
            image_url: 'image3.jpg',
          },
        ],
      },
      first_page_url: 'http://localhost:8080/api/events/created?page=1',
      from: 1,
      last_page: 1,
      last_page_url: 'http://localhost:8080/api/events/created?page=1',
      links: [
        {
          '': {
            url: 'http://localhost:8080/api/events/created?page=1',
            label: '1',
            active: true,
          },
        },
      ],
      next_page_url: 'http://localhost:8080/api/events/created?page=1',
      path: 'http://localhost:8080/api/events/created',
      per_page: 10,
      prev_page_url: 'http://localhost:8080/api/events/created?page=1',
      to: 1,
      total: 1,
    },
  ],
};

test('renders posts with images and details', () => {
  render(<Posts posts={mockPosts.posts} />);

  const postTitles = screen.getAllByText('Ontdek Aalst');

  expect(postTitles.length).toBeGreaterThan(0);
});
