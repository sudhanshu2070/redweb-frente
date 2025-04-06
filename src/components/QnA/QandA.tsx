import React from 'react';
import './QandA.css'; // We'll create this CSS file next

interface QandAItem {
  question: string;
  answer: string;
}

const QandA: React.FC = () => {
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

  return (
    <section className="redweb-qanda-section">
      <div className="redweb-qanda-container">
        <h2 className="redweb-qanda-heading">
          <span className="redweb-qanda-heading-accent">Q</span>uestions & 
          <span className="redweb-qanda-heading-accent"> A</span>nswers
        </h2>
        <p className="redweb-qanda-subheading">Everything you need to know about working with us</p>
        
        <div className="redweb-qanda-grid">
          {qaData.map((item, index) => (
            <div key={index} className="redweb-qanda-card">
              <div className="redweb-qanda-question">
                <span className="redweb-qanda-icon">Q</span>
                <h3>{item.question}</h3>
              </div>
              <div className="redweb-qanda-answer">
                <span className="redweb-qanda-icon">A</span>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QandA;