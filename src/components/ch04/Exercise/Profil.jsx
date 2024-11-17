// pages/Profil.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Profil = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Profil de l'utilisateur</h2>
      <p>ID de l'utilisateur : {id}</p>
    </div>
  );
};
export default Profil;
