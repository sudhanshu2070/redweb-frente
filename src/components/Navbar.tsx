import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/redweb-logo.jpg'; 

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Brand and Logo */}
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        Redweb
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products-services"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setIsMenuOpen(false)}
          >
            Products & Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contributors"
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={() => setIsMenuOpen(false)}
          >
            Contributors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;