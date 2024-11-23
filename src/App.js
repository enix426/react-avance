import Bienvenue, {
  Compteur,
  Connexion,
  UserControls,
  UserInfo,
  UserProvider,
  Welcome,
} from "./components/ch02/Examples";
import ProfilUtilisateur from "./components/ch02/Exercise";
<<<<<<< Updated upstream
=======
import { ChampTexteAutoFocus, Compteur1, CompteurAvecCallback } from "./components/ch03/Examples";
import { ListeProduits } from "./components/ch03/ListProduits";
import { ProductSearchApp } from "./components/ch03/Exercise";
>>>>>>> Stashed changes

function App() {
  return (
    <>
      {/* <Bienvenue nom="John" />
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
<<<<<<< Updated upstream
=======
      <Compteur1 />
      <ChampTexteAutoFocus />
      <CompteurAvecCallback />
      <ListeProduits /> */}
      <ProductSearchApp />
>>>>>>> Stashed changes
    </>
  );
}

export default App;
