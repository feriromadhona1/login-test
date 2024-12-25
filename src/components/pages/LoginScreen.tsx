import React, { useState } from 'react';
import LoginFormWrapper from '../organisms/LoginFormWrapper';
import { login } from '../../services/authService'; // Import from authServices.ts
import { useNavigate } from 'react-router-dom'; // For navigating to other pages

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // To handle errors
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async () => {
    setError(null); // Reset error before trying login

    // Check if both email and password are filled
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Call the login function from authService
      const { access_token, refresh_token } = await login(email, password);
      console.log('Login successful:', access_token);

      // Save the tokens in localStorage
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      // Redirect to Account screen


      navigate('/account');
    } catch (error: any) {
      setError(error.message || 'An error occurred during login'); // Set error if login fails
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {/* Display error message if there's any */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Login Form Wrapper */}
        <LoginFormWrapper
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
    </div>
  );
};

export default LoginScreen;
