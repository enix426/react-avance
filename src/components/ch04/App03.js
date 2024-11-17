import React from 'react';
import { useParams } from 'react-router-dom';

const Produit = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Détails du Produit</h2>
      <p>ID du produit : {id}</p>
    </div>
  );
};
export default Produit;
