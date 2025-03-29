// src/pages/ProductsServices.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import './ProductsServices.css';

const ProductsServices: React.FC = () => {
  return (
    <div className="products-services">
      <Navbar />
      <div className="content">
        <h1>Products & Services</h1>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Modern, responsive websites</p>
          </div>
          <div className="service-card">
            <h3>Mobile Apps</h3>
            <p>iOS & Android applications</p>
          </div>
          <div className="service-card">
            <h3>Design Services</h3>
            <p>Logos & UI/UX</p>
          </div>
          <div className="service-card">
            <h3>Management Tools</h3>
            <p>Dashboards & Analytics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;