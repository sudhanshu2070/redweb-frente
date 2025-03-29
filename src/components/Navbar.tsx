// src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CompanyName</div>
      <ul className="navbar-links">
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/products-services" activeClassName="active">Products & Services</NavLink></li>
        <li><NavLink to="/contributors" activeClassName="active">Contributors</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;