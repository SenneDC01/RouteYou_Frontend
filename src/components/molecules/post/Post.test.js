import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Post from './Post';
import '@testing-library/jest-dom';

const mockPost = {
  title: 'Event Title',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  images: [
    {
      id: 1,
      image_url: 'image1.jpg',
    },
    {
      id: 2,
      image_url: 'image2.jpg',
    },
  ],
};

test('renders post title and message', () => {
  render(<Post post={mockPost} />);
  expect(screen.getByText('Event Title')).toBeInTheDocument();
  expect(
    screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
  ).toBeInTheDocument();
});

test('renders images in pairs', () => {
  render(<Post post={mockPost} />);
  const images = screen.getAllByAltText('');
  expect(images).toHaveLength(2);
  expect(images[0]).toHaveAttribute('src', 'image1.jpg');
  expect(images[1]).toHaveAttribute('src', 'image2.jpg');
});

test('renders edit link', () => {
  render(<Post post={mockPost} />);
  const editLink = screen.getByText('edit');
  expect(editLink).toBeInTheDocument();
  expect(editLink).toHaveAttribute('href', '/events/1/manage-event/edit');
});

test('clicking edit link triggers the edit action', () => {
  render(<Post post={mockPost} />);
  const editLink = screen.getByText('edit');
  userEvent.click(editLink);
});
