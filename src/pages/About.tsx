import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { aboutData } from '../data/aboutData';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const missionSectionRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<HTMLLIElement[]>([]);
  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);
  const heroSubheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Hero animation
    gsap.from([heroHeadlineRef.current, heroSubheadRef.current], {
      duration: 1.2,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Service items animation
    gsap.set(serviceCardsRef.current, { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    });

    serviceCardsRef.current.forEach((item, index) => {
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
    gsap.to(missionSectionRef.current, {
      scrollTrigger: {
        trigger: missionSectionRef.current,
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
    <div className="about-container">
      <Navbar />
      
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1 ref={heroHeadlineRef} className="about-hero-headline">
            {/* Crafting  */}
            <span className="about-hero-highlight">Crafting Digital Excellence</span>
          </h1>
          <p ref={heroSubheadRef} className="about-hero-subhead">
            We transform ideas into impactful digital experiences through innovation and expertise
          </p>
        </div>
        <div className="about-hero-scroll-indicator">
          <span className="about-hero-scroll-arrow"></span>
        </div>
      </section>

      <section className="about-mission-section" ref={missionSectionRef}>
        <div className="about-mission-content">
          <div className="about-mission-text">
            <h2 className="about-mission-title">Our Mission</h2>
            <p className="about-mission-description">
              To empower businesses with cutting-edge digital solutions that drive growth, 
              enhance user experiences, and create lasting value in an ever-evolving technological landscape.
            </p>
          </div>
          <div className="about-mission-stats">
            <div className="about-mission-stat">
              <span className="about-mission-stat-number" data-count="150">27</span>
              <span className="about-mission-stat-label">Projects Completed</span>
            </div>
            <div className="about-mission-stat">
              <span className="about-mission-stat-number" data-count="98">24</span>
              <span className="about-mission-stat-label">Client Satisfaction</span>
            </div>
            <div className="about-mission-stat">
              <span className="about-mission-stat-number" data-count="12">4.5</span>
              <span className="about-mission-stat-label">Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-services-section">
        <div className="about-services-header">
          <h2 className="about-services-title">Our Core Expertise</h2>
          <p className="about-services-subtitle">Specialized services that drive your digital success</p>
        </div>
        
        <ul className="about-services-grid">
          {aboutData.services.map((service, index) => (
            <li
              key={service.id}
              ref={(el) => {
                if (el) {
                  serviceCardsRef.current[index] = el;
                }
              }}
              className="about-service-card"
              style={{ '--service-accent-color': service.color } as React.CSSProperties}
            >
              <div className="about-service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="about-service-content">
                <h3 className="about-service-title">{service.title}</h3>
                <p className="about-service-description">{service.description}</p>
                <ul className="about-service-features">
                  {service.features.map((feature, i) => (
                    <li key={i} className="about-service-feature">{feature}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-team-section">
        <div className="about-team-header">
          <h2 className="about-team-title">Meet The Team</h2>
          <p className="about-team-subtitle">The brilliant minds behind our success</p>
        </div>
        <div className="about-team-grid">
          {aboutData.team.map((member, index) => (
            <div key={index} className="about-team-member">
              <div className="about-team-member-image">
                <img src={member.image} alt={member.name} className="about-team-member-photo" />
                <div className="about-team-member-socials">
                  {member.socials.map((social, i) => (
                    <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="about-team-member-social-link">
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="about-team-member-info">
                <h3 className="about-team-member-name">{member.name}</h3>
                <p className="about-team-member-position">{member.position}</p>
                <p className="about-team-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta-section">
        <h2 className="about-cta-title">Ready to Start Your Project?</h2>
        <p className="about-cta-text">Let's discuss how we can help you achieve your digital goals</p>
        <button className="about-cta-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default About;