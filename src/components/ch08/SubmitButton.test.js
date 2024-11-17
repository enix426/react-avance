// SubmitButton.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton", () => {
  test("should render the button and trigger onClick event", () => {
    const mockOnClick = jest.fn(); // Création d'un mock pour la fonction onClick

    render(<SubmitButton onClick={mockOnClick} />); // Rendu du composant avec la fonction mockée

    // Vérification que le bouton est bien présent
    const buttonElement = screen.getByTestId("submit-button");
    expect(buttonElement).toBeInTheDocument();

    // Simuler un clic sur le bouton
    fireEvent.click(buttonElement);

    // Vérification que la fonction onClick a bien été appelée après le clic
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

