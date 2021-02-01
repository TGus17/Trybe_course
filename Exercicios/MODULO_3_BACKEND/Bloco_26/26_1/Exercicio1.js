const read = require('readline-sync');

const weight = read.questionFloat("Please, digite seu peso: ");
const height = read.questionFloat('Please, digite sua altura: ');

const imc = (peso, altura) => {
  return (peso/(Math.pow(altura, 2))).toFixed(2);
;}

console.log(`
Boa.
Seu peso: ${ weight }.
Sua altura: ${ height }.
Seu IMC = ${ imc(weight, height) }.
`
  );
