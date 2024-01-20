import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavButton from '@/components/atoms/fav-button/FavButton';
import * as EventService from '@/services/EventService';

describe('FavButton', () => {
  let mockEventsService;

  beforeEach(() => {
    mockEventsService = jest.spyOn(EventService, 'markAsInterested');
    mockEventsService.mockImplementation(() => Promise.resolve({ code: 200 }));
  });

  afterEach(() => {
    mockEventsService.mockRestore();
  });

  it('toggles favorite status on click', async () => {
    const { getByRole } = render(
      <FavButton event={{ id: 1, relation: null }} />
    );

    fireEvent.click(getByRole('button'));
    await waitFor(() => expect(mockEventsService).toHaveBeenCalled());
    expect(getByRole('button')).toBeTruthy();
    expect(getByRole('button').firstChild).toHaveAttribute('fill', '#1a614a');
  });
});
