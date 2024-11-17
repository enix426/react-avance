import React, { useState, useEffect } from "react";


function Bienvenue({nom}) {
  return <h1>Bienvenue, {nom} !</h1>;
}

export const Welcome = ({ nom }) => {
  return <h1>Welcome, {nom} !</h1>;
};

export const Compteur = () => {
  // variable d'état de composant (hook state).
  const [compte, setCompte] = useState(0);

  // useEffect hook
  useEffect(() => {
    console.log("Le composant est monté ou le compte a changé:", compte);

    return () => {
      console.log(
        "Nettoyage : Le composant va être démonté ou compte va changer"
      );
    };
  }, [compte]);

  return (
    <div>
      <p>Vous avez cliqué {compte} fois</p>
      <button onClick={() => setCompte(compte + 1)}>Incrémenter</button>
    </div>
  );
};

export const Connexion = ({ isLoggedIn }) => {
  const [connecte, setConnecte] = useState(isLoggedIn);
  return (
    <div>
      {connecte ? (
        <div>
          <h2>Vous êtes connecté</h2>
          <button onClick={() => setConnecte(false)}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <h2>Veuillez vous connecter</h2>
          <button onClick={() => setConnecte(true)}>Connexion</button>
        </div>
      )}
    </div>
  );
};

export default Bienvenue;
