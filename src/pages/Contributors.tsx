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
            <h3>Mark Zuckerberg</h3>
            <p>Lead Developer</p>
          </div>
          <div className="contributor-card">
            <h3>Lucifer</h3>
            <p>VP and Marketing Head</p>
          </div>
          <div className="contributor-card">
            <h3>Vemy Salvatore</h3>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;