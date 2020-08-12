const assert = require('assert');

const sum = (a, b) => {
  return a + b;
}

const expected = sum(2,2);
assert.equal(expected, 4, 'two plus two equals 4');