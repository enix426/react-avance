// Form.js
import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Bonjour, ${username}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Envoyer</button>
      {message && <p>{message}</p>}
    </form>
  );
};
export default Form;
