// src/components/organisms/LoginFormWrapper.tsx
import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginFormWrapper: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto mt-10">
      <LoginForm />
    </div>
  );
};

export default LoginFormWrapper;
