// src/components/molecules/LoginForm.tsx
import React from 'react';
import FormField from './FormField';
import Button from '../atoms/Button';

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => void;
  error: string | null;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, password, setEmail, setPassword, handleLogin, error, loading }) => {
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
