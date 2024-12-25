import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/pages/LoginScreen';
import AccountScreen from './components/pages/AccountScreen';

const App: React.FC = () => {
  const isProduction = window.location.hostname !== 'localhost'; // Checks if it's in production
  const basename = isProduction ? '/login-test' : '/'; // Use '/' in development, '/login-test' in production

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/account" element={<AccountScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
