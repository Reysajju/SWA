import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQItem from '../FAQItem';

describe('FAQItem', () => {
  const mockProps = {
    question: 'Test Question',
    answer: 'Test Answer'
  };

  it('renders question and answer', () => {
    render(<FAQItem {...mockProps} />);
    expect(screen.getByText(mockProps.question)).toBeInTheDocument();
    expect(screen.getByText(mockProps.answer)).toBeInTheDocument();
  });

  it('toggles open state on mouse enter/leave', () => {
    render(<FAQItem {...mockProps} />);
    const faqItem = screen.getByText(mockProps.question).closest('div');
    
    fireEvent.mouseEnter(faqItem!);
    expect(screen.getByText(mockProps.answer)).toBeVisible();
    
    fireEvent.mouseLeave(faqItem!);
    expect(screen.getByText(mockProps.answer)).not.toBeVisible();
  });

  it('toggles open state on click', () => {
    render(<FAQItem {...mockProps} />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(screen.getByText(mockProps.answer)).toBeVisible();
    
    fireEvent.click(button);
    expect(screen.getByText(mockProps.answer)).not.toBeVisible();
  });
});