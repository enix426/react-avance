// pages/Accueil.js
import React from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => (
  <div>
    <h2>Bienvenue sur notre application React !</h2>
    <p><Link to="/login">Se connecter</Link> ou accéder à un <Link to="/profil/1">profil</Link></p>
  </div>
);
export default Accueil;
