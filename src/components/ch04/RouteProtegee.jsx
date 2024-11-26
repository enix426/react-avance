import React from 'react';
import { Navigate } from 'react-router-dom';

// Protected Route Component
const RouteProtegee = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default RouteProtegee;
