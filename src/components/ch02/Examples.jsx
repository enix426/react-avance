import React, { useState, useEffect, createContext, useContext } from "react";

function Bienvenue({ nom }) {
  return <h1>Bienvenue, {nom} !</h1>;
}

export const Welcome = ({ nom }) => {
  return <h1>Welcome, {nom} !</h1>;
};

export const Compteur = () => {
  // variable d'état de composant (hook state).
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${compte} fois`;
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

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({username: "abbes"});
  
  const loginUser = (username) => {
    setUser(username);
  };

  const logoutUser = () => {
    setUser(null);
  };
  
  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <div>{user ? <p>Welcome, {user.username}!</p> : <p>Please log in.</p>}</div>
  );
};

export const UserControls = () => {
  const { user, loginUser, logoutUser } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <button onClick={logoutUser}>Logout</button>
      ) : (
        <button onClick={() => loginUser({username: "Alex", role: "admin"})}>Login</button>
      )}
    </div>
  );
};

export default Bienvenue;
