const sumar = require('./calculadora.js');

test('suma 1 + 2 para que sea igual a 3', () => {
  expect(sumar(1, 2)).toBe(3);
});


test('suma 5 + 5 para que sea igual a 10', () => {
  expect(sumar(5, 5)).toBe(10); 
});