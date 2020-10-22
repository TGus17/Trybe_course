const myRemoveWithoutCopy = require('../exercicios/myRemoveWithoutCopy');

describe('A função myRemoveWithoutCopy deverá', () => {
  it('Ao receber por parâmetros [1, 2, 3, 4] e 3 retornará', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Ao receber ([1, 2, 3, 4], 3) como parâmetros, a função meyRemoveWithoutCopy não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verificar se o array passado sofreu alterações', () => {
    let array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 3);
    expect(array).not.toEqual([1, 2, 3, 4]);
  });

  it('Verificar se recebendo os parâmetros ([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})