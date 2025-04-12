import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductsServices from './pages/ProductsServices';
import Contributors from './pages/Contributors';
import JavaIDE from './components/JavaIDE/JavaIDE';
import PythonIDE from './components/PythonIDE/PythonIDE';
import DevelopersCorner from './components/DevelopersCorner/DevelopersCorner';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/javaIDE" element={<JavaIDE />} />
        <Route path="/pythonIDE" element={<PythonIDE />} />
        <Route path="/dCorn" element={<DevelopersCorner />} />
      </Routes>
    </Router>
  );
};

export default App;
