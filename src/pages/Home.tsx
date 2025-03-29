// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <h1>Welcome to Our Company</h1>
        <p>Building cool, user-friendly, responsive websites and mobile apps</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;