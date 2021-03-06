//4. Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

const assert = require('assert')

const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian"
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian"
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian"
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish"
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian"
  }
]

// escreva filterPeople abaixo

const filteredPeople = filterPeople(people);

function filterPeople(objeto) {
  return people.filter(item => item.nationality === 'Australian' && item.bornIn <= 2000
  )
}

const [posicao1, posicao2] = filteredPeople;

assert.deepEqual(posicao1, { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(posicao2, { name: "Toby", bornIn: 1901, nationality: "Australian" })