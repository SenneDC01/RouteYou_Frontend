import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getParticipants } from '@/services/EventService';
import Participants from './Participants';

jest.mock('@/services/EventService');

const mockParticipants = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

getParticipants.mockResolvedValue(mockParticipants);

describe('Participants Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders participants from API or mock data', async () => {
    const { getByText } = render(<Participants />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  it('filters participants based on search query', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Participants />
    );

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });

    fireEvent.change(getByPlaceholderText('Search by name'), {
      target: { value: 'John' },
    });

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(queryByText('Jane Doe')).toBeNull();
  });

  it('sorts participants by name', async () => {
    const { getByText } = render(<Participants />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });

    fireEvent.click(getByText('Sort'));
    fireEvent.click(getByText('Name'));

    expect(getByText('Jane Doe')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('opens and closes the InviteUsersFrame', async () => {
    const { getByText, getByRole, queryByRole } = render(<Participants />);

    await waitFor(() => {
      expect(queryByRole('dialog')).toBeNull();
    });

    fireEvent.click(getByText('Invite Users'));

    expect(getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(getByRole('button', { name: 'Invite User' }));

    await waitFor(() => {
      expect(queryByRole('dialog')).toBeNull();
    });
  });
});