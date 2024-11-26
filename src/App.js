import Bienvenue, {
  Compteur,
  Connexion,
  UserControls,
  UserInfo,
  UserProvider,
  Welcome,
} from "./components/ch02/Examples";
import ProfilUtilisateur from "./components/ch02/Exercise";
import { Calcul, ChampTexteAutoFocus, Compteur1, CompteurAvecCallback, Parent } from "./components/ch03/Examples";
import ProductSearchApp from "./components/ch03/Exercise";
import { ListeProduits } from "./components/ch03/ListProduits";

function App() {
  return (
    <>
    {
      /**
       
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

      <Parent />

      <Calcul />

      <ProductSearchApp />

       */
    }
    </>
    
  );
}

export default App;
