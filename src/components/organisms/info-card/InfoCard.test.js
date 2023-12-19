import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from './InfoCard';

describe('InfoCard', () => {
  test('renders InfoCard component', () => {
    render(<InfoCard />);
    expect(screen.getByTestId('infocard')).toBeInTheDocument();
  });

  test('renders icon when passed in', () => {
    const Icon = () => <svg />;
    render(<InfoCard icon={<Icon />} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  test('does not render icon when not passed in', () => {
    render(<InfoCard />);
    expect(screen.queryByRole('svg')).toBeNull();
  });

  test('renders text when passed in', () => {
    const text = 'Test text';
    render(<InfoCard text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('renders default text when not passed in', () => {
    render(<InfoCard />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });
});
