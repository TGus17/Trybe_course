const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const { imc } = require('./imc');

const comebackResponse = (valor) => {

  if (valor < 18.5 ) {
    return console.log(`IMC = ${imcCalculate}. Abaixo do peso.`)
  };
  if (valor < 24.9) {
    return console.log("Peso normal.");
  };
  if (valor < 29.9) {
    return console.log("Acima do peso (sobrepeso).");
  };
  if (valor < 34.9) {
    return console.log("Obesidade grau I.");
  };
  if (valor < 39.9) {
    return console.log("Obesidade grau II.");
  };
  return console.log("Obesidade graus III e IV.");
};

prompt([
  {
    type: "input",
    name: "peso",
    message: "Digite seu peso:",
  },
  {
    type: "input",
    name: "altura",
    message: "Digite sua altura:",
  }
])
  .then((answers) => {
    const valor = imc(answers.peso, answers.altura);
    console.log(`Seu IMC foi igual a ${valor}`);
    // console.log("Sua faixa de peso é: ");
    comebackResponse(valor);
    // return resposta;
  });