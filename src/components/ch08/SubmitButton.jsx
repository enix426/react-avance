// SubmitButton.js
import React from 'react';

const SubmitButton = ({ onClick }) => (
  <button onClick={onClick} data-testid="submit-button">
    Submit
  </button>
);

export default SubmitButton;
