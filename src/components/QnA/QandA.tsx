import React, { useState } from 'react';
import './QandA.css';

interface QandAItem {
  question: string;
  answer: string;
}

const QandA: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const qaData: QandAItem[] = [
    {
      question: "What services does Redweb offer?",
      answer: "We provide cutting-edge web development, UI/UX design, mobile app development, and digital strategy services to bring your ideas to life."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most projects range from 4-12 weeks. We'll provide a detailed timeline after our initial consultation."
    },
    {
      question: "What technologies do you work with?",
      answer: "We specialize in modern stacks including React, Next.js, Node.js, TypeScript, and cutting-edge design tools like Figma and Framer."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! We provide maintenance packages and ongoing support to ensure your digital products stay up-to-date and perform optimally."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="redweb-qanda-section">
      <div className="redweb-qanda-container">
        <div className="redweb-qanda-header">
          <h2 className="redweb-qanda-heading">
            <span className="redweb-qanda-heading-accent">Q</span>uestions & 
            <span className="redweb-qanda-heading-accent"> A</span>nswers
          </h2>
          <p className="redweb-qanda-subheading">Everything you need to know about working with us</p>
          <div className="redweb-qanda-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="redweb-qanda-accordion">
          {qaData.map((item, index) => (
            <div 
              key={index}
              className={`redweb-qanda-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="redweb-qanda-question"
                onClick={() => toggleAccordion(index)}
              >
                <div className="question-number">0{index + 1}</div>
                <h3>{item.question}</h3>
                <div className="redweb-qanda-toggle">
                  <div className="toggle-line"></div>
                  <div className={`toggle-line ${activeIndex === index ? 'rotated' : ''}`}></div>
                </div>
              </div>
              <div className="redweb-qanda-answer">
                <div className="answer-content">
                  <p>{item.answer}</p>
                  <button className="contact-button">
                    Contact Us About This
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QandA;