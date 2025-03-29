import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Animate hero content
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Staggered animation for text and button
    gsap.fromTo(
      [headingRef.current, subheadingRef.current, buttonRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero" ref={heroRef}>
        <h1 ref={headingRef}>Welcome to Redweb</h1>
        <p ref={subheadingRef}>
          Building cool, user-friendly, responsive websites and mobile apps
        </p>
        <button ref={buttonRef} className="cta-button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;