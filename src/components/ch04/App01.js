import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Profil from './pages/Profil';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/profil" element={<Profil />} />
    </Routes>
  </Router>
);

export default App;
