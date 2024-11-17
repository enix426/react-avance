import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import Login from './pages/Login';
import RouteProtegee from './Examples';
const App = () => {
  const isAuthenticated = true; // Remplacez par votre logique d'authentification réelle
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<RouteProtegee isAuthenticated={isAuthenticated} element={<Profil />} />} />
      </Routes>
    </Router>
  );
};

export default App;
