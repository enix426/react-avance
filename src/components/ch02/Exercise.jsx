import React, { useState, useEffect } from 'react';

function ProfilUtilisateur() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [amis, setAmis] = useState([]);
  const [filtre, setFiltre] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  console.log(`ProfilUtilisateur has been executed.`);

  
  useEffect(() => {
    console.log(`ProfilUtilisateur useEffect has been executed.`);
    if (isLoggedIn) {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
          setAmis(data);
          setIsLoading(false);
        });
    }
  }, [isLoggedIn]);

  const amisFiltres = amis.filter(ami =>
    ami.name.toLowerCase().includes(filtre.toLowerCase())
  );


  if(isLoading){
    return <h5>Chargement de donnes</h5>
  }

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