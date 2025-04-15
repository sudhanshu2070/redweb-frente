import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductsServices from './pages/ProductsServices';
import Contributors from './pages/Contributors';
import JavaIDE from './components/JavaIDE/JavaIDE';
import PythonIDE from './components/PythonIDE/PythonIDE';
import DevelopersCorner from './components/DevelopersCorner/DevelopersCorner';
import ShowcasePage from './pages/ShowcasePage/ShowcasePage';

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
        <Route
          path="/api-core"
          element={
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '2.0rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <img
            src="https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e532a5133d3686ff53d2a74_peep-2.png"
            alt="Work in progress"
            style={{
              marginBottom: '1rem',
              borderRadius: '8px',
              height: '150px',
              width: '150px',
              objectFit: 'cover',
            }}
          />
          <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚧</span>
          Work under progress. Thank you for your patience. Come back soon!
        </div>
          }
        />
        <Route path="/devCorner" element={<DevelopersCorner />} />
        <Route path="/aboutDev" element={<ShowcasePage />} />
      </Routes>
    </Router>
  );
};

export default App;
