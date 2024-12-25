// AccountCard.tsx
import React from 'react';
import UserDetails from '../molecules/UserDetails';

interface AccountCardProps {
  user: { name: string; avatar: string };
  handleLogout: () => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ user, handleLogout }) => {
  return (
    <div className="account-card">
      <UserDetails 
        name={user.name} 
        avatar={user.avatar} 
        onLogout={handleLogout} 
      />
    </div>
  );
};

export default AccountCard;
