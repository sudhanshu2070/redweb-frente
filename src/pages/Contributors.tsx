import React from 'react';
import Navbar from '../components/Navbar';
import './Contributors.css';
import { useNavigate } from 'react-router-dom';

const Contributors: React.FC = () => {
  const navigate = useNavigate();

  const contributors = [
    {
      name: "Alica Keys",
      role: "Lead Developer",
      avatar: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e53517fc6b2492d63287d6d_peep-11.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Lucifer Morningstar",
      role: "VP of Marketing",
      avatar: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a30d871312cf4100aed_peep-73.png",
      social: {
        twitter: "#",
        instagram: "#",
        dribbble: "#"
      }
    },
    {
      name: "Vemy Salvatore",
      role: "CEO & Founder",
      avatar: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a877371bbe27fa0b695_peep-76.png",
      social: {
        twitter: "#",
        linkedin: "#",
        medium: "#"
      }
    },
    {
      name: "Amy Adams",
      role: "Lead Designer",
      avatar: "https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e53536a9588e087617bd93c_peep-23.png",
      social: {
        twitter: "#",
        github: "#",        
        medium: "#"  
      }
    }
  ];

  return (
    <div className="contributors-page">
      <Navbar />
      
      <section className="contributors-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Meet Our <span className="highlight">Talented Team</span>
          </h1>
          <p className="hero-subtitle">
            The brilliant minds behind our success and innovation
          </p>
        </div>
      </section>

      <section className="contributors-section">
        <div className="section-header">
          <h2>Our Key Contributors</h2>
          <p>Passionate professionals driving our vision forward</p>
        </div>
        
        <div className="contributors-grid">
          {contributors.map((person, index) => (
            <div key={index} className="contributor-card">
              <div className="card-avatar">
                <img src={person.avatar} alt={person.name} />
                <div className="social-links">
                  {Object.entries(person.social).map(([platform, url]) => (
                    <a 
                      key={platform} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${person.name}'s ${platform}`}
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="card-info">
                <h3>{person.name}</h3>
                <p className="role">{person.role}</p>
                <div className="card-footer">
                  <button 
                  className="contact-btn"
                    onClick={() => navigate('/aboutDev', { state: { namefromParam: person.name } })}
                  >
                    Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="developer-section">
        <div className="developer-container">
          <div className="developer-content">
            <div className="developer-text">
              <h2>Developer Tools & Resources</h2>
              <p>
                Explore our powerful developer tools and playgrounds designed to 
                enhance your coding experience and boost productivity.
              </p>
              <button 
                className="developer-button"
                onClick={() => navigate('/devCorner')}
              >
                <span className="button-icon">{'</>'}</span>
                <span>Go to Developer Corner</span>
                <span className="button-arrow">→</span>
              </button>
            </div>
            <div className="developer-image">
            <img
              // src="https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535a83d3992372c25556b9_peep-76.svg"
              src="https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535741f5fa1a13a1f8f233_peep-48.png"
              alt="Developer illustration"
              className="developer-illustration"
            />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contributors;