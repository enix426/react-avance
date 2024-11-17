import React from 'react';
import { Navigate } from 'react-router-dom';

export const RouteProtegee = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export const PageNonTrouvee = () => (
  <div>
    <h2>Erreur 404</h2>
    <p>La page que vous recherchez n'existe pas.</p>
  </div>
);
