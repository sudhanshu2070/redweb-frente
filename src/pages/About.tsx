import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import data from '../data/servicesData.json'; // Import JSON data

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    // Initialize GSAP animation
    gsap.set(itemsRef.current, { opacity: 0, scale: 0.8, y: 50 }); // Start hidden and scaled down

    // Animate each item as the user scrolls
    itemsRef.current.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.2, // Staggered animation
        scrollTrigger: {
          trigger: item,
          start: 'top 80%', // Trigger when the item is 80% visible
          toggleActions: 'play none none reverse', // Play on enter, reverse on exit
        },
      });
    });
  }, []);

  return (
    <div className="about">
      <Navbar />
      <div className="content">
        <h1>About Us</h1>
        <p>We are an innovative service provider specializing in:</p>
        <ul className="animated-list">
          {data.map((service, index) => (
            <li
              key={service.id}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              style={{ '--service-color': service.color } as React.CSSProperties}
              className="service-item"
            >
              <span className="icon">{service.icon}</span>
              <div className="service-details">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;