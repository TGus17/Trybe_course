const myFizzBuzz = require('../exercicios/fizzBuzz');

describe('A função myFizzBuzz', () => {
  it('Ao receber um num divisível por 3 e 5, retorna o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Ao receber um num divisível por 3, retorna o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Ao receber um num divisível por 5, retorna o esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Ao receber um num não divisível por 3 e nem por 5, retorna o esperado', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  it('Ao receber um parâmetro que não seja num, retorna o esperado', () => {
    expect(myFizzBuzz('string')).toBeFalsy();
  });
})