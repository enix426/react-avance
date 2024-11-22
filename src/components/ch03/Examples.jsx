import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Action non prise en charge");
  }
};

export const Compteur1 = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>Compteur : {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
};

export const ChampTexteAutoFocus = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus(); // Met le champ texte en focus
  }, []);
  return <input ref={inputRef} type="text" placeholder="Entrez du texte ici" />;
};

export const CompteurAvecCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </div>
  );
};

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};

const ComposantMemoise = React.memo(function ({ value }) {
  console.log("Composant rendu");
  return <p>Valeur : {value}</p>;
});

export const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter le compteur
      </button>
      <ComposantMemoise value="Fixe" />
    </div>
  );
};

function CalculIntensif({ number }) {
  const calcul = useMemo(() => {
    console.log("Calcul en cours...");
    return number * 2; // Simulons un calcul coûteux
  }, [number]);
  return <p>Résultat : {calcul}</p>;
}
export const Calcul = () => {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(5);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter compteur ({count})
      </button>
      <button onClick={() => setNumber(number + 1)}>
        Changer le nombre ({number})
      </button>
      <CalculIntensif number={number} />
    </div>
  );
};
