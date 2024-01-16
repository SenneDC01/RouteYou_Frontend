import { render } from '@testing-library/react';
import * as EventService from '@/services/EventService';
import Layout from './layout';

describe('Dashboard sing ups layout component', () => {
  let mockEventsService;

  beforeEach(() => {
    mockEventsService = jest.spyOn(EventService, 'signedUpEvents');
    mockEventsService.mockResolvedValue([]);
  });

  afterEach(() => {
    mockEventsService.mockRestore();
  });

  it('Test fetch in layout', async () => {
    render(await Layout());

    expect(mockEventsService).toHaveBeenCalled();
  });
});
