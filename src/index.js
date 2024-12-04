import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/ch05/exercise/App';
import validationSchema from './components/ch06/validationSchema';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <validationSchema />
  </React.StrictMode>
);
