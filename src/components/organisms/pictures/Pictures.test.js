import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pictures from './Pictures';

test('renders images and form', () => {
  render(<Pictures />);

  const images = screen.getAllByAltText('');
  expect(images.length).toBe(7);

  const uploadButton = screen.getByText('Upload pictures');
  expect(uploadButton).toBeInTheDocument();
});

test('handles form submission', async () => {
  render(<Pictures />);

  const uploadButton = screen.getByText('Upload pictures');
  fireEvent.click(uploadButton);

  const form = document.querySelector('form');
  expect(form).toHaveAttribute('data-submitted', 'true');
});
