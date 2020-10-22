// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');
const { toNamespacedPath } = require('path');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   let cont = 0;
//   for (let i = 0; i < names.length; i += 1) {
//     for (let j = 0; j < names[i].length; j += 1) {
//       if (names[i][j].toUpperCase() === 'A') {
//         cont += 1;
//       }
//     }
//   }
//   return cont;
// }

function containsA() {
  const total = names.reduce((acc, current) => acc + current.split('')
  .reduce((first, second) => {
    if(second === 'A' || second === 'a') {
      return first + 1;
    }
    return first;
  }, 0), 0);
  
return total;
}

assert.deepEqual(containsA(), 20);