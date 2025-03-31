import React from 'react';
import Navbar from '../components/Navbar';
import './Contributors.css';

const Contributors: React.FC = () => {
  const contributors = [
    {
      name: "Mark Zuckerberg",
      role: "Lead Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Lucifer Morningstar",
      role: "VP of Marketing",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      social: {
        twitter: "#",
        instagram: "#",
        dribbble: "#"
      }
    },
    {
      name: "Vemy Salvatore",
      role: "CEO & Founder",
      avatar: "https://randomuser.me/api/portraits/men/17.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        medium: "#"
      }
    },
    {
      name: "Amy Adams",
      role: "Lead Designer",
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
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
                  <button className="contact-btn">Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contributors;