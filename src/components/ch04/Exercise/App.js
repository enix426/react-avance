// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Login from './pages/Login';
import Profil from './pages/Profil';
import Erreur404 from './pages/Erreur404';
import RouteProtegee from './components/RouteProtegee';

const App = () => {
  const isAuthenticated = false; // Remplacez par la logique d'authentification réelle

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profil/:id"
          element={<RouteProtegee isAuthenticated={isAuthenticated} element={<Profil />} />}
        />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </Router>
  );
};

export default App;
