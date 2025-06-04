// client/src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/auth';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
      </nav>
    </header>
  );
};

export default Header;