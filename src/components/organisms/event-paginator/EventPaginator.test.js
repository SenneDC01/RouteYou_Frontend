import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EventPaginator from './EventPaginator';
import '@testing-library/jest-dom';

describe('EventPaginator', () => {
  const mockNextPage = jest.fn();
  const mockPrevPage = jest.fn();

  it('renders without crashing', () => {
    render(
      <EventPaginator
        links={{ current: 1, last: 5 }}
        nextPage={mockNextPage}
        prevPage={mockPrevPage}
      />
    );
    expect(screen.getByText('Page 1 of 5')).toBeInTheDocument();
  });

  it('calls nextPage when Next button is clicked', () => {
    render(
      <EventPaginator
        links={{ current: 1, last: 5 }}
        nextPage={mockNextPage}
        prevPage={mockPrevPage}
      />
    );
    fireEvent.click(screen.getByText('Next'));
    expect(mockNextPage).toHaveBeenCalled();
  });

  it('calls prevPage when Previous button is clicked', () => {
    render(
      <EventPaginator
        links={{ current: 2, last: 5 }}
        nextPage={mockNextPage}
        prevPage={mockPrevPage}
      />
    );
    fireEvent.click(screen.getByText('Previous'));
    expect(mockPrevPage).toHaveBeenCalled();
  });

  it('disables Next button on the last page', () => {
    render(
      <EventPaginator
        links={{ current: 5, last: 5 }}
        nextPage={mockNextPage}
        prevPage={mockPrevPage}
      />
    );
    expect(screen.getByText('Next')).toBeDisabled();
  });

  it('disables Previous button on the first page', () => {
    render(
      <EventPaginator
        links={{ current: 1, last: 5 }}
        nextPage={mockNextPage}
        prevPage={mockPrevPage}
      />
    );
    expect(screen.getByText('Previous')).toBeDisabled();
  });
});
