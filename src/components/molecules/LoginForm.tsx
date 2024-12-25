import React, { useState } from 'react';
import FormField from './FormField';
import Button from '../atoms/Button';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { access_token, refresh_token } = await login(email, password);
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      navigate('/account');
    } catch (error: any) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Login</h2>
            <FormField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <FormField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            <div className="flex justify-end mt-6">
                <Button
                type="button"
                onClick={handleLogin}
                label={loading ? 'Logging in...' : 'Login'}
                className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </div>
    </div>
  );
};

export default LoginForm;
