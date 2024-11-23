import Bienvenue, {
  Compteur,
  Connexion,
  UserControls,
  UserInfo,
  UserProvider,
  Welcome,
} from "./components/ch02/Examples";
import ProfilUtilisateur from "./components/ch02/Exercise";
import { ChampTexteAutoFocus, Compteur1, CompteurAvecCallback } from "./components/ch03/Examples";
import { ListeProduits } from "./components/ch03/ListProduits";

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
      <CompteurAvecCallback />
      <ListeProduits />
    </>
  );
}

export default App;
