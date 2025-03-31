import React from 'react';
import Navbar from '../components/Navbar';
import './ProductsServices.css';

const ProductsServices: React.FC = () => {
  const services = [
    {
      icon: 'fas fa-globe',
      title: 'Web Development',
      description: 'Modern, responsive websites tailored to your needs with cutting-edge technologies.',
      features: ['React/Next.js', 'TypeScript', 'SEO Optimized', 'Web Performance']
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with seamless user experiences.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'Offline Support']
    },
    {
      icon: 'fas fa-palette',
      title: 'Design Services',
      description: 'Comprehensive branding and UI/UX design that makes you stand out.',
      features: ['UI/UX Design', 'Brand Identity', 'Prototyping', 'Design Systems']
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Management Tools',
      description: 'Custom dashboards and analytics to streamline your business operations.',
      features: ['Data Visualization', 'Real-time Analytics', 'Custom Reporting', 'API Integration']
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and serverless architectures.',
      features: ['AWS/Azure', 'Serverless', 'Microservices', 'CI/CD Pipelines']
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Integration',
      description: 'Smart solutions powered by machine learning and automation.',
      features: ['Chatbots', 'Predictive Analytics', 'Computer Vision', 'NLP']
    }
  ];

  return (
    <div className="products-services">
      <Navbar />
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-gradient">Products & Services</span>
          </h1>
          <p className="hero-subtitle">
            Innovative solutions designed to propel your business into the digital future
          </p>
          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <h2>Our Comprehensive Offerings</h2>
          <p>Each solution is crafted to address specific business challenges with precision</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-icon">
                <i className={`${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <ul className="card-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className="card-button">
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your goals with our tailored solutions</p>
          <div className="cta-buttons">
            <button className="primary-button">Get a Free Consultation</button>
            <button className="secondary-button">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;