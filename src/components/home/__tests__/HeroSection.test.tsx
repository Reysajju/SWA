import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  const renderWithRouter = () => {
    return render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );
  };

  it('renders the main heading', () => {
    renderWithRouter();
    expect(screen.getByText('Transform Your Brand with Mobile Advertising')).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    renderWithRouter();
    expect(screen.getByText(/Get your message moving through every street of Karachi/)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    renderWithRouter();
    expect(screen.getByTestId('start-advertising-btn')).toHaveTextContent('Start Advertising');
    expect(screen.getByTestId('explore-services-btn')).toHaveTextContent('Explore Services');
  });

  it('renders all feature cards', () => {
    renderWithRouter();
    expect(screen.getByTestId('feature-coverage')).toBeInTheDocument();
    expect(screen.getByTestId('feature-targeting')).toBeInTheDocument();
    expect(screen.getByTestId('feature-duration')).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    renderWithRouter();
    expect(screen.getByTestId('start-advertising-btn')).toHaveAttribute('href', '/register');
    expect(screen.getByTestId('explore-services-btn')).toHaveAttribute('href', '/services');
  });
});