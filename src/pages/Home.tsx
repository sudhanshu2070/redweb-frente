import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import AnimatedText from '../components/AnimatedText';
import QandA from '../components/QnA/QandA';

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
      <QandA />
    </div>
  );
};

export default Home;