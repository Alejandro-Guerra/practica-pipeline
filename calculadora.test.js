const sumar = require('./calculadora.js');

test('suma 1 + 2 para que sea igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});

// Esta prueba fallará a propósito para que puedas obtener la captura del pipeline fallido
test('suma 5 + 5 para que sea igual a 10', () => {
  expect(sumar(5, 5)).toBe(11); // Error intencional
});