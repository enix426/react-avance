import React, { useState, useEffect } from 'react';

function ProfilUtilisateur() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [amis, setAmis] = useState([]);
  const [filtre, setFiltre] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setAmis(data));
    }
  }, [isLoggedIn]);

  const amisFiltres = amis.filter(ami =>
    ami.name.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Bienvenue, utilisateur !</h1>
          <button onClick={() => setIsLoggedIn(false)}>Déconnexion</button>
          <input
            type="text"
            placeholder="Rechercher un ami"
            value={filtre}
            onChange={e => setFiltre(e.target.value)}
          />
          <ul>
            {amisFiltres.map(ami => (
              <li key={ami.id}>{ami.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1>Veuillez vous connecter</h1>
          <button onClick={() => setIsLoggedIn(true)}>Connexion</button>
        </div>
      )}
    </div>
  );
}

export default ProfilUtilisateur;