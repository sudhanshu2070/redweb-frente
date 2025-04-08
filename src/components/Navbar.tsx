import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/redweb-logo.jpg';
import ContactModal from './SmartContactForm/ContactModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false); // Add modal state

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand and Logo */}
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="Redweb Logo" className="navbar-logo" />
          <span className="brand-name">Redweb</span>
        </NavLink>

        {/* Hamburger Menu for Mobile */}
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/products-services', label: 'Products & Services' },
              { path: '/contributors', label: 'Contributors' },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                  <span className="link-underline"></span>
                </NavLink>
              </li>
            ))}
            
            {/* Mobile Contact Button */}
            <li className="mobile-contact-item">
              <button 
                onClick={() => {
                  setShowContactModal(true);
                  closeMenu();
                }}
                className="contact-button-mobile"
              >
                Get a Quote
              </button>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <button 
            onClick={() => setShowContactModal(true)}
            className="contact-button-desktop"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal 
        isOpen={showContactModal}  
        onClose={() => setShowContactModal(false)} />
      )}
    </nav>
  );
};

export default Navbar;