import React from 'react';
import { render } from '@testing-library/react';
import BadgeCard from './BadgeCard';
import '@testing-library/jest-dom';

describe('BadgeCard Component', () => {
  const defaultProps = {
    image: {
      src: 'test-image-src',
      alt: 'test-image-alt',
    },
    title: 'Test Title',
    organisator: 'Test Organisator',
    dateTime: 'Test Date Time',
  };

  it('renders with default props', () => {
    const { getByAltText, getByText } = render(<BadgeCard {...defaultProps} />);

    expect(getByAltText(defaultProps.title)).toBeInTheDocument();
    expect(getByText(defaultProps.title)).toBeInTheDocument();
  });
});
