// pages/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Logique d'authentification (simulée)
    // Une fois authentifié, rediriger l'utilisateur vers son profil.
    navigate('/profil/1');
  };
  return (
    <div>
      <h2>Page de Connexion</h2>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};
export default Login;
