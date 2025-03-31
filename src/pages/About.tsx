import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { aboutData } from '../data/aboutData';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.from([headlineRef.current, subheadRef.current], {
      duration: 1.2,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Service items animation
    gsap.set(itemsRef.current, { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    });

    itemsRef.current.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Section background animation
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      },
      backgroundColor: 'rgba(249, 249, 249, 0.8)'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="about-page">
      <Navbar />
      
      <section className="about-hero">
        <div className="hero-content">
          <h1 ref={headlineRef} className="hero-headline">
            Crafting <span className="highlight">Digital Excellence</span>
          </h1>
          <p ref={subheadRef} className="hero-subhead">
            We transform ideas into impactful digital experiences through innovation and expertise
          </p>
        </div>
        <div className="hero-scroll-indicator">
          <span></span>
        </div>
      </section>

      <section className="about-mission" ref={sectionRef}>
        <div className="mission-content">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with cutting-edge digital solutions that drive growth, 
              enhance user experiences, and create lasting value in an ever-evolving technological landscape.
            </p>
          </div>
          <div className="mission-stats">
            <div className="stat-item">
              <span className="stat-number" data-count="150">27</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="98">24</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number" data-count="12">4.5</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-services">
        <div className="section-header">
          <h2>Our Core Expertise</h2>
          <p>Specialized services that drive your digital success</p>
        </div>
        
        <ul className="services-grid">
          {aboutData.services.map((service, index) => (
            <li
              key={service.id}
              ref={(el) => {
                if (el) {
                  itemsRef.current[index] = el;
                }
              }}
              className="service-card"
              style={{ '--accent-color': service.color } as React.CSSProperties}
            >
              <div className="card-icon">
                <i className={service.icon}></i>
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="card-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-team">
        <div className="section-header">
          <h2>Meet The Team</h2>
          <p>The brilliant minds behind our success</p>
        </div>
        <div className="team-grid">
          {aboutData.team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="social-links">
                  {member.socials.map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noopener noreferrer">
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="team-details">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's discuss how we can help you achieve your digital goals</p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default About;