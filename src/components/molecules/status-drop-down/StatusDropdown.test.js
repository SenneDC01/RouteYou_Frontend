import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StatusDropdown from './StatusDropdown';
import { SetAttendee } from '@/services/EventService';
import '@testing-library/jest-dom';

jest.mock('@/services/EventService', () => ({
  SetAttendee: jest.fn(),
}));

describe('StatusDropdown component', () => {
  test('renders dropdown and handles item click', async () => {
    const participantId = '123';
    const eventId = '456';
    const status = 'INTERESTED';

    render(
      <StatusDropdown
        status={status}
        participantId={participantId}
        eventId={eventId}
      />
    );

    const dropdownTrigger = screen.getByRole('button');
    expect(dropdownTrigger).toBeInTheDocument();

    fireEvent.click(dropdownTrigger);

    const dropdownMenu = screen.getByRole('menu');
    expect(dropdownMenu).toBeInTheDocument();

    const interestedOptions = screen.queryAllByText('Interested');
    expect(interestedOptions.length).toBeGreaterThan(0);

    const presentOption = screen.getByText('Present');
    fireEvent.click(presentOption);

    expect(SetAttendee).toHaveBeenCalledWith(eventId, participantId);

    const selectedStatus = screen.getByText('Present');
    expect(selectedStatus).toBeInTheDocument();
  });
});
