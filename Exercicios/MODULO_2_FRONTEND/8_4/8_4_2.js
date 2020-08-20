// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:

const assert = require('assert')

function sum (...inputs) {
  let sum = 0;

  inputs.forEach(item => sum += item)
  return sum;
  // for (let i of inputs) {
  //   sum += i;
  // }
  // return sum;
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
