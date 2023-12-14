import "@testing-library/jest-dom";
import { render, fireEvent, screen } from '@testing-library/react';
import Header from "./Header.jsx";
import profilePicture from "@/utils/images/profilePicture.png";

describe('Header', () => {
    test('renders Header component', () => {
        render(<Header />);
        expect(screen.getByAltText('RouteYou')).toBeInTheDocument();
    });

    test('renders default profile name when no profileName prop is provided', () => {
        render(<Header profilePicture={profilePicture} />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    test('renders provided profile name when profileName prop is provided', () => {
        render(<Header profileName="Jane Doe" />);
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });

    test('renders dropdown items correctly', () => {
        render(<Header />);
        fireEvent.click(screen.getByText('Events'));
        expect(screen.getByText('Create Event')).toBeInTheDocument();
        expect(screen.getByText('Search Event')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Routes'));
        expect(screen.getByText('Go to RouteYou Routes')).toBeInTheDocument();
        fireEvent.click(screen.getByText('John Doe'));
        expect(screen.getByTestId('dashboard')).toBeInTheDocument();
        expect(screen.getByText('Logout')).toBeInTheDocument();
    });
});