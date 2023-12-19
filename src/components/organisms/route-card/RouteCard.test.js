import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RouteCard from './RouteCard';

describe('RouteCard', () => {
  const mockRoute = {
    title: 'Test Route',
    image: 'test-image.jpg',
    afstand: '10km',
    hoogte: '100m',
    gemStijgingsPercentage: '5%',
    tijd: '30min',
    maxStijgingsPercentage: '10%',
    moeilijkheid: 'Easy',
  };

  beforeEach(() => {
    render(<RouteCard route={mockRoute} />);
  });

  test('renders the image', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockRoute.image);
    expect(image).toHaveAttribute('alt', mockRoute.title);
  });

  test('renders the title', () => {
    const title = screen.getByText(mockRoute.title);
    expect(title).toBeInTheDocument();
  });

  test('renders the route details', () => {
    const afstand = screen.getByText(mockRoute.afstand);
    const hoogte = screen.getByText(mockRoute.hoogte);
    const gemStijgingsPercentage = screen.getByText(
      mockRoute.gemStijgingsPercentage
    );
    const tijd = screen.getByText(mockRoute.tijd);
    const maxStijgingsPercentage = screen.getByText(
      mockRoute.maxStijgingsPercentage
    );
    const moeilijkheid = screen.getByText(mockRoute.moeilijkheid);

    expect(afstand).toBeInTheDocument();
    expect(hoogte).toBeInTheDocument();
    expect(gemStijgingsPercentage).toBeInTheDocument();
    expect(tijd).toBeInTheDocument();
    expect(maxStijgingsPercentage).toBeInTheDocument();
    expect(moeilijkheid).toBeInTheDocument();
  });
});
