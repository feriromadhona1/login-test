// src/components/molecules/UserDetails.tsx
import React, { useState } from 'react';
import Button from '../atoms/Button';

interface UserDetailsProps {
  name: string;
  avatar: string;
  onLogout: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ name, avatar, onLogout }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleLogoutClick = () => {
    setIsPopupVisible(false);
    onLogout();
  };

  return (
    <div className="flex flex-col items-center space-y-4 relative">
      {/* Avatar Image */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={togglePopup}
        >
          •••
        </button>
      </div>

      {/* User Name */}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      {/* Popup Menu */}
      {isPopupVisible && (
        <div className="absolute top-8 right-4 bg-white border border-gray-300 rounded shadow-lg w-24">
          <button
            onClick={handleLogoutClick}
            className="block text-sm text-red-600 hover:bg-gray-100 px-4 py-2 w-full text-left"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
