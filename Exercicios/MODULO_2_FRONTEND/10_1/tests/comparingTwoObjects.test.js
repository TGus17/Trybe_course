const obj1 = require('../exercicios/comparingTwoObjects');
const obj2 = require('../exercicios/comparingTwoObjects');
const obj3 = require('../exercicios/comparingTwoObjects');

describe('Comparando dois objetos', () => {
  it('Comparando objeto 1 com objeto 2', () => {
    expect(obj1).toEqual(obj2);
  });  

  it('Comparando objeto 1 com objeto 3', () => {
    expect(obj1).toEqual(obj3);
  });

  it('Comparando objeto 2 com objeto 3', () => {
    expect(obj2).toEqual(obj3);
  });
})