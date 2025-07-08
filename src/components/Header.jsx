import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/dashboard.css'; // or header.css if split

const Header = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="header-bar">
      <h1 className="header-title">SWIFT Dashboard</h1>
      <nav className="header-nav">
        {location.pathname !== '/dashboard' && (
          <Link to="/dashboard">Dashboard</Link>
        )}
        {location.pathname !== '/profile' && (
          <Link to="/profile">Profile</Link>
        )}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;




