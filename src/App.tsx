import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductsServices from './pages/ProductsServices';
import Contributors from './pages/Contributors';
import JavaIDE from './components/JavaIDE/JavaIDE';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/javaSele" element={<JavaIDE />} />
      </Routes>
    </Router>
  );
};

export default App;
