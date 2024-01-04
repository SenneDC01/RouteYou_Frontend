import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediumTitle from './MediumTitle';

describe('BigTitle component', () => {
  it('Renders Big Title correctly', () => {
    render(<MediumTitle>Text</MediumTitle>);
    const title = screen.getByText('Text');
    expect(title).toBeInTheDocument();
  });
});
