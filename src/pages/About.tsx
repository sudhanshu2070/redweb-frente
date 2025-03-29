import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        <p>We are a innovative service provider specializing in:</p>
        <ul>
          <li>Modern website development</li>
          <li>Mobile app creation</li>
          <li>Logo design</li>
          <li>Portfolio management</li>
          <li>Monitoring dashboards</li>
          <li>Website redesign</li>
        </ul>
      </div>
    </div>
  );
};

export default About;