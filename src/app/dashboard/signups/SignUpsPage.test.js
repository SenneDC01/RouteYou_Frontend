import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from './page';
import * as EventService from '@/services/EventService';

describe('Dashboard sing ups page component', () => {
  let mockEventsService;

  beforeEach(() => {
    mockEventsService = jest.spyOn(EventService, 'signedUpEvents');
    mockEventsService.mockResolvedValue([]);
  });

  afterEach(() => {
    mockEventsService.mockRestore();
  });

  it('Test page renders correctly', async () => {
    const data = { events: { data: [] } };
    render(<Page events={data} />);
    const title = screen.getAllByText('Sign Ups');
    expect(title.length).toBe(3);
    expect(
      screen.getByText('These are the events you have singed up for.')
    ).toBeInTheDocument();
  });

  it('Test page no events', async () => {
    const data = { events: { data: [] }, code: 200 };
    render(<Page events={data} />);

    expect(
      screen.getByText("You haven't signed up for any events.")
    ).toBeInTheDocument();
  });

  it('Test page bad status code', async () => {
    const data = { events: {}, code: 404 };
    render(<Page events={data} />);

    expect(
      screen.getByText('Something went wrong while getting your events')
    ).toBeInTheDocument();
  });
});
