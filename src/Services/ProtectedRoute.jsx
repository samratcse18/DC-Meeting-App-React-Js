import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = localStorage.getItem('Loggedin');

  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
