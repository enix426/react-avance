import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Login from './Login';
import Profil from './Profil';
import { PageNonTrouvee } from './Erreur404';
import RouteProtegee from './RouteProtegee';
import Header from './Header';

const App = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profil/:id"
          element={<RouteProtegee isAuthenticated={isAuthenticated} element={<Profil />} />}
        />
        <Route path="*" element={<PageNonTrouvee />} />
      </Routes>
    </Router>
  );
};

export default App;
