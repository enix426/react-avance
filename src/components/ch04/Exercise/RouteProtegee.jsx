// components/RouteProtegee.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteProtegee = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default RouteProtegee;
