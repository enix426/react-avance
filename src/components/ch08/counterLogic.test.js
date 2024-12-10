import counterLogic from './counterLogic';

test('La logique du compteur fonctionne correctement', () => {
  const counter = counterLogic();

  expect(counter.getCount()).toBe(0); // Valeur initiale

  counter.increment();
  expect(counter.getCount()).toBe(1); // Après incrémentation

  counter.decrement();
  expect(counter.getCount()).toBe(0); // Après décrémentation

  counter.reset();
  expect(counter.getCount()).toBe(0); // Après réinitialisation
});
