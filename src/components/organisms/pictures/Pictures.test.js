import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pictures from './Pictures';
import { getPictures, postPictures } from '@/services/EventService';

jest.mock('@/services/EventService');

test('renders pictures when fetched successfully', async () => {
  const mockEvent = {
    id: 1,
  };

  const mockImages = {
    code: 200,
    images: {
      data: [
        { image_url: 'image1.jpg' },
        { image_url: 'image2.jpg' },
      ],
    },
  };

  getPictures.mockResolvedValue(mockImages);

  render(<Pictures event={mockEvent} />);

  await waitFor(() => {
    expect(screen.getByTestId('image-0')).toBeInTheDocument();
    expect(screen.getByTestId('image-1')).toBeInTheDocument();
  });
});

test('handles form submission', async () => {
  const mockEvent = {
    id: 1,
  };

  getPictures.mockResolvedValue({ code: 200, images: { data: [] } });

  postPictures.mockResolvedValue({ code: 201 });

  render(<Pictures event={mockEvent} />);

  const file = new File(['dummy content'], 'test-image.jpg', { type: 'image/jpeg' });

  const fileInput = screen.getByTestId('event_image');

  if (fileInput) {
    Object.defineProperty(fileInput, 'files', {
      value: [file],
    });
  } else {
    throw new Error('File input not found');
  }

  const uploadButton = screen.getByText('Upload pictures');
  fireEvent.click(uploadButton);

  const form = document.querySelector('form');
  expect(form).toHaveAttribute('data-submitted', 'true');

  expect(postPictures).toHaveBeenCalledWith(mockEvent.id, expect.any(FormData));

  await waitFor(() => {
    expect(getPictures).toHaveBeenCalledWith(mockEvent.id);
  });
});
