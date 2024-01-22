import { render, fireEvent } from '@testing-library/react';
import Page from './page';
import * as EventService from '@/services/EventService';
import { act } from 'react-test-renderer';

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe('Create Events Page component', () => {
  let mockCreate;

  beforeEach(() => {
    mockCreate = jest.spyOn(EventService, 'createEvent');
    mockCreate.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    mockCreate.mockRestore();
  });

  test('Create with incorrect information.', async () => {
    const { getByLabelText, getByRole } = render(<Page />);
    const title = 'ding';
    const description = 'ander ding';
    const visibility = 'none';
    const startDate = 'not a date';
    const endDate = 'not a date';
    const maxParticipants = '0';
    const price = 'tien';

    await act(async () => {
      fireEvent.change(getByLabelText('Title'), {
        target: { value: title },
      });
      fireEvent.change(getByLabelText('Description'), {
        target: { value: description },
      });
      fireEvent.change(getByLabelText('Visibility'), {
        target: { value: visibility },
      });
      fireEvent.change(getByLabelText('Start Date'), {
        target: { value: startDate },
      });
      fireEvent.change(getByLabelText('End Date'), {
        target: { value: endDate },
      });
      fireEvent.change(getByLabelText('Max Participants'), {
        target: { value: maxParticipants },
      });
      fireEvent.change(getByLabelText('Price'), {
        target: { value: price },
      });

      fireEvent.click(getByRole('button', { name: 'Create Event' }));
    });

    expect(mockCreate).not.toHaveBeenCalled();
  });

  test('Create with no information', async () => {
    const { getByLabelText, getByRole } = render(<Page />);
    const title = '';
    const description = '';
    const visibility = '';
    const startDate = '';
    const endDate = '';
    const maxParticipants = '';
    const price = '';

    await act(async () => {
      fireEvent.change(getByLabelText('Title'), {
        target: { value: title },
      });
      fireEvent.change(getByLabelText('Description'), {
        target: { value: description },
      });
      fireEvent.change(getByLabelText('Visibility'), {
        target: { value: visibility },
      });
      fireEvent.change(getByLabelText('Start Date'), {
        target: { value: startDate },
      });
      fireEvent.change(getByLabelText('End Date'), {
        target: { value: endDate },
      });
      fireEvent.change(getByLabelText('Max Participants'), {
        target: { value: maxParticipants },
      });
      fireEvent.change(getByLabelText('Price'), {
        target: { value: price },
      });

      fireEvent.click(getByRole('button', { name: 'Create Event' }));
    });

    expect(mockCreate).not.toHaveBeenCalled();
  });
  /* eslint-disable  */
  /*test('Create with correct information', async () => {
    const { getByLabelText, getByRole } = render(<Page />);

    const title = 'Title';
    const description = 'Description';
    const routes = 1;
    const visibility = 'private';
    const startDate = '1/1/2025 12:00';
    const endDate = '1/1/2025 18:00';
    const maxParticipants = 45;
    const price = 5;

    await act(async () => {
      fireEvent.change(getByLabelText('Title'), {
        target: { value: title },
      });
      fireEvent.change(getByLabelText('Description'), {
        target: { value: description },
      });
      fireEvent.change(getByRole('input', { hidden: true }), {
        target: { value: routes },
      });
      fireEvent.change(getByLabelText('Visibility'), {
        target: { value: visibility },
      });
      fireEvent.change(getByLabelText('Start Date'), {
        target: { value: startDate },
      });
      fireEvent.change(getByLabelText('End Date'), {
        target: { value: endDate },
      });
      fireEvent.change(getByLabelText('Max Participants'), {
        target: { value: maxParticipants },
      });
      fireEvent.change(getByLabelText('Price'), {
        target: { value: price },
      });

      fireEvent.click(getByRole('button', { name: 'Create Event' }));
    });

    expect(mockCreate).toHaveBeenCalled();
    expect(mockCreate).toHaveBeenCalledWith({
      title: title,
      description: description,
      routes: routes,
      visibility: visibility,
      startDate: startDate,
      endDate: endDate,
      maxParticipants: maxParticipants,
      price: price,
    });
  });*/
  //eslint-enable
});
