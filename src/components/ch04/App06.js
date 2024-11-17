import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import PageNonTrouvee from './pages/PageNonTrouvee';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="*" element={<PageNonTrouvee />} />
    </Routes>
  </Router>
);
export default App;
