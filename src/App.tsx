import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './components/pages/LoginScreen';
import AccountScreen from './components/pages/AccountScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/account" element={<AccountScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
