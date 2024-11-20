import Bienvenue, {
  Compteur,
  Connexion,
  UserControls,
  UserInfo,
  UserProvider,
  Welcome,
} from "./components/ch02/Examples";

function App() {
  return (
    <>
      <Bienvenue nom="John" />
      <Welcome nom="Alex" />
      <Compteur />
      <Connexion isLoggedIn={false} />
      <Connexion isLoggedIn={false} />
      <Connexion isLoggedIn={false} />
      <Connexion isLoggedIn={false} />
      <UserProvider>
        <UserInfo />
        <UserControls />
      </UserProvider>
    </>
  );
}

export default App;
