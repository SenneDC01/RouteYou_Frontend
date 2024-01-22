import React from 'react';
import { render, screen } from '@testing-library/react';
import EditCreatePost from '@/components/molecules/edit-create-post/EditCreatePost';
import Posts from './Posts';
import Post from '@/components/molecules/post/Post';
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

test('renders EditCreatePost component', () => {
  render(<EditCreatePost />);
  const editCreatePostElement = screen.getByTestId('edit-create-post');
  expect(editCreatePostElement).toBeInTheDocument();
});

test('renders LoadingSpinner when posts are loading', () => {
  render(<Posts event={mockEvent} loading={true} />);
  const loadingSpinnerElement = screen.getByTestId('loading-spinner');
  expect(loadingSpinnerElement).toBeInTheDocument();
});

test('renders Post component', () => {
  render(<Post post={mockPosts.posts.data[0]} />);
  const postElement = screen.getByTestId('post');
  expect(postElement).toBeInTheDocument();
});
