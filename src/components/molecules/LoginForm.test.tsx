import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom/extend-expect';  // Untuk tambahan matcher seperti toBeInTheDocument
import { vi } from 'vitest';

describe('LoginForm', () => {
  it('renders the form with email and password fields', () => {
    const mockSetEmail = vi.fn();
    const mockSetPassword = vi.fn();
    const mockHandleLogin = vi.fn();

    render(
      <LoginForm
        email=""
        password=""
        setEmail={mockSetEmail}
        setPassword={mockSetPassword}
        handleLogin={mockHandleLogin}
        error={null}
        loading={false}
      />
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('calls handleLogin on button click', () => {
    const mockSetEmail = vi.fn();
    const mockSetPassword = vi.fn();
    const mockHandleLogin = vi.fn();

    render(
      <LoginForm
        email="test@example.com"
        password="password123"
        setEmail={mockSetEmail}
        setPassword={mockSetPassword}
        handleLogin={mockHandleLogin}
        error={null}
        loading={false}
      />
    );

    // Simulasikan klik tombol login
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // Pastikan handleLogin dipanggil
    expect(mockHandleLogin).toHaveBeenCalled();
  });

  it('displays an error message when error is provided', () => {
    const mockSetEmail = vi.fn();
    const mockSetPassword = vi.fn();
    const mockHandleLogin = vi.fn();

    render(
      <LoginForm
        email="test@example.com"
        password="password123"
        setEmail={mockSetEmail}
        setPassword={mockSetPassword}
        handleLogin={mockHandleLogin}
        error="Invalid credentials"
        loading={false}
      />
    );

    // Pastikan pesan error muncul
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  it('shows loading state when loading is true', () => {
    const mockSetEmail = vi.fn();
    const mockSetPassword = vi.fn();
    const mockHandleLogin = vi.fn();

    render(
      <LoginForm
        email="test@example.com"
        password="password123"
        setEmail={mockSetEmail}
        setPassword={mockSetPassword}
        handleLogin={mockHandleLogin}
        error={null}
        loading={true}
      />
    );

    // Pastikan label tombol berubah menjadi 'Logging in...'
    expect(screen.getByRole('button', { name: /logging in.../i })).toBeInTheDocument();
  });

  it('updates email value when typed into the input', () => {
    const mockSetEmail = vi.fn();
    const mockSetPassword = vi.fn();
    const mockHandleLogin = vi.fn();

    render(
      <LoginForm
        email=""
        password=""
        setEmail={mockSetEmail}
        setPassword={mockSetPassword}
        handleLogin={mockHandleLogin}
        error={null}
        loading={false}
      />
    );

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'newemail@example.com' } });

    // Pastikan mockSetEmail dipanggil dengan nilai baru
    expect(mockSetEmail).toHaveBeenCalledWith('newemail@example.com');
  });

  it('updates password value when typed into the input', () => {
    const mockSetEmail = vi.fn();
    const mockSetPassword = vi.fn();
    const mockHandleLogin = vi.fn();

    render(
      <LoginForm
        email=""
        password=""
        setEmail={mockSetEmail}
        setPassword={mockSetPassword}
        handleLogin={mockHandleLogin}
        error={null}
        loading={false}
      />
    );

    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'newpassword123' } });

    expect(mockSetPassword).toHaveBeenCalledWith('newpassword123');
  });
});
