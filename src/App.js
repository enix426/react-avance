import Bienvenue, {
  Compteur,
  Connexion,
  UserControls,
  UserInfo,
  UserProvider,
  Welcome,
} from "./components/ch02/Examples";
import ProfilUtilisateur from "./components/ch02/Exercise";
import { ChampTexteAutoFocus, Compteur1 } from "./components/ch03/Examples";

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
      <Compteur1 />
      <ChampTexteAutoFocus />
    </>
  );
}

export default App;
