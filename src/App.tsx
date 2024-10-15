import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Characters from './pages/Characters';
import Inventory from './pages/Inventory';
import Skills from './pages/Skills';
import Levels from './pages/Levels';
import Economy from './pages/Economy';
import Organizations from './pages/Organizations';
import Zones from './pages/Zones';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/zones" element={<Zones />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;