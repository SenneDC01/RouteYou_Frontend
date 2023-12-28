import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InviteUsersFrame from './InviteUsersFrame';

test('InviteUsersFrame renders correctly and triggers onClose', () => {
  // Mock the onClose and onInvite functions
  const mockOnClose = jest.fn();
  const mockOnInvite = jest.fn();

  // Render the component
  render(<InviteUsersFrame onClose={mockOnClose} onInvite={mockOnInvite} />);

  // Check if the input element is rendered
  expect(screen.getByPlaceholderText('Search users')).toBeInTheDocument();

  // Check if the "Invite User" button is rendered
  const inviteButton = screen.getByText('Invite User');
  expect(inviteButton).toBeInTheDocument();

  // Trigger the onClick event for the "Invite User" button
  fireEvent.click(inviteButton);

  // Check if onClose is called
  expect(mockOnClose).toHaveBeenCalled();
});
