import React from 'react';
import '@testing-library/jest-dom';
import RouteSelect from './RouteSelect';
import EventService from '@/services/EventService';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-test-renderer';

describe('Search select component', () => {
  let mockPublic;
  let mockPrivate;

  beforeEach(() => {
    mockPublic = jest.spyOn(EventService, 'searchPublicEvents');
    mockPublic.mockImplementation(() => Promise.resolve());
    mockPrivate = jest.spyOn(EventService, 'searchPrivateEvents');
    mockPrivate.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    mockPublic.mockRestore();
    mockPrivate.mockRestore();
  });

  it('renders select correctly', async () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <RouteSelect
        value=""
        label="Test Label"
        name="testName"
        placeholder="Test Placeholder"
        onChange={onChange}
        errorMessage="Dit veld is verplicht"
      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'testName');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('value', '');
    expect(input).toHaveClass('inValid');
  });

  it('renders call function', async () => {
    const onSelect = jest.fn();
    const { getByPlaceholderText } = render(
      <RouteSelect
        value=""
        label="Test Label"
        name="testName"
        placeholder="Test Placeholder"
        onSelect={onSelect}
        errorMessage="Dit veld is verplicht"
      />
    );

    const input = getByPlaceholderText('Test Placeholder');

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } });
    });

    expect(onSelect).toHaveBeenCalled();
    expect(mockPublic).toHaveBeenCalled();
    expect(mockPrivate).toHaveBeenCalled();
  });
});
