import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders loading message when isLoading is true', () => {
    render(<LoadingSpinner isLoading={true} message="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('does not render when isLoading is false', () => {
    const { container } = render(
      <LoadingSpinner isLoading={false} message="Not Loading..." />
    );
    expect(container.firstChild).toBeNull();
  });
});
