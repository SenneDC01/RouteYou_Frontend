import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonRound from './ButtonRound';
import ArrowRightSVG from '@/utils/icons/ArrowRightSVG';

describe('Button component', () => {
  it('renders button with icon', () => {
    render(
      <ButtonRound
        href="/"
        ariaLabel="Ga naar event"
        icon={<ArrowRightSVG />}
      />
    );
    const buttonElement = screen.getByLabelText('Ga naar event');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders button with icon and default aria-label', () => {
    render(<ButtonRound href="/" icon={<ArrowRightSVG />} />);
    const buttonElement = screen.getByLabelText('forward-button');
    expect(buttonElement).toBeInTheDocument();
  });
});
