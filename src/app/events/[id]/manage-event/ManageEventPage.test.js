import React from 'react';
import { render } from '@testing-library/react';
import ManageEventPage from './page';
import '@testing-library/jest-dom';

describe('ManageEventPage', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ManageEventPage />);

    expect(getByText('Column 1')).toBeInTheDocument();

    expect(getByText('Participants')).toBeInTheDocument();
  });
});
