import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('button is clickable', () => {
    const handleClick = vi.fn(); // Vitest mock function
    render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
