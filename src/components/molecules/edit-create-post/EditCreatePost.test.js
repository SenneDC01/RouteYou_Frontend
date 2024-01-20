import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import EditCreatePost from './EditCreatePost';
import { createEvent } from '@/services/EventService';
import '@testing-library/jest-dom';

jest.mock('@/services/EventService', () => ({
  createEvent: jest.fn(),
}));
describe('EditCreatePost component', () => {
  beforeEach(() => {
    render(<EditCreatePost />);
  });

  test('renders form fields', () => {
    const titleInput = screen.getByLabelText('Title');
    const descriptionInput = screen.getByLabelText('Description');
    const imageInput = screen.getByLabelText('Event Image');
    const addButton = screen.getByText('Add post');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('handles form submission with valid data', async () => {
    createEvent.mockResolvedValue({ code: 201 });

    const titleInput = screen.getByLabelText('Title');
    const descriptionInput = screen.getByLabelText('Description');
    const imageInput = screen.getByLabelText('Event Image');
    const addButton = screen.getByText('Add post');

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(descriptionInput, {
      target: { value: 'Test Description' },
    });
    const file = new File(['test image'], 'test.jpg', { type: 'image/jpeg' });
    fireEvent.change(imageInput, { target: { files: [file] } });

    await act(async () => {
      fireEvent.click(addButton);
    });

    const form = document.querySelector('form');
    expect(form).toHaveAttribute('data-submitted', 'true');
    expect(createEvent).toHaveBeenCalled();
  });

  test('handles form submission with invalid data', async () => {
    createEvent.mockResolvedValue({
      code: 422,
      errors: {
        name: ['Please enter a title'],
        description: ['Please enter a description'],
      },
    });

    const addButton = screen.getByText('Add post');

    fireEvent.click(addButton);

    expect(await screen.findByText('Please enter a title')).toBeInTheDocument();
    expect(
      await screen.findByText('Please enter a description')
    ).toBeInTheDocument();

    expect(screen.queryByText('Post added')).not.toBeInTheDocument();
  });
});
