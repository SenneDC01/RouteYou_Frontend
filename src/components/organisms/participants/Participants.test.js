// participants.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getParticipants } from '@/services/EventService';
import Participants from './Participants';

// Mock the getParticipants function
jest.mock('@/services/EventService');

const mockParticipants = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  // Add more mock participants as needed
];

// Provide a mock implementation for getParticipants
getParticipants.mockResolvedValue(mockParticipants);

describe('Participants Component', () => {
  it('renders participants from API or mock data', async () => {
    // Render the component
    const { getByText } = render(<Participants />);

    // Wait for the data to be fetched
    await waitFor(() => {
      // Check if the participants are rendered
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  it('handles failure to fetch participants', async () => {
    // Mock the getParticipants function to simulate an error
    getParticipants.mockRejectedValueOnce(
      new Error('Failed to fetch participants')
    );

    // Render the component
    const { getByText } = render(<Participants />);

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(getByText('Failed to fetch participants.')).toBeInTheDocument();
    });
  });
});
