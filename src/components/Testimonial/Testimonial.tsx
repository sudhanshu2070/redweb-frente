import React, { useState } from 'react';
import './Testimonial.css';
import testimonialData from './testimonialData.json';

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   content: string;
//   avatar: string;
// }

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // 3 cards at a time

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(testimonialData.length - cardsToShow, 0) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonialData.length - cardsToShow ? 0 : prev + 1));
  };

  // Get the slice of testimonials to display
  const visibleTestimonials = testimonialData.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Users Say</h2>
      <div className="testimonial-container">
        <button className="nav-button prev" onClick={handlePrev} aria-label="Previous testimonials">
          ←
        </button>
        <div className="testimonial-grid">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                className="testimonial-avatar"
              />
              <p className="testimonial-content">"{testimonial.content}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={handleNext} aria-label="Next testimonials">
          →
        </button>
      </div>
      <div className="testimonial-dots">
        {Array.from({ length: Math.max(testimonialData.length - cardsToShow + 1, 1) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial set ${index + 1}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;