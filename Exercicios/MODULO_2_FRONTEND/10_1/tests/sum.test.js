const sum = require('../exercicios/sum');

describe('A função sum', () => {
  it('Deve retornar 9, quando passado 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Deve retornar 0, quando passado 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Lança um erro quando passado 4 e "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('Lança o erro "parameters must be numbers" quando passado 4 e "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow("parameters must be numbers");
  });
})