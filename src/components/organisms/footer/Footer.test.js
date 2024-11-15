import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the footer', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it('renders the logo', () => {
    const logoElement = screen.getByAltText('RouteYou');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders the links', () => {
    const homeLink = screen.getByText('Home');
    const searchEventsLink = screen.getByText('Search Events');
    const createEventLink = screen.getByText('Create Event');
    const dashboardLink = screen.getByText('Dashboard');
    const accessibilityStatementLink = screen.getByText(
      'Accessibility Statement'
    );
    const privacyStatementLink = screen.getByText('Privacy declaration');
    expect(homeLink).toBeInTheDocument();
    expect(searchEventsLink).toBeInTheDocument();
    expect(createEventLink).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
    expect(accessibilityStatementLink).toBeInTheDocument();
    expect(privacyStatementLink).toBeInTheDocument();
  });

  it('renders the address', () => {
    const addressElement = screen.getByText('Kerkstraat 108');
    const cityElement = screen.getByText('9050 Gentbrugge, België');

    expect(addressElement).toBeInTheDocument();
    expect(cityElement).toBeInTheDocument();
  });
});
