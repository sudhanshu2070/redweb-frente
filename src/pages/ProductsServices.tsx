import React from 'react';
import Navbar from '../components/Navbar';
import './ProductsServices.css';

const ProductsServices: React.FC = () => {
  return (
    <div className="products-services">
      <Navbar />
      <div className="content">
        <h1>Products & Services</h1>
        <p className="subtitle">Explore our cutting-edge solutions designed for the modern world.</p>
        <div className="services-grid">
          <div className="service-card">
            <i className="icon fas fa-globe"></i>
            <h3>Web Development</h3>
            <p>Modern, responsive websites tailored to your needs.</p>
          </div>
          <div className="service-card">
            <i className="icon fas fa-mobile-alt"></i>
            <h3>Mobile Apps</h3>
            <p>iOS & Android applications with seamless user experiences.</p>
          </div>
          <div className="service-card">
            <i className="icon fas fa-palette"></i>
            <h3>Design Services</h3>
            <p>Logos, branding, and UI/UX design that stands out.</p>
          </div>
          <div className="service-card">
            <i className="icon fas fa-chart-line"></i>
            <h3>Management Tools</h3>
            <p>Dashboards and analytics tools to streamline operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;