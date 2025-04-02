import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnimatedText from '../components/AnimatedText';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current, {
      // opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    });

    // Staggered content animation
    gsap.from([headingRef.current, subheadingRef.current, buttonRef.current], {
      y: 50,
      // opacity: 0,
      duration: 1.2,
      ease: 'back.out(1.2)',
      stagger: 0.3,
      delay: 0.5
    });

    // Floating particles animation
    if (particlesRef.current) {
      const particles = Array.from({ length: 15 }, (_, i) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesRef.current?.appendChild(particle);
        return particle;
      });

      particles.forEach((particle, i) => {
        gsap.to(particle, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          duration: gsap.utils.random(10, 20),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2
        });
      });
    }

    // Scroll-triggered glow effect
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top center',
      onEnter: () => {
        gsap.to(heroRef.current, {
          // '--glow-opacity': 0.8,
          duration: 1,
          ease: 'power2.inOut'
        });
      },
      onLeaveBack: () => {
        gsap.to(heroRef.current, {
          // '--glow-opacity': 0,
          duration: 0.5
        });
      }
    });
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero" ref={heroRef}>
        <div className="particles-container" ref={particlesRef}></div>
        <h1 className="hero-heading" ref={headingRef}>
          Welcome to <span className="brand">Redweb</span>
        </h1>
        <p className="hero-subheading" ref={subheadingRef}>
          Building <span className="highlight">cutting-edge</span> digital experiences
        </p>
        <AnimatedText 
          text="Creation beyond Imagination" 
          textStyle="gradient" 
          cursorStyle="line"
          size="xl"
          typingSpeed={125}
        />
        <button ref={buttonRef} className="cta-button">
          <span className="button-text">Get Started</span>
          <span className="button-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default Home;