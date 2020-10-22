const myRemove = require('../exercicios/myRemove');

describe('A função myRemove', () => {
  it('Ao receber o array = [1, 2, 3, 4] e 3 retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Ao receber o array = [1, 2, 3, 4] e 3 não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Ao receber um array = [1, 2, 3, 4] e 3 passados como parâmetros, o array não sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    const number = 3;
    expect(myRemove(array, number)).not.toContain(array);
  });

  it('Ao receber o array = [1, 2, 3, 4] junto com 5, retorna [1, 2, 3, 4, 5]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})