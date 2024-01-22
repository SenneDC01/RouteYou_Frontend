import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getParticipants } from '@/services/EventService';
import Participants from './Participants';

jest.mock('@/services/EventService');

const mockParticipants = [
  { id: 1, full_name: 'John Doe', status: 'SIGNED_UP' },
  { id: 2, full_name: 'Jane Doe', status: 'CANCELED' },
];

getParticipants.mockResolvedValue({
  code: 200,
  participants: { data: mockParticipants },
});

describe('Participants Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders participants from API or mock data', async () => {
    const { getByText } = render(<Participants event={{ id: 1 }} />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  it('filters participants based on search query', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Participants event={{ id: 1 }} />
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
    const { getByText } = render(<Participants event={{ id: 1 }} />);

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('Jane Doe')).toBeInTheDocument();
    });

    fireEvent.click(getByText('Sort'));
    fireEvent.click(getByText('Date'));

    expect(getByText('Jane Doe')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  it('opens and closes the InviteUsersFrame', async () => {
    const { getByText, getByRole, queryByRole } = render(
      <Participants event={{ id: 1 }} />
    );

    await waitFor(() => {
      expect(queryByRole('dialog')).toBeNull();
    });

    fireEvent.click(getByText('Invite Users'));

    expect(getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(getByText('Cancel'));

    await waitFor(() => {
      expect(queryByRole('dialog')).toBeNull();
    });
  });
});
