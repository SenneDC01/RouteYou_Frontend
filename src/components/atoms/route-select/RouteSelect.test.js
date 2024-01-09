import React from 'react';
import * as RouteService from '@/services/RouteService';
import { render, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import RouteSelect from './RouteSelect';
import '@testing-library/jest-dom';

describe('Search select component', () => {
  let mockPublic;
  let mockPrivate;

  beforeEach(() => {
    mockPublic = jest.spyOn(RouteService, 'searchPublicRoute');
    mockPublic.mockImplementation(() => Promise.resolve());
    mockPrivate = jest.spyOn(RouteService, 'searchPrivateRoute');
    mockPrivate.mockImplementation(() => Promise.resolve());
  });

  afterEach(() => {
    mockPublic.mockRestore();
    mockPrivate.mockRestore();
  });

  it('renders select correctly', async () => {
    const onChange = jest.fn();

    render(
      <RouteSelect
        label="Test Label"
        name="testName"
        placeholder="Test Placeholder"
        onChange={onChange}
        errorMessage="Dit veld is verplicht"
      />
    );

    const input = screen.getByLabelText('Test Label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'testName');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('value', '');
  });

  it('calls function', async () => {
    const onChange = jest.fn();
    render(
      <RouteSelect
        label="Test Label"
        name="testName"
        placeholder="Test Placeholder"
        onChange={onChange}
        errorMessage="Dit veld is verplicht"
      />
    );

    const input = screen.getByLabelText('Test Label');

    await act(async () => {
      fireEvent.change(input, { target: { value: 't' } });
    });

    expect(mockPublic).toHaveBeenCalled();
    expect(mockPrivate).toHaveBeenCalled();
  });
});
