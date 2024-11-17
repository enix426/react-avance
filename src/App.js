import Bienvenue, { Compteur, Welcome } from "./components/ch02/Examples";

function App() {
  return (
    <>
      <Bienvenue nom="John" />
      <Welcome nom="Alex" />
      <Compteur />
    </>
  );
}

export default App;
