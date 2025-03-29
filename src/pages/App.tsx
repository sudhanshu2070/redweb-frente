// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductsServices from './pages/ProductsServices';
import Contributors from './pages/Contributors';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products-services" component={ProductsServices} />
        <Route path="/contributors" component={Contributors} />
      </Switch>
    </Router>
  );
};

export default App;