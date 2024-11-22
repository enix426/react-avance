import Bienvenue, {
  Compteur,
  Connexion,
  UserControls,
  UserInfo,
  UserProvider,
  Welcome,
} from "./components/ch02/Examples";
import ProfilUtilisateur from "./components/ch02/Exercise";

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

      <ProfilUtilisateur />
    </>
  );
}

export default App;
