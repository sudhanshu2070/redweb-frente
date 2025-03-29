import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Redweb</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
        </li>
        <li>
          <NavLink to="/products-services" className={({ isActive }) => (isActive ? 'active' : '')}>Products & Services</NavLink>
        </li>
        <li>
          <NavLink to="/contributors" className={({ isActive }) => (isActive ? 'active' : '')}>Contributors</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
