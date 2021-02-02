const read = require('readline-sync');

const imc = (peso, altura) => {
  return (peso/(Math.pow(altura, 2))).toFixed(2);
;}

const comebackResponse = () => {
  const weight = read.questionFloat("Please, digite seu peso: ");
  const height = read.questionFloat('Please, digite sua altura: ');

  const imcCalculate = imc(weight, height);
  console.log(`Seu IMC = ${imcCalculate}.`);

  if (imcCalculate < 18.5 ) {
    return console.log(`IMC = ${imcCalculate}. Abaixo do peso.`)
  };
  if (imcCalculate < 24.9) {
    return console.log("Peso normal.");
  };
  if (imcCalculate < 29.9) {
    return console.log("Acima do peso (sobrepeso).");
  };
  if (imcCalculate < 34.9) {
    return console.log("Obesidade grau I.");
  };
  if (imcCalculate < 39.9) {
    return console.log("Obesidade grau II.");
  };
  return console.log("Obesidade graus III e IV.");
};

comebackResponse();
