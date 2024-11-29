import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Profil from './Profile';
import Login from './Login';
import RouteProtegee from './RouteProtegee';
import Home from './Home'; // New home page component

const App = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for / */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={<RouteProtegee isAuthenticated={isAuthenticated} element={<Profil />} />}
        />
        <Route path="*" element={<Navigate to="/" />} /> {/* Fallback for undefined routes */}
      </Routes>
    </Router>
  );
};

export default App;
