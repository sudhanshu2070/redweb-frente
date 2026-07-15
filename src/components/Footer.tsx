import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="cyber-footer">
      <div className="cyber-footer__container">
        <div className="cyber-footer__row">
          {/* Brand */}
          <div className="cyber-footer__col brand-col">
            <h3 className="cyber-footer__logo">Red<span>web</span></h3>
            <p className="cyber-footer__description">
              We are your solutioning partner, delivering software solutions everywhere through consulting, platform integration, and in-house applications.
            </p>
            <div className="cyber-footer__socials">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="cyber-footer__col Links-col">
            <h4>Company</h4>
            <ul className="cyber-footer__links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/products-services">Services</NavLink></li>
              <li><NavLink to="/contributors">Team</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div className="cyber-footer__col divisions-col">
            <h4>Services</h4>
            <ul className="cyber-footer__links">
              <li>IT & Management Consulting</li>
              <li>Platform Integration</li>
              <li>Custom Applications</li>
              <li>Tower Industry Software</li>
              <li>SRE & DevOps</li>
              <li>Data & Analytics</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="cyber-footer__col newsletter-col">
            <h4>Stay Informed</h4>
            <p>Receive technology insights, delivery frameworks, and industry perspectives from our consulting team.</p>
            <form onSubmit={handleSubscribe} className="cyber-footer__form">
              <div className="cyber-footer__input-wrapper">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Work email address"
                  required
                />
                <button type="submit" aria-label="Subscribe"><FaEnvelope /></button>
              </div>
            </form>
            {subscribed && <span className="cyber-footer__success">✓ Subscribed. Thank you.</span>}
          </div>
        </div>

        <div className="cyber-footer__certifications">
          <span className="cert-item">ISO 9001:2015 Quality Management</span>
          <span className="cert-item">ISO 27001 Information Security</span>
          <span className="cert-item">GDPR Compliant</span>
          <span className="cert-item">SOC 2 Type II</span>
          <span className="cert-item">NASSCOM Member</span>
        </div>

        <div className="cyber-footer__bottom">
          <p>© {new Date().getFullYear()} Redweb Technologies Private Limited. All rights reserved.</p>
          <div className="cyber-footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
