import { describe, expect, test } from 'vitest';
import { sumar, restar, multiplicar } from './calculadora.js';

// Agrupa los casos de prueba de nuestra calculadora.
describe('Calculadora', () => {
  test('suma dos números', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('resta dos números', () => {
    expect(restar(8, 3)).toBe(5);
  });

  test('la resta puede dar un resultado negativo', () => {
    expect(restar(3, 8)).toBe(-5);
  });

  test('multiplica dos números', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });

  test('multiplicar por cero devuelve cero', () => {
    expect(multiplicar(7, 0)).toBe(0);
  });
});