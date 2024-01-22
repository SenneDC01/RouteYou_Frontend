import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InviteUsersFrame from './InviteUsersFrame';

test('InviteUsersFrame renders correctly and triggers onClose', () => {
  const mockOnClose = jest.fn();
  const mockOnInvite = jest.fn();

  render(<InviteUsersFrame onClose={mockOnClose} onInvite={mockOnInvite} />);

  expect(screen.getByPlaceholderText('User email')).toBeInTheDocument();

  const closeButton = screen.getByText('Close');
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);

  expect(mockOnClose).toHaveBeenCalled();
});
