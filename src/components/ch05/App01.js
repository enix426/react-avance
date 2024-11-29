// App.jsx

import React from "react";
import { Provider } from "react-redux";
import store from "./store1";
import CounterComponent from "./CounterComponent1";

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
