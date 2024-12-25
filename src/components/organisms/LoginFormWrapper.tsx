// src/components/organisms/LoginFormWrapper.tsx
import React from 'react';
import LoginForm from '../molecules/LoginForm';

interface LoginFormWrapperProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => void;
  error: string | null;
  loading: boolean;
}

const LoginFormWrapper: React.FC<LoginFormWrapperProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  error,
  loading,
}) => {
  return (
    <div className="max-w-sm mx-auto mt-10">
      <LoginForm 
        email={email} 
        password={password} 
        setEmail={setEmail} 
        setPassword={setPassword} 
        handleLogin={handleLogin}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default LoginFormWrapper;
