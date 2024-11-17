import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produit from './pages/Produit';
const App = () => (
  <Router>
    <Routes>
      <Route path="/produit/:id" element={<Produit />} />
    </Routes>
  </Router>
);
export default App;
