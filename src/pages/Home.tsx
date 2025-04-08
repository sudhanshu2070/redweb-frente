import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import AnimatedText from '../components/AnimatedText';
import QandA from '../components/QnA/QandA';
import ContactModal from '../components/SmartContactForm/ContactModal';

const Home: React.FC = () => {
  return (
    <div className="redweb-home">
      <Navbar />
      <div className="redweb-home__hero">
        <h1 className="redweb-home__heading">
          Welcome to <span className="redweb-home__brand">Redweb</span>
        </h1>
        <p className="redweb-home__subheading">
          Building <span className="redweb-home__highlight">cutting-edge</span> digital experiences
        </p>
        <AnimatedText 
          text="Creation beyond Imagination" 
          textStyle="gradient" 
          cursorStyle="line"
          size="xl"
          typingSpeed={125}
        />
        <button className="redweb-home__cta-button">
          <span className="redweb-home__cta-text">Get Started</span>
          <span className="redweb-home__cta-icon">→</span>
        </button>
      </div>
      <div className="redweb-home__separator"></div>
      <div className="redweb-home__section-intro">
        <h2>Have Questions?</h2>
        <p>Find answers below before getting in touch with us.</p>
      </div>
      <section className="redweb-home__qanda">
        <QandA />
      </section>
        <section className="cta-section">
          <h2>Ready to get started?</h2>
          <ContactModal  
            isOpen={false}
            defaultService="Web Development"
            onClose={() => console.log('Contact modal closed')} />
        </section>
          </div>
  );
};

export default Home;