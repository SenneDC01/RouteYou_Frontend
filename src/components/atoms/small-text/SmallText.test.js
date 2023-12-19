import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmallText from './SmallText';

describe('SmallText component', () => {
  it('Renders small text correctly', () => {
    render(<SmallText>Text</SmallText>);
    const title = screen.getByText('Text');
    expect(title).toBeInTheDocument();
  });
});
