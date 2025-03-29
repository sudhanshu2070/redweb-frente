import React from 'react';
import Navbar from '../components/Navbar';
import './Contributors.css';

const Contributors: React.FC = () => {
  return (
    <div className="contributors">
      <Navbar />
      <div className="content">
        <h1>Our Contributors</h1>
        <div className="contributors-list">
          <div className="contributor-card">
            <h3>John Doe</h3>
            <p>Lead Developer</p>
          </div>
          <div className="contributor-card">
            <h3>Jane Smith</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="contributor-card">
            <h3>Tony Stark</h3>
            <p>Associate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;