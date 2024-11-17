// Form.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('le formulaire soumet le nom d\'utilisateur et affiche un message', () => {
  render(<Form />);
  const input = screen.getByPlaceholderText(/nom d'utilisateur/i);
  fireEvent.change(input, { target: { value: 'Jean' } });

  const button = screen.getByText(/envoyer/i);
  fireEvent.click(button);

  const message = screen.getByText(/Bonjour, Jean/i);
  expect(message).toBeInTheDocument();
});
