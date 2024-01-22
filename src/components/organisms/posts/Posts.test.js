import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Posts from './Posts';
import '@testing-library/jest-dom';

const mockEvent = {
  id: 3,
};

const mockPosts = {
  message: 'Here are the posts of the event',
  posts: {
    current_page: 1,
    data: [
      {
        id: 2,
        title: 'It was a Success',
        message: 'Lorem ipsum',
        event_id: 3,
        created_at: '2024-01-21T23:25:49.000000Z',
        updated_at: '2024-01-21T23:25:49.000000Z',
        images: [
          {
            id: 6,
            event_id: null,
            post_id: 2,
            image_url:
              'https://storage.googleapis.com/picture-staging-laravel-bucket/images/events/3/rjxPYwZZHEPX1KpbQYpaAlzlPF9A0y5l78a50KaO.png',
          },
        ],
      },
    ],
  },
};

test('renders posts with images and details', () => {
  render(<Posts event={mockEvent} posts={mockPosts.posts} />);

  // Test 1: Check if post titles are rendered
  const postTitle = screen.queryByText('It was a Success');
  expect(postTitle).toBeInTheDocument();

  // Test 2: Check if post messages are rendered
  const postMessages = screen.queryByText('Lorem ipsum');
  expect(postMessages).not.toBeNull(); // Ensure postMessages is not null
  if (postMessages) {
    expect(postMessages.textContent).toContain('Lorem ipsum'); // Check text content
  }

  // Test 3: Check if post images are rendered
  const postImages = screen.getAllByAltText('');
  expect(postImages).toHaveLength(1); // 1 image in the example

  // Test 4: Check if "No posts available" is not rendered
  const noPostsMessage = screen.queryByText('No posts available');
  expect(noPostsMessage).toBeNull();
});
