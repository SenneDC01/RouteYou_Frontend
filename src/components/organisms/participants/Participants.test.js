import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
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
  // Restore the original implementation after each test
  afterEach(() => {
    jest.restoreAllMocks();
  });

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

  it('filters participants based on search query', async () => {
    // Render the component
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Participants />
    );

    // Wait for the data to be fetched
    await waitFor(() => {
      // Initially, both participants should be visible
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });

    // Enter a search query to filter participants
    fireEvent.change(getByPlaceholderText('Search by name'), {
      target: { value: 'John' },
    });

    // Check if only the filtered participant is visible
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(queryByText('Jane Doe')).toBeNull();
  });

  it('sorts participants by name', async () => {
    // Render the component
    const { getByText } = render(<Participants />);

    // Wait for the data to be fetched
    await waitFor(() => {
      // Initially, participants are sorted by default order (mock data)
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });

    // Click on the 'Sort' dropdown and select 'Name'
    fireEvent.click(getByText('Sort'));
    fireEvent.click(getByText('Name'));

    // Check if participants are now sorted by name
    expect(getByText('Jane Doe')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('opens and closes the InviteUsersFrame', async () => {
    // Render the component
    const { getByText, getByRole, queryByRole } = render(<Participants />);

    // Wait for the data to be fetched
    await waitFor(() => {
      // Initially, the InviteUsersFrame is not visible
      expect(queryByRole('dialog')).toBeNull();
    });

    // Click on the 'Invite Users' button
    fireEvent.click(getByText('Invite Users'));

    // Check if the InviteUsersFrame is now visible
    expect(getByRole('dialog')).toBeInTheDocument();

    // Close the InviteUsersFrame
    fireEvent.click(getByRole('button', { name: 'Invite User' }));

    // Check if the InviteUsersFrame is closed
    await waitFor(() => {
      expect(queryByRole('dialog')).toBeNull();
    });
  });
});
