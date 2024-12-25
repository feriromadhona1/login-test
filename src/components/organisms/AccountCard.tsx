import React from 'react';
import UserDetails from '../molecules/UserDetails';
import Button from '../atoms/Button';

interface AccountCardProps {
  user: { name: string; avatar: string };
  onLogout: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ user, onLogout }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-80">
      <h2 className="text-xl font-bold mb-4 text-center">Account Details</h2>
      <UserDetails name={user.name} avatar={user.avatar} />
      <Button label="Logout" onClick={onLogout} />
    </div>
  );
};

export default AccountCard;
