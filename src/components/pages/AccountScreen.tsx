// src/components/organisms/AccountScreen.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../services/authService'; 
import UserDetails from '../molecules/UserDetails';
import Button from '../atoms/Button'; 

const AccountScreen: React.FC = () => {
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('access_token'); 
    if (!token) {
      navigate('/'); 
      return;
    }

    const fetchUserData = async () => {
      try {
        const userData = await getUserDetails(token); 
        setUser(userData); 
      } catch (error: any) {
        setError('Failed to fetch user details.');
        navigate('/'); 
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('access_token'); 
    localStorage.removeItem('refresh_token'); 
    navigate('/'); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <UserDetails 
          name={user?.name || ''} 
          avatar={user?.avatar || ''} 
          onLogout={handleLogout} 
        />
      </div>
    </div>
  );
};

export default AccountScreen;
