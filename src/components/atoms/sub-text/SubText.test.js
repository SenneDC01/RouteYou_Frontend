import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubText from './SubText';

describe('SubText component', () => {
  it('Renders sub text correctly', () => {
    render(<SubText>Text</SubText>);
    const title = screen.getByText('Text');
    expect(title).toBeInTheDocument();
  });
});
