import React from "react";
import { useFetch } from "./Examples";
export const ListeProduits = () => {
  const {
    data: produits,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  if (loading) return <p>Chargement des produits...</p>;
  if (error) return <p>Erreur : {error}</p>;
  console.log(`ListeProduits rendering`);
  return (
    <div>
      <h2>Liste des Produits</h2>
      <ul>
        {produits &&
          produits.map((produit) => (
            <li key={produit.id}>
              <h3>{produit.title}</h3>
              <p>{produit.price} €</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
