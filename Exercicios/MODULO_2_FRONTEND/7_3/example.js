const assert = require('assert');

const names1 = ['João', 'Maria', 'Gustavo', 'Samara'];
const names2 = ['João', 'Marias', 'Gustavo', 'Samara'];

assert.notDeepEqual(names1, names2, 'Theese two are the same');